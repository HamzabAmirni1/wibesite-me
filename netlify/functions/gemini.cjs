// Netlify Serverless Function for Amirni AI
// Powered by Gemini Web Scraper RPC from bot-hamza-amirni-v2-master

function isValidReply(txt) {
  if (!txt || typeof txt !== 'string') return false;
  const clean = txt.trim();
  if (clean.length < 3) return false;
  const bad = [
    'missing text parameter',
    'missing parameter',
    'bad request',
    'rate limit',
    'too many requests',
    'error code',
    'internal server error',
    'undefined',
    'null',
    '<html>',
    '<!doctype',
    'error',
    'not exist',
    'unexpected response',
    'invalid response',
    '404 not found',
    'no response received',
    'quota exceeded'
  ];
  const lower = clean.toLowerCase();
  if (bad.some((b) => lower === b || lower.startsWith(b + ':') || lower.startsWith(b + ' '))) return false;
  if (lower.includes('based on the information provided') && lower.includes('technical question')) return false;
  return true;
}

// 1. Gemini Web Scraper RPC (Keyless & Unlimited)
async function askGeminiWeb(prompt, systemPrompt = '', history = [], timeoutMs = 12000) {
  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    let histContext = '';
    if (Array.isArray(history) && history.length > 0) {
      histContext = '\n\n══════════════════════════\n📜 سجل المحادثة السابقة:\n' +
        history.slice(-6).map((m) => `${m.role === 'user' ? 'المستخدم' : 'Amirni AI'}: ${m.content}`).join('\n') +
        '\n══════════════════════════\n';
    }
    const fullPrompt = systemPrompt
      ? `${systemPrompt}${histContext}\n\nرسالة المستخدم: ${prompt}`
      : `${histContext}رسالة المستخدم: ${prompt}`;

    // Step 1: Session init cookie
    const initHeaders = {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    };
    const initRes = await fetch(
      'https://gemini.google.com/_/BardChatUi/data/batchexecute?rpcids=maGuAc&source-path=%2F&bl=boq_assistant-bard-web-server_20250814.06_p1&f.sid=-7816331052118000090&hl=en-US&_reqid=173780&rt=c',
      {
        method: 'POST',
        headers: initHeaders,
        body: 'f.req=%5B%5B%5B%22maGuAc%22%2C%22%5B0%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&',
        signal: ctrl.signal
      }
    );
    const cookie = (initRes.headers.get('set-cookie') || '').split(';')[0];

    // Step 2: StreamGenerate RPC
    const b = [[fullPrompt], ['en-US'], null];
    const a = [null, JSON.stringify(b)];
    const body = new URLSearchParams({ 'f.req': JSON.stringify(a) }).toString();

    const genRes = await fetch(
      'https://gemini.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate?bl=boq_assistant-bard-web-server_20250729.06_p0&f.sid=4206607810970164620&hl=en-US&_reqid=2813378&rt=c',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'x-goog-ext-525001261-jspb': '[1,null,null,null,"9ec249fc9ad08861",null,null,null,[4]]',
          cookie: cookie,
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        },
        body: body,
        signal: ctrl.signal
      }
    );

    if (!genRes.ok) throw new Error(`Gemini Web HTTP ${genRes.status}`);
    const text = await genRes.text();
    const chunks = [...text.matchAll(/^\d+\n(.+?)\n/gm)].map((m) => m[1]);
    for (const chunk of chunks.reverse()) {
      try {
        const realArr = JSON.parse(chunk);
        const parse1 = JSON.parse(realArr[0][2]);
        if (parse1 && parse1.length > 4 && parse1[4] && parse1[4].length > 0) {
          const textVal = parse1[4][0][1][0];
          if (isValidReply(textVal)) {
            return textVal.trim();
          }
        }
      } catch (_) {}
    }
    throw new Error('Gemini Web response parsing failed');
  } finally {
    clearTimeout(tid);
  }
}

// 2. Pollinations AI Fallback
async function askPollinations(prompt, systemPrompt = '', history = [], timeoutMs = 8000) {
  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const messages = [];
    if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
    if (Array.isArray(history)) {
      for (const m of history.slice(-6)) {
        messages.push({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content });
      }
    }
    messages.push({ role: 'user', content: prompt });

    const res = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0' },
      body: JSON.stringify({
        messages,
        model: 'openai',
        seed: Math.floor(Math.random() * 999999),
        temperature: 0.8
      }),
      signal: ctrl.signal
    });
    if (!res.ok) throw new Error('Pollinations error');
    const txt = await res.text();
    if (isValidReply(txt)) return txt.trim();
    throw new Error('Invalid Pollinations reply');
  } finally {
    clearTimeout(tid);
  }
}

exports.handler = async function (event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json; charset=utf-8'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { prompt, systemPrompt, history } = data;

    if (!prompt || typeof prompt !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing prompt' })
      };
    }

    let reply = '';
    try {
      reply = await askGeminiWeb(prompt, systemPrompt, history, 11000);
    } catch (err) {
      console.warn('Gemini Web failed, falling back to Pollinations:', err.message);
      reply = await askPollinations(prompt, systemPrompt, history, 8000);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply, status: 'ok' })
    };
  } catch (error) {
    console.error('AI Function Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message || 'Internal AI Error' })
    };
  }
};
