import React from 'react';
import { myApps } from '../constants';
import { toolsContent, botsContent, whatsappChannels } from '../constants';

/**
 * Generates a formatted plain‑text message that lists all services offered on the site.
 * This can be used as the body of an email (e.g., via Gmail compose URL).
 */
export const generateAllServicesMessage = (name: string = 'زائر') => {
  const lines: string[] = [];
  lines.push(`الاسم: ${name}`);
  lines.push('');
  lines.push('🛠️ الخدمات المتاحة على الموقع:');
  lines.push('');

  // Apps (myApps)
  lines.push('📱 تطبيقات:');
  myApps.forEach(app => {
    lines.push(`- ${app.title}: ${app.description}`);
    lines.push(`  رابط التحميل: ${app.url}`);
  });
  lines.push('');

  // Tools
  lines.push('🧰 أدوات مفيدة:');
  toolsContent.tools.forEach(tool => {
    lines.push(`- ${tool.title}: ${tool.description}`);
    lines.push(`  رابط: ${tool.url}`);
  });
  lines.push('');

  // Bots
  lines.push('🤖 بوتات:');
  botsContent.bots.forEach(bot => {
    lines.push(`- ${bot.title}: ${bot.description}`);
    lines.push(`  رابط: ${bot.url}`);
  });
  lines.push('');

  // WhatsApp channels
  lines.push('📞 قنوات واتساب:');
  whatsappChannels.forEach(ch => {
    lines.push(`- ${ch.name}: ${ch.url}`);
  });

  lines.push('');
  lines.push('تحياتي،');
  lines.push(name);

  return lines.join('\n');
};

export default function AllServicesMessage({ name }: { name?: string }) {
  const message = generateAllServicesMessage(name);
  return (
    <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg text-sm">
      {message}
    </pre>
  );
}
