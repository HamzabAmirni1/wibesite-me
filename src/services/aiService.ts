// Amirni AI Service: Multi-tier AI communication with site context & navigation actions

export interface ActionButton {
  label: string;
  section?: string;
  url?: string;
  icon?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  actions?: ActionButton[];
  timestamp: Date;
}

const SITE_SYSTEM_PROMPT = `
أنت "Amirni AI" (ذكاء اعمرني الاصطناعي)، المساعد الذكي الرسمي لموقع المطور والتقني المغربي حمزة اعمرني (Hamza Amirni).
مهمتك: مساعدة زوار الموقع والإجابة عن كل أسئلتهم بذكاء، لطف، واحترافية، وتوجيههم مباشرة لأقسام الموقع ومشاريع حمزة.

قواعد اللغة الحتمية (CRITICAL LANGUAGE RULES):
1. English: If the user writes in English, reply in English.
2. Français: Si l'utilisateur écrit en français, réponds en français.
3. العربية والدارجة المغربية: إذا كتب المستخدم بالعربية أو الدارجة، أو بحروف لاتينية (Arabizi / Darija مثل: "salam", "chkun", "bhal haka", "brit", "fin", "site", "projet") -> أجب دائماً بالدارجة المغربية المفهومة أو العربية الواضحة والودودة!

قواعد تنسيق الروابط والأزرار (CRITICAL FORMATTING):
- لا تكتب الروابط بين أقواس مشوهة مثل :[اسم](رابط) أو تكسر الأسطر.
- اذكر اسم المشروع بخط عريض مثل **Fatifloral** أو **Brasti** أو **Workout.cool**.
- في نهاية كل رد يخص مشروعاً أو قسماً، أضف وسوم الأزرار بهذا الشكل الدقيق:
  [BTN:url:https://fatifloral.netlify.app/#catalogue|🌸 زيارة متجر Fatifloral]
  [BTN:section:projects|🚀 تصفح المشاريع]
  [BTN:section:apps|📱 تصفح التطبيقات]
  [BTN:section:services|💼 عرض الخدمات]
  [BTN:section:contact|📬 صفحة التواصل]
  [BTN:section:about|👤 نبذة عن حمزة]
  [BTN:section:programming|💻 دروس البرمجة]
- أجب باختصار وترتيب (بين 2 إلى 4 نقاط كحد أقصى) لتناسب نافذة المحادثة.

معلومات عن حمزة اعمرني ومحتوى الموقع:
1. نبذة عن حمزة (قسم about):
   - مطور برمجيات Full-stack، صانع محتوى تقني وتعليمي، مصمم تطبيقات ومواقع ومطور بوتات ذكية من المغرب.
   - شغوف بمشاركة المعرفة ومساعدة الشباب في تعلم البرمجة والتقنية.

2. المشاريع المعروضة في الموقع (قسم projects):
   - Fatifloral (جديد ومميز): متجر وبوتيك إلكتروني فاخر لباقات الورد وتنسيقات الأعراس والمناسبات مع سلة طلبات وطلب واتساب مباشر (رابط: https://fatifloral.netlify.app/#catalogue).
   - Workout.cool: تطبيق ويب رياضي لتخصيص حصص التمارين وكمال الأجسام (https://hamzaamirnifit.netlify.app/).
   - Brasti: منصة إدارة المبيعات والمخزون مع إحصائيات متقدمة (https://brasti.netlify.app/).
   - Hsabi (حسابي): نظام ذكي لإدارة الميزانية والمصاريف الشخصية (https://hsabi.netlify.app/).
   - تطبيق القرآن الكريم: للاستماع وقراءة القرآن ومواقيت الصلاة (https://qurankarimapp.netlify.app).
   - متجر حمزة اعمرني: بوتيك إلكترونيات وأزياء مع طلب واتساب (https://storehamzaamirni.netlify.app).
   - محول الملفات (Hamza Converter): أداة تحويل PDF وصور وملفات أوفيس (https://hamzaconverter.netlify.app).
   - Rana: منصة لخدمات توثيق الحسابات والعلامة الزرقاء (https://rana-verification.netlify.app).
   - Sigma: متجر أزياء وملابس راقية (https://sigma0001.netlify.app).
   - محرر السيرة الذاتية (Hamza Amirni CV): محرر CV ذكي ومجاني بدون تسجيل (https://cvhamzaamirni.netlify.app/en).
   - حاسبة أسعار البيع: لحساب هامش الربح والأسعار (https://calculateurdeprix.netlify.app/).
   - ZenStep: تطبيق الصحة النفسية ومحاربة الاكتئاب (https://hamzaamirnizenstep.netlify.app/).

3. التطبيقات (قسم apps):
   - تطبيقات أندرويد APK مجانية للتحميل (تطبيقات تعليمية مثل Smart Education BAC، تطبيقات إسلامية، أدوات).

4. الخدمات المتاحة (قسم services):
   - تطوير مواقع الويب والمتاجر الإلكترونية (React, Vite, Next.js, Node.js, Firebase).
   - برمجة وتطوير تطبيقات الهواتف الذكية.
   - تصميم واجهات المستخدم UI/UX.
   - تطوير بوتات ذكية (WhatsApp & Telegram).
   - استشارات تقنية وحلول برمجية مخصصة.

5. البرمجة والتعليم (قسم programming):
   - شروحات وكورسات مجانية لتعلم HTML/CSS, JavaScript, React, Python, والذكاء الاصطناعي.

6. البوتات (قسم bots):
   - بوتات ذكية متعددة الاستخدامات للتواصل وأتمتة المهام.

7. التواصل مع حمزة (قسم contact):
   - إمكانية التواصل مباشرة عبر واتساب، إنستغرام، فيسبوك، تيليجرام، أو البريد الإلكتروني (hamzaamirni@gmail.com).
`;

export function detectActionButtons(userText: string, aiText: string): ActionButton[] {
  const actions: ActionButton[] = [];
  const text = (userText + ' ' + aiText).toLowerCase();

  // 1. Extract explicit [BTN:...] tags from AI response
  const btnTagRegex = /\[BTN:(url|section):([^|\]]+)\|([^\]]+)\]/g;
  let btnMatch;
  while ((btnMatch = btnTagRegex.exec(aiText)) !== null) {
    const type = btnMatch[1];
    const target = btnMatch[2].trim();
    const label = btnMatch[3].trim();
    if (type === 'url') {
      actions.push({
        label,
        url: target,
        icon: target.includes('fatifloral') ? 'Flower2' : 'ExternalLink'
      });
    } else {
      actions.push({
        label,
        section: target,
        icon: 'FolderOpen'
      });
    }
  }

  // 2. Extract markdown links from AI response if present
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|#[a-z0-9_-]+)\)/g;
  let match;
  while ((match = linkRegex.exec(aiText)) !== null) {
    const linkTitle = match[1].replace(/[:*]/g, '').trim();
    const linkUrl = match[2].trim();
    if (linkTitle.length > 1 && !linkTitle.toLowerCase().includes('http')) {
      if (linkUrl.startsWith('http')) {
        actions.push({
          label: linkTitle.toLowerCase().includes('fatifloral')
            ? '🌸 زيارة متجر Fatifloral'
            : `🔗 ${linkTitle}`,
          url: linkUrl,
          icon: 'ExternalLink'
        });
      } else if (linkUrl.startsWith('#')) {
        actions.push({
          label: `📍 ${linkTitle}`,
          section: linkUrl.replace('#', ''),
          icon: 'FolderOpen'
        });
      }
    }
  }

  // 2. Fatifloral detection
  if (text.includes('fatifloral') || text.includes('ورد') || text.includes('زهور') || text.includes('fleur') || text.includes('flower')) {
    if (!actions.some(a => a.url?.includes('fatifloral'))) {
      actions.push({
        label: '🌸 زيارة متجر Fatifloral',
        url: 'https://fatifloral.netlify.app/#catalogue',
        icon: 'ExternalLink'
      });
    }
    if (!actions.some(a => a.section === 'projects')) {
      actions.push({
        label: '🚀 قسم المشاريع',
        section: 'projects',
        icon: 'FolderOpen'
      });
    }
  }

  // 3. Projects general
  if (text.includes('مشروع') || text.includes('مشاريع') || text.includes('projet') || text.includes('project')) {
    if (!actions.some(a => a.section === 'projects')) {
      actions.push({
        label: '🚀 تصفح المشاريع',
        section: 'projects',
        icon: 'FolderOpen'
      });
    }
  }

  // Specific project direct links if mentioned
  if (text.includes('brasti') && !actions.some(a => a.url?.includes('brasti'))) {
    actions.push({
      label: '📊 منصة Brasti',
      url: 'https://brasti.netlify.app/',
      icon: 'ExternalLink'
    });
  }

  if ((text.includes('hsabi') || text.includes('حسابي')) && !actions.some(a => a.url?.includes('hsabi'))) {
    actions.push({
      label: '💰 تطبيق حسابي',
      url: 'https://hsabi.netlify.app/',
      icon: 'ExternalLink'
    });
  }

  if ((text.includes('workout') || text.includes('رياضة') || text.includes('لياقة')) && !actions.some(a => a.url?.includes('hamzaamirnifit'))) {
    actions.push({
      label: '🏋️‍♂️ تطبيق Workout.cool',
      url: 'https://hamzaamirnifit.netlify.app/',
      icon: 'ExternalLink'
    });
  }

  // 4. Apps
  if (text.includes('تطبيق') || text.includes('تطبيقات') || text.includes('app') || text.includes('apk') || text.includes('bac') || text.includes('تحميل')) {
    if (!actions.some(a => a.section === 'apps')) {
      actions.push({
        label: '📱 تصفح التطبيقات',
        section: 'apps',
        icon: 'Smartphone'
      });
    }
  }

  // 5. Services & Pricing
  if (text.includes('خدم') || text.includes('ثمن') || text.includes('سعر') || text.includes('service') || text.includes('prix') || text.includes('price') || text.includes('صاوب') || text.includes('تصميم') || text.includes('ديفلوب')) {
    if (!actions.some(a => a.section === 'services')) {
      actions.push({
        label: '💼 عرض الخدمات',
        section: 'services',
        icon: 'Briefcase'
      });
    }
    if (!actions.some(a => a.section === 'contact')) {
      actions.push({
        label: '💬 تواصل عبر واتساب',
        section: 'contact',
        icon: 'MessageCircle'
      });
    }
  }

  // 6. Contact
  if (text.includes('تواصل') || text.includes('اتصل') || text.includes('contact') || text.includes('whatsapp') || text.includes('واتساب') || text.includes('نمرة') || text.includes('email') || text.includes('ايميل')) {
    if (!actions.some(a => a.section === 'contact')) {
      actions.push({
        label: '📬 تواصل مع حمزة',
        section: 'contact',
        icon: 'Mail'
      });
    }
  }

  // 7. About Hamza / CV
  if (text.includes('شكون') || text.includes('من أنت') || text.includes('من هو') || text.includes('qui est') || text.includes('about') || text.includes('cv') || text.includes('سيرة')) {
    if (!actions.some(a => a.section === 'about')) {
      actions.push({
        label: '👤 نبذة عن حمزة',
        section: 'about',
        icon: 'User'
      });
    }
  }

  // 8. Programming & Tutorials
  if (text.includes('برمج') || text.includes('تعلم') || text.includes('كود') || text.includes('course') || text.includes('program') || text.includes('react') || text.includes('python')) {
    if (!actions.some(a => a.section === 'programming')) {
      actions.push({
        label: '💻 دروس البرمجة',
        section: 'programming',
        icon: 'Code'
      });
    }
  }

  // Bots
  if (text.includes('بوت') || text.includes('bot') || text.includes('telegram') || text.includes('تيليجرام')) {
    actions.push({
      label: '🤖 البوتات الذكية',
      section: 'bots',
      icon: 'Bot'
    });
  }

  // Deduplicate by section/url
  const seen = new Set<string>();
  const uniqueActions: ActionButton[] = [];
  for (const act of actions) {
    const key = act.section || act.url || act.label;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueActions.push(act);
    }
  }

  return uniqueActions.slice(0, 3);
}

// Fallback response generator if network fails
function getLocalFallbackReply(prompt: string): string {
  const p = prompt.toLowerCase();
  if (p.includes('fatifloral') || p.includes('ورد') || p.includes('زهور')) {
    return 'مشروع **Fatifloral** هو متجر وبوتيك إلكتروني فاخر لبيع وتوصيل باقات الورد وتنسيقات الأعراس والمناسبات بالمغرب، كيتوفر على كاتالوج تفاعلي وسلة طلبات وإمكانية الطلب عبر واتساب. تقدر تزورو مباشرة أو تشوفو فقسم المشاريع!';
  }
  if (p.includes('مشروع') || p.includes('مشاريع') || p.includes('projects')) {
    return 'حمزة اعمرني عندو مجموعة كبيرة من المشاريع الحية فالسيت، بحال متجر الزهور **Fatifloral**، تطبيق التمارين **Workout.cool**، منصة إدارة المخزون **Brasti**، تطبيق الميزانية **حسابي**، محرر الـ CV الذكي، وغيرها. تقدر تشوفهم كاملين فقسم المشاريع!';
  }
  if (p.includes('تطبيق') || p.includes('apps') || p.includes('apk')) {
    return 'فالسيت كاينين تطبيقات هواتف أندرويد جاهزة للتحميل المباشر بحال تطبيقات الباكالوريا الذكية، وتطبيقات إسلامية وخدماتية. تقدر تصفحهم فقسم التطبيقات!';
  }
  if (p.includes('خدم') || p.includes('services')) {
    return 'حمزة كيقدم خدمات برمجية احترافية: تطوير المواقع والمتاجر الإلكترونية، تطبيقات الهواتف، برمجة البوتات، وحلول برمجية مخصصة. تواصل معاه عبر صفحة التواصل للمزيد من التفاصيل!';
  }
  if (p.includes('تواصل') || p.includes('contact') || p.includes('واتساب')) {
    return 'تقدر تواصل مع حمزة مباشرة عبر واتساب، أو مواقع التواصل الاجتماعي (إنستغرام، فيسبوك، تيليجرام)، أو من خلال فورم الاتصال فصفحة التواصل!';
  }
  if (p.includes('شكون') || p.includes('حمزة') || p.includes('about')) {
    return 'حمزة اعمرني هو مطور برمجيات ومحتوى تقني وتعليمي من المغرب، متخصص فتطوير تطبيقات الويب والهواتف والذكاء الاصطناعي.';
  }
  return 'أهلاً بك! أنا Amirni AI، المساعد الذكي لموقع حمزة اعمرني. نقدر نساعدك تعرف معلومات على المشاريع، التطبيقات، الخدمات، البرمجة، أو كيفاش تواصل مع حمزة مباشرة.';
}

export async function askAmirniAI(
  prompt: string,
  history: { role: 'user' | 'assistant'; content: string }[] = []
): Promise<{ text: string; actions: ActionButton[] }> {
  // 1. Try Netlify Serverless Function (Gemini Web RPC)
  try {
    const res = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        systemPrompt: SITE_SYSTEM_PROMPT,
        history: history.slice(-6)
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.reply && typeof data.reply === 'string' && data.reply.trim().length > 0) {
        const reply = data.reply.trim();
        const actions = detectActionButtons(prompt, reply);
        return { text: reply, actions };
      }
    }
  } catch (err) {
    console.warn('Amirni AI: Netlify function call failed, attempting fallback...', err);
  }

  // 2. Direct Pollinations Fallback (CORS-friendly, Keyless)
  try {
    const messages = [
      { role: 'system', content: SITE_SYSTEM_PROMPT },
      ...history.slice(-4).map(m => ({ role: m.role, content: m.content })),
      { role: 'user', content: prompt }
    ];

    const fallbackRes = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages,
        model: 'openai',
        seed: Math.floor(Math.random() * 999999),
        temperature: 0.8
      })
    });

    if (fallbackRes.ok) {
      const text = (await fallbackRes.text()).trim();
      if (text.length > 0) {
        const actions = detectActionButtons(prompt, text);
        return { text, actions };
      }
    }
  } catch (err) {
    console.warn('Amirni AI: Fallback AI failed:', err);
  }

  // 3. Instant local knowledge fallback
  const fallbackText = getLocalFallbackReply(prompt);
  const actions = detectActionButtons(prompt, fallbackText);
  return { text: fallbackText, actions };
}
