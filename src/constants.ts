import { Home, User, Youtube, Code, AppWindow, Gamepad2, Bot, Wrench, Newspaper, MessageSquare, Server, Palette, BrainCircuit, Cpu, Lightbulb, CheckCircle, Briefcase, FolderGit } from 'lucide-react';
import { SiFacebook, SiYoutube, SiInstagram, SiWhatsapp, SiTelegram, SiOpenai, SiGithubcopilot, SiPerplexity, SiGoogledocs, SiCoursera, SiCanva, SiGithub, SiStackoverflow } from 'react-icons/si';
import { FaChess, FaKeyboard, FaGraduationCap, FaMosque, FaQuran, FaTh } from 'react-icons/fa';

export const navLinks = [
    { id: 'home', title: 'الصفحة الرئيسية', icon: Home },
    { id: 'about', title: 'عني', icon: User },
    { id: 'projects', title: 'مشاريعي', icon: FolderGit },
    { id: 'videos', title: 'الفيديوهات', icon: Youtube },
    { id: 'programming', title: 'البرمجة', icon: Code },
    { id: 'apps', title: 'التطبيقات', icon: AppWindow },
    { id: 'services', title: 'خدماتنا', icon: Briefcase },
    { id: 'bots', title: 'البوتات', icon: Bot },
    { id: 'tools', title: 'أدوات مفيدة', icon: Wrench },
    { id: 'gaza', title: 'المقالات', icon: Newspaper },
    { id: 'chat', title: 'تحدث معي', icon: MessageSquare },
];

export const socialLinks = [
    { name: 'الفيسبوك', url: 'https://www.facebook.com/6kqzuj3y4e', IconComponent: SiFacebook },
    { name: 'اليوتيوب', url: 'https://www.youtube.com/@Hamzaamirni01', IconComponent: SiYoutube },
    { name: 'إنستجرام', url: 'https://instagram.com/hamza_amirni_01', IconComponent: SiInstagram },
    { name: 'واتساب', url: 'https://wa.me/+212624855939', IconComponent: SiWhatsapp },
    { name: 'تيليجرام', url: 'https://t.me/hamzaamirni', IconComponent: SiTelegram },
];

export const myApps = [
    {
        IconComponent: FaMosque,
        title: 'تطبيق الأذكار والاستغفار الإسلامي',
        description: 'تطبيق إسلامي شامل يحتوي على أذكار يومية وأدعية مأثورة، استغفار وأذكار الصباح والمساء مع نصوص دقيقة وفضائل كل ذكر.',
        url: 'https://www.mediafire.com/file/v5v8kofvmuczs4m/islamic_app_1.0.apk/file',
        buttonClass: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
        IconComponent: FaGraduationCap,
        title: 'تطبيق دروس وتمارين البكالوريا الشامل',
        description: 'تطبيق تعليمي متقدم يوفر دروس مفصلة وتمارين عملية محلولة لجميع مواد البكالوريا (رياضيات، فيزياء، كيمياء). يتضمن اختبارات تفاعلية وشروح الخطوات.',
        url: 'https://www.mediafire.com/file/kqc4zsmhg9stjyx/smart_education_BAC_1.0.apk/file',
        buttonClass: 'bg-gradient-to-r from-primary to-secondary'
    }
];

export const whatsappChannels = [
    { name: 'تواصل معي مباشرة', url: 'https://api.whatsapp.com/send/?phone=212708869993&text&type=phone_number&app_absent=0', IconComponent: SiWhatsapp },
    { name: 'قناة تحديثات البرمجيات', url: 'https://whatsapp.com/channel/0029ValXRoHCnA7yKopcrn1p', IconComponent: SiWhatsapp },
    { name: 'قناة تحديثات القرآنيات', url: 'https://whatsapp.com/channel/0029VaDbxoYJpe8byewMhd3s', IconComponent: FaQuran }
];

// NOTE: Use sidebarProfile, skillsSection, journeySection, philosophySection from i18n.ts for translations
export const aboutContent = {
    name: 'حمزة اعمرني',
    role: '👨 مطور ويب متخصص',
    description: `
            <p class="mb-4">مرحباً — أنا <strong>حمزة اعمرني</strong>، مطور ويب ومُحب للتقنية أعمل على بناء تجارب رقمية عملية وجذابة. أركز على كتابة شفرة نظيفة، تحسين أداء المواقع، وتصميم واجهات سهلة الاستخدام.</p>
            <p class="mb-4">أمتلك خبرة في تطوير واجهات الويب، بناء أنظمة متكاملة، وتقديم حلول برمجية مخصّصة للمشاريع الصغيرة والمتوسطة. أحب التعلم المستمر وتجربة تقنيات جديدة لتقديم منتجات أكثر موثوقية وسرعة.</p>
            <ul class="list-disc list-inside mb-4 text-dark-color/70">
                <li><strong>بناء واجهات تفاعلية</strong> بسرعة وكفاءة.</li>
                <li><strong>تحسين الأداء</strong> وتجربة المستخدم.</li>
                <li><strong>حلول مخصّصة</strong> للمواقع والتطبيقات.</li>
                <li><strong>تعلم مستمر</strong> وتطبيق أفضل الممارسات.</li>
            </ul>
            <p class="mb-0">هل لديك فكرة مشروع أو تحتاج مساعدة تقنية؟ <a href="/contact" class="text-primary font-semibold">تواصل معي</a> لنتحدث عن كيفية تحويل فكرتك إلى منتج ناجح.</p>
        `,
    skills: [
        { name: 'HTML, CSS, JS', level: 95, icon: Code },
        { name: 'PHP, Python', level: 90, icon: Server },
        { name: 'UI/UX Design', level: 85, icon: Palette },
        { name: 'Problem Solving', level: 92, icon: BrainCircuit },
        { name: 'Hardware & Software', level: 88, icon: Cpu },
    ],
    journey: [
        'بدأت تعلم البرمجيات في سن مبكرة وتعلمت من خلال الممارسة.',
        'أكملت الدراسة الثانوية في 2019.',
        'عملت في عدة مشاريع برمجية مهمة.',
        'اكتسبت خبرة كبيرة في مجالات البرمجة والويب.',
    ],
    philosophy: {
        title: '🎯 فلسفتي',
        points: [
            {
                icon: Lightbulb,
                title: 'التعليم المستمر',
                description: 'أؤمن بأن التعليم المستمر يدفعك للأمام والمعرفة تزداد كلما تعلمت أكثر.'
            },
            {
                icon: CheckCircle,
                title: 'تقديم الجودة',
                description: 'أركز على تقديم جودة عالية في كل مشاريعي.'
            },
            {
                icon: Palette,
                title: 'التصميم والإبداع',
                description: 'أحب تقديم أفكار جديدة وحلول مبتكرة وجميلة.'
            }
        ]
    }
};

export const videosContent = [
    {
        title: 'شرح تعليم البرمجيات من الصفر',
        videoId: '1hHMwLxN6EM'
    },
    {
        title: 'أساسيات HTML و CSS للمبتدئين',
        videoId: '8cm1x4bC610'
    },
    {
        title: 'تعليم جافاسكريبت أساسي وعملي',
        videoId: 'PkZNo7MFNFg'
    },
    {
        title: 'مشروع عملي: كيفية عمل موقع ويب',
        videoId: '3PHXvlpOkf4'
    }
];

export const programmingContent = {
    title: '⚙️ ما هي البرمجة؟',
    description: 'البرمجة هي فن وعلم كتابة الأوامر والتعليمات وتحويلها إلى لغة يفهمها الحاسوب. والبرمجة هي من أهم المجالات في العصر الحالي. 👍',
    fullContent: `
        <h1>مدخل شامل إلى عالم البرمجة</h1>
        
        <h2>ما هي البرمجة؟</h2>
        <p>البرمجة هي عملية إنشاء مجموعة من التعليمات المرتبة والمنطقية التي يفهمها الكمبيوتر. هذه التعليمات تخبر الكمبيوتر بالضبط ما يجب أن يفعله لتحقيق نتيجة معينة. البرمجة هي اللغة التي نستخدمها للتواصل مع الآلات.</p>
        
        <h2>لغات البرمجة الأساسية</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>JavaScript:</strong> لغة الويب الأساسية، تعمل في المتصفح وعلى الخوادم.</li>
            <li><strong>Python:</strong> لغة سهلة وقوية، مشهورة للذكاء الاصطناعي وتحليل البيانات.</li>
            <li><strong>PHP:</strong> لغة خادم قوية، تستخدم في بناء المواقع الديناميكية.</li>
            <li><strong>HTML & CSS:</strong> أساس بناء صفحات الويب.</li>
        </ul>
        
        <h2>المفاهيم الأساسية في البرمجة</h2>
        
        <h3>1. المتغيرات</h3>
        <p>المتغير هو مكان لتخزين البيانات. مثل صندوق تضع فيه معلومة ما:</p>
        <pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
let name = "حمزة";
let age = 25;
let isStudent = true;</pre>
        
        <h3>2. الشروط والحلقات</h3>
        <p>تستخدم الشروط (if/else) لاتخاذ قرارات مختلفة:</p>
        <pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
if (age >= 18) {
  console.log("أنت بالغ");
} else {
  console.log("أنت قاصر");
}</pre>
        
        <h3>3. الدوال</h3>
        <p>الدالة هي مجموعة تعليمات معاد استخدامها:</p>
        <pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
function greet(name) {
  return "مرحباً " + name;
}
console.log(greet("أحمد"));</pre>
        
        <h2>فوائد تعلم البرمجة</h2>
        <ol class="list-decimal list-inside space-y-2">
            <li><strong>تطوير التفكير المنطقي:</strong> البرمجة تعلمك التفكير بطريقة منطقية ومنظمة.</li>
            <li><strong>فرص عمل متعددة:</strong> الطلب على المبرمجين كبير جداً والرواتب ممتازة.</li>
            <li><strong>تحقيق أفكارك:</strong> يمكنك بناء تطبيقات وحل المشاكل بطرق مبتكرة.</li>
            <li><strong>العمل الحر:</strong> كمبرمج، يمكنك العمل بحرية من أي مكان.</li>
            <li><strong>الإبداع والابتكار:</strong> البرمجة تفتح آفاقاً لا حدود لها للإبداع.</li>
        </ol>
        
        <h2>خطوات البدء</h2>
        <ol class="list-decimal list-inside space-y-2">
            <li>اختر لغة برمجة واحدة للبدء (يفضل JavaScript أو Python)</li>
            <li>تعلم المفاهيم الأساسية: متغيرات، شروط، حلقات، دوال</li>
            <li>مارس الكود كل يوم - الممارسة هي الطريق الوحيد للتعلم</li>
            <li>ابني مشاريع صغيرة لتطبيق ما تعلمته</li>
            <li>تعمق في موضوع واحد وصبح خبيراً فيه</li>
        </ol>
        
        <h2>الأدوات التي تحتاجها</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>محرر نصوص:</strong> VS Code (مجاني وممتاز)</li>
            <li><strong>متصفح ويب:</strong> Chrome أو Firefox</li>
            <li><strong>Terminal/Console:</strong> لتشغيل البرامج</li>
            <li><strong>موارد التعلم:</strong> YouTube, Udemy, freeCodeCamp</li>
        </ul>
    `,
    benefitsTitle: '👍 فوائد تعلم البرمجة',
    benefits: [
        'تطوير مهارات التفكير المنطقي والإبداع.',
        'الحصول على فرص عمل جيدة وراتب مرتفع.',
        'بناء مشاريع خاصة بك وتحقيق أحلامك.',
        'تحسين مهارات حل المشاكل والتعامل مع التحديات.',
    ],
    exampleTitle: '📋 مثال عملي: كيفية كتابة برنامج بسيط',
    codeSnippet: `for(let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}`,
    codeOutput: 'النتيجة: 2 4 6 8 10'
};

export const funContent = {
    title: '🎮 ألعاب ممتعة',
    description: 'ما الألعاب التي تحب لعبها في وقت فراغك؟ قم بتجربة هذه الألعاب الرائعة والممتعة!',
    games: [
        { title: 'ألعاب رياضيات', url: 'https://www.coolmathgames.com/', IconComponent: Gamepad2, color: 'primary' },
        { title: 'شطرنج أونلاين', url: 'https://www.chess.com/play/computer', IconComponent: FaChess, color: 'success' },
        { title: 'سودوكو', url: 'https://www.sudoku.com/', IconComponent: FaTh, color: 'warning' },
        { title: 'اختبار الكتابة', url: 'https://www.typingclub.com/', IconComponent: FaKeyboard, color: 'danger' },
    ]
};

export const botsContent = {
    title: '🤖 بوتات البرمجيات',
    description: 'تعرف على بوتات الذكاء الاصطناعي والبرامج الرائعة والمفيدة.',
    bots: [
        { title: 'بوت تحديث البرمجيات', description: 'تحديث معلومات سريعة للبوت في تحديث البرمجيات', url: 'https://wa.me/212708869993', buttonText: 'تحديث', IconComponent: SiWhatsapp, color: 'success' },
        { title: 'ChatGPT Bot', description: 'استخدام بوت ChatGPT لحل أسئلة ومشاكل', url: 'https://wa.me/18002428478', buttonText: 'نتحدث', IconComponent: SiOpenai, color: 'primary' },
        { title: 'Copilot Bot', description: 'مساعد برمجي ذكي لمساعدتك في مشاريع البرمجة', url: 'https://wa.me/18772241042', buttonText: 'نتحدث', IconComponent: SiGithubcopilot, color: 'warning' },
        { title: 'Perplexity Bot', description: 'محرك بحث ذكي لمساعدتك على الحصول على المعلومات', url: 'https://wa.me/18334363285', buttonText: 'نتحدث', IconComponent: SiPerplexity, color: 'danger' },
        { title: 'بوت فيسبوك الذكي', description: 'بوت متخصص على منصة فيسبوك لتقديم خدمات ذكية وتواصل سريع', url: 'https://www.facebook.com/profile.php?id=61578860781418', buttonText: 'نتحدث', IconComponent: SiFacebook, color: 'primary' },
        { title: 'بوت واتساب (رقم 2)', description: 'تواصل مباشر للحصول على المساعدة التقنية والبرمجية', url: 'https://wa.me/212631342792', buttonText: 'نتحدث', IconComponent: SiWhatsapp, color: 'success' },
        { title: 'بوت واتساب (رقم 3)', description: 'مساعد تقني إضافي للرد على استفساراتكم وتطوير مشاريعكم', url: 'https://wa.me/212649550748', buttonText: 'نتحدث', IconComponent: SiWhatsapp, color: 'success' },
        { title: 'بوت واتساب (رقم 4)', description: 'قناة تواصل فعالة للحصول على أفضل الخدمات التقنية', url: 'https://wa.me/212656918407', buttonText: 'نتحدث', IconComponent: SiWhatsapp, color: 'success' },
    ]
};

export const toolsContent = {
    title: '🛠️ أدوات مفيدة',
    description: 'استخدم مجموعة من أدوات الويب والتطبيقات المفيدة في حياتك اليومية.',
    tools: [
        { title: 'Google Docs', description: 'محرر مستندات متقدم من جوجل', url: 'https://docs.google.com/', IconComponent: SiGoogledocs, tags: ['محررات', 'مستندات'] },
        { title: 'ChatGPT', description: 'مساعد ذكي للإجابة على الأسئلة', url: 'https://chat.openai.com/', IconComponent: SiOpenai, tags: ['ذكاء اصطناعي', 'مساعد'] },
        { title: 'Coursera', description: 'منصة تعليمية من جامعات عالمية', url: 'https://www.coursera.org/', IconComponent: SiCoursera, tags: ['منصات', 'تعليم'] },
        { title: 'Canva', description: 'برنامج تصميم سهل وسريع', url: 'https://www.canva.com/', IconComponent: SiCanva, tags: ['تصميم', 'جرافيكس'] },
        { title: 'GitHub', description: 'منصة مشهورة لمشاركة البرمجيات', url: 'https://github.com/', IconComponent: SiGithub, tags: ['برمجة', 'أدوات'] },
        { title: 'Stack Overflow', description: 'موقع رائع للأسئلة والإجابات على مشاكل البرمجة', url: 'https://stackoverflow.com/', IconComponent: SiStackoverflow, tags: ['برمجة', 'أسئلة'] },
    ]
};

export const articlesContent = {
    title: '📚 مقالات برمجية وتقنية',
    description: 'في هذا القسم نناقش مجموعة من المقالات المهمة والتقنيات والبرمجيات والتطبيقات.',
    articles: [
        {
            id: 'web-design-tips',
            category: 'تصميم الويب',
            title: 'أفضل ممارسات تصميم المواقع الحديثة',
            summary: 'اكتشف أحدث اتجاهات تصميم الويب وكيفية تطبيقها لإنشاء مواقع احترافية وجذابة.',
            author: 'حمزة اعمرني',
            date: '10 نوفمبر 2025',
            color: 'warning',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
            tags: ['ويب', 'تصميم', 'UI/UX'],
            content: `<h2>تصميم الويب في 2025: دليل شامل</h2><p>تصميم الويب ليس فقط عن الجماليات، بل عن خلق تجربة مستخدم رائعة تجعل الزائر يعود مجدداً. الموقع الجميل الذي لا يوفر تجربة جيدة سيفقد مستخدميه بسرعة.</p><h2>1. التصميم المستجيب (Responsive Design)</h2><p>يجب أن يعمل موقعك بشكل مثالي على جميع الأجهزة - الهواتف الذكية، الأجهزة اللوحية، الحواسيب المكتبية. أكثر من 60% من حركة المرور تأتي من الهواتف الذكية في 2025.</p><p>استخدم CSS media queries لتكييف التصميم حسب حجم الشاشة. Bootstrap و Tailwind CSS يساعدان كثيراً في هذا.</p><h2>2. سرعة التحميل</h2><p>موقع بطيء = موقع مهجور. 47% من المستخدمين يتوقعون تحميل الموقع في أقل من ثانيتين. استخدام أدوات مثل Google PageSpeed Insights يساعدك في قياس السرعة.</p><p><strong>نصائح لتسريع الموقع:</strong></p><ul class="list-disc list-inside"><li>ضغط الصور واستخدام صيغ حديثة مثل WebP</li><li>استخدام CDN (شبكة توصيل المحتوى)</li><li>تقليل HTTP requests</li><li>استخدام التخزين المؤقت (Caching)</li></ul><h2>3. البساطة والوضوح</h2><p>تصميم نظيف وبسيط أفضل من تصميم معقد. استخدم المساحة البيضاء بذكاء. تجنب الفوضى البصرية.</p><p>القاعدة الذهبية: "أقل = أفضل". كل عنصر في التصميم يجب أن يكون له غرض واضح.</p><h2>4. اختيار الألوان بحكمة</h2><p>اختيار الألوان الصحيحة يؤثر على عاطفة المستخدم وينشئ هوية بصرية قوية للموقع. استخدم أداة Coolors.co أو Adobe Color لاختيار ألوان متناسقة.</p><p><strong>دليل نفسي للألوان:</strong></p><ul class="list-disc list-inside"><li>الأزرق = الثقة والاستقرار</li><li>الأخضر = النمو والحيوية</li><li>الأحمر = الطاقة والتركيز</li><li>الذهبي = الفخامة والرقي</li></ul><h2>5. إمكانية الوصول (Accessibility)</h2><p>تأكد من أن موقعك يمكن استخدامه من قبل الجميع، بما في ذلك الأشخاص ذوي الاحتياجات الخاصة. استخدم alt text للصور، اختر ألوان عالية التباين، اجعل النصوص قابلة للقراءة.</p><h2>6. سهولة الاستخدام (UX/UI)</h2><p>القائمة الرئيسية يجب أن تكون واضحة وسهلة. الأزرار يجب أن تكون كبيرة كافية وسهلة النقر. المحتوى يجب أن ينقسم لأقسام صغيرة وسهلة الفهم.</p><h2>7. SEO-Friendly Design</h2><p>ضع في الاعتبار محركات البحث عند التصميم. استخدم headings بشكل صحيح (H1, H2, H3)، أضف meta descriptions، استخدم URLs صديقة للـ SEO.</p><h2>الخلاصة</h2><p>تصميم الويب الحديث يجمع بين الجمال والوظيفة والأداء. تذكر دائماً: المستخدم هو الملك، اجعل تجربته رائعة.</p>`
        },
        {
            id: 'productivity-tips',
            category: 'إنتاجية وتنظيم',
            title: '10 نصائح ذهبية لزيادة إنتاجيتك كمبرمج',
            summary: 'تعلم استراتيجيات إنتاجية مثبتة ستجعلك تنجز أكثر في وقت أقل وبجودة عالية.',
            author: 'حمزة اعمرني',
            date: '5 نوفمبر 2025',
            color: 'info',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
            tags: ['إنتاجية', 'نصائح', 'تطوير'],
            content: `<h1>10 نصائح ذهبية لزيادة إنتاجيتك كمبرمج</h1><p>كل مبرمج يواجه نفس التحدي: كيف أنجز أكثر في وقت أقل؟ الحقيقة أن الإنتاجية ليست عن العمل أكثر، بل عن العمل بذكاء واستراتيجية.</p><h2>1. قسّم عملك إلى مهام صغيرة وقابلة للقياس</h2><p>بدلاً من "أنشئ موقع كامل"، قسم المشروع إلى مهام صغيرة مثل "أنشئ صفحة الرئيسية"، "أضف نموذج الاتصال"، "اختبر التوافقية". هذا يجعل العمل أسهل وأقل إرهاقاً.</p><h2>2. تقنية Pomodoro: 25 دقيقة من التركيز</h2><p>اعمل 25 دقيقة بتركيز كامل، ثم خذ فترة راحة 5 دقائق. بعد 4 جولات، خذ راحة أطول (15-30 دقيقة). هذه الطريقة جربتها آلاف المبرمجين وأثبتت فعاليتها.</p><h2>3. تجنب الانقطاعات والمشتتات</h2><p>أغلق الإشعارات في جميع البرامج، ضع الهاتف بعيداً عن متناول اليد، استخدم do not disturb mode. الدراسات تثبت أن أي انقطاع بسيط يقلل إنتاجيتك 40%. يستغرق 15 دقيقة لاستعادة التركيز من جديد.</p><h2>4. استخدم الأدوات الصحيحة لزيادة الكفاءة</h2><p><strong>مختاري أدوات التطوير:</strong></p><ul class="list-disc list-inside"><li>VS Code - محرر قوي وخفيف مع extensions</li><li>Git - للتحكم بالإصدارات والتعاون</li><li>GitHub Copilot - مساعد برمجي ذكي</li><li>Docker - لتسهيل عملية التطوير والـ deployment</li></ul><p>تعلم اختصارات لوحة المفاتيح: Ctrl+D لاختيار الكلمة، Ctrl+/ لإضافة comment، وغيرها. توفر هذه الاختصارات ساعات من الوقت.</p><h2>5. اقرأ التوثيق الرسمي أولاً</h2><p>قد يبدو بطيئاً، لكن قراءة التوثيق توفر وقتاً طويلاً من محاولة التجربة والخطأ. معظم الأسئلة ستجد إجابتها في التوثيق الرسمي.</p><h2>6. اكتب أكوادك بنظافة وبوضوح</h2><p>كود نظيف = وقت أقل في الصيانة والـ debugging. استخدم أسماء متغيرات واضحة ومعبرة، قسّم الكود لوحدات صغيرة، أضف comments حيث لزم الأمر.</p><h2>7. استخدم Version Control (Git) منذ البداية</h2><p>Git ليس خيار، بل ضرورة حتى للمشاريع الشخصية. يسهل التعاون مع الآخرين، العودة للإصدارات السابقة، ومتابعة التغييرات.</p><h2>8. اختبر أثناء التطوير، لا بعده</h2><p>لا تنتظر نهاية المشروع. اكتب unit tests واختبر بانتظام. هذا يوفر الكثير من الوقت في إصلاح الأخطاء لاحقاً.</p><h2>9. استثمر 30 دقيقة يومية في التعلم</h2><p>30 دقيقة يومية من التعلم = 175 ساعة سنوياً. هذا يعادل شهراً كاملاً من التدريب المكثف. اقرأ المقالات، شاهد الفيديوهات، جرب لغات جديدة.</p><h2>10. اعتنِ بصحتك - الصحة = الإنتاجية</h2><p><strong>روتين صحي:</strong></p><ul class="list-disc list-inside"><li>7-8 ساعات نوم جودة عالية</li><li>رياضة يومية (حتى 30 دقيقة تمشية)</li><li>طعام صحي متوازن</li><li>شرب 2 لتر ماء يومياً</li><li>راحة نفسية بعيداً عن الشاشات</li></ul><p>الجسد الصحي = الذهن الصحي = إنتاجية عالية.</p><h2>الخلاصة</h2><p>الإنتاجية الحقيقية تأتي من التنظيم والانضباط والاهتمام بالصحة. طبّق هذه النصائح واحدة تلو الأخرى وستلاحظ الفرق في إنتاجيتك.</p>`
        },
        {
            id: 'islamic-knowledge',
            category: 'معرفة إسلامية',
            title: 'الأذكار والاستغفار: حصن المؤمن الحقيقي',
            summary: 'تعرف على فضائل الأذكار والاستغفار وكيف تؤثر على روحك وصحتك النفسية والجسدية.',
            author: 'حمزة اعمرني',
            date: '1 نوفمبر 2025',
            color: 'success',
            image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
            tags: ['إسلام', 'أذكار', 'روحاني'],
            content: `<h1>الأذكار والاستغفار: حصن المؤمن الحقيقي</h1><p>في حياتنا اليومية المزدحمة والمليئة بالضغوط، ننسى غالباً أعظم مصدر للقوة والطمأنينة - ذكر الله تعالى. الأذكار ليست مجرد كلمات نرددها للعادة، بل هي علاج للقلب والروح والنفس معاً.</p><h2>ما هي الأذكار؟</h2><p>الأذكار هي كلمات عظيمة وموحية أتت في القرآن الكريم والسنة النبوية الشريفة. تدل على عظمة الله وقدرته وحكمته وتعالى شأنه. من أبسط الأذكار (سبحان الله، الحمد لله، لا إله إلا الله، الله أكبر) إلى الأدعية والسور القرآنية الكاملة.</p><p>الأذكار أنواع كثيرة:</p><ul class="list-disc list-inside"><li>أذكار الصباح والمساء</li><li>أذكار ما قبل وبعد النوم</li><li>أذكار الدخول والخروج من المنزل</li><li>أذكار عند الخوف والهم</li><li>أذكار الشكر والاستغفار</li></ul><h2>فضائل الأذكار الحقيقية</h2><h3>1. تطهير القلب من الذنوب والأمراض</h3><p>قال الله تعالى: "يا أيها الناس قد جاءتكم موعظة من ربكم وشفاء لما في الصدور". الأذكار تنقي القلب من الذنوب والمعاصي وتملأه بالإيمان والتقوى والخشية من الله.</p><h3>2. حماية شاملة من الشر والأذى</h3><p>قال النبي صلى الله عليه وسلم كلمات عظيمة تحمي من الأذى. مثل "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم" - من قالها ثلاث مرات لم يضره شيء.</p><h3>3. سعادة وراحة نفسية تام</h3><p>"ألا بذكر الله تطمئن القلوب" - قال تعالى. من يذكر الله يشعر بطمأنينة عميقة وراحة تام. الذاكرون والذاكرات لهم مغفرة عظيمة وأجر كبير.</p><h3>4. استجابة الدعاء</h3><p>الدعاء مع الأذكار المأثورة يزيد من استجابة الدعاء. الأذكار تقرب العبد من ربه وتجعله أقرب لحصول استجابة دعاءه.</p><h2>أذكار الصباح والمساء - الحصن اليومي</h2><p>من أهم الأذكار اليومية هي أذكار الصباح والمساء. هذا الحصن الذي وصيانا به نبينا محمد صلى الله عليه وسلم يحفظك طوال اليوم ويبارك في وقتك.</p><h2>الاستغفار: باب التوبة والمغفرة</h2><p>الاستغفار هو طلب المغفرة من الله وطلب حفظه ورعايته. الاستغفار يفتح باب الرحمة والبركة والحياة الطيبة. قال الله تعالى: "من عمل سوءاً أو ظلم نفسه ثم استغفر الله وجد الله غفوراً رحيماً".</p><h2>أثر الأذكار على الصحة النفسية والجسدية</h2><p>الدراسات الحديثة الجادة أثبتت أن الأذكار والدعاء يقللان من الإجهاد والقلق والاكتئاب. عندما تشعر بالضيق والحزن، اجلس وقل "لا حول ولا قوة إلا بالله العلي العظيم"، ستشعر بتحسن فوري.</p><h2>كيفية المداومة على الأذكار</h2><ol class="list-decimal list-inside"><li>ابدأ بأذكار الصباح والمساء فقط</li><li>استخدم تطبيقات مثل تطبيق الأذكار ليذكرك</li><li>استقرأ على أوقات محددة كل يوم</li><li>علّم أطفالك وعائلتك الأذكار</li><li>احرص على الاستغفار قبل النوم</li></ol><h2>الخاتمة</h2><p>الأذكار والاستغفار هما سلاح المؤمن الحقيقي. من داوم عليهما وجد السلام والأمان والسعادة والبركة. تذكر دائماً قول الله تعالى: "ألا بذكر الله تطمئن القلوب".</p>`
        },
        {
            id: 'unban-whatsapp',
            category: 'أدوات تقنية',
            title: 'دليل شامل: إلغاء حظر رقم واتساب بكل سهولة وأمان',
            summary: 'ستجد هنا الحل الكامل والمفصّل لفتح واتساب من خلال طرق سهلة وموثوقة وآمنة جداً.',
            author: 'حمزة اعمرني',
            date: '28 نوفمبر 2025',
            color: 'success',
            image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80',
            tags: ['واتساب', 'حظر', 'الحل السريع', 'أدوات'],
            content: `<h1>حل مشكلة حظر واتساب - الدليل الكامل</h1><p>إذا تم حظر حسابك على واتساب، لا تقلق. في هذه المقالة ستجد جميع الطرق المجربة والآمنة لاستعادة حسابك والعودة للتواصل مع أصدقائك وعائلتك.</p><h2>لماذا يحظر واتساب الحسابات؟</h2><p>واتساب يحظر الحسابات للأسباب التالية:</p><ul class="list-disc list-inside"><li>الإرسال المتكرر والسريع للرسائل (spam)</li><li>انتهاك سياسة الاستخدام</li><li>استخدام تطبيقات غير رسمية</li><li>محاولات الهاكرز على الحساب</li></ul><h2>الطريقة الأولى: التواصل المباشر مع فريق الدعم</h2><p>هذه هي أسرع وأسهل الطرق:</p><ol class="list-decimal list-inside"><li>افتح متصفحك وذهب إلى support.whatsapp.com</li><li>اختر "Account and Profile"</li><li>اختر "Account banned"</li><li>ملأ النموذج بتفاصيلك الشخصية والبيانات المطلوبة</li><li>اشرح الموقف بوضوح وطلب إعادة فتح حسابك</li><li>انتظر الرد من فريق الدعم (عادة 24-48 ساعة)</li></ol><h2>الطريقة الثانية: التطبيق الرسمي</h2><p>إذا لم تستطع من المتصفح:</p><ol class="list-decimal list-inside"><li>قم بحذف تطبيق واتساب من جهازك</li><li>قم بحذف البيانات الخاصة بالتطبيق</li><li>أعد تثبيت واتساب من متجر التطبيقات الرسمي</li><li>سجل دخول برقم هاتفك</li><li>إذا ظهرت رسالة الحظر، استخدم الخيار "اطلب مراجعة"</li></ol><h2>الطريقة الثالثة: انتظر وأعد المحاولة</h2><p>في بعض الأحيان، يكون الحظر مؤقتاً. حاول بعد بضع ساعات أو بضعة أيام. قد يتم رفع الحظر تلقائياً.</p><h2>نصائح مهمة لتجنب الحظر في المستقبل</h2><ul class="list-disc list-inside"><li>لا تستخدم واتساب للإرسال المتكرر والسريع</li><li>استخدم فقط التطبيق الرسمي</li><li>لا تشارك أرقاماً أو روابط مريبة</li><li>احترم سياسة الاستخدام</li><li>لا تحاول الوصول لحسابات الآخرين</li></ul><h2>الخاتمة</h2><p>إذا تابعت الخطوات أعلاه، يجب أن يتم استعادة حسابك خلال 48 ساعة. تذكر: الصبر هو المفتاح.</p>`
        },
        {
            id: 'start-programming',
            category: 'أساسيات البرمجة',
            title: 'خطواتك الأولى في عالم البرمجة: مسار شامل للمبتدئين',
            summary: 'دليل كامل يأخذك من الصفر إلى أول برنامج عملي. تعلم البرمجة لم تكن بهذه البساطة من قبل.',
            author: 'حمزة اعمرني',
            date: '15 نوفمبر 2025',
            color: 'primary',
            image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
            tags: ['برمجة', 'مبتدئين', 'تعليم'],
            content: `<h1>كيف تبدأ البرمجة من الصفر: دليل عملي للمبتدئين</h1><p>إذا اخترت تعلم البرمجة، أنت على الطريق الصحيح لمستقبل مشرق وواعد. هذا الدليل سيأخذك من الصفر إلى كتابة أول برنامج عملي.</p><h2>المرحلة الأولى: الفهم الأساسي</h2><p>قبل أن تبدأ بتعلم لغة برمجة، يجب أن تفهم المفاهيم الأساسية:</p><h3>1. المتغيرات (Variables)</h3><p>المتغير هو صندوق في ذاكرة الكمبيوتر تضع فيه معلومة. مثلاً:</p><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">let name = "حمزة";     // اسم
let age = 25;          // عمر
let isStudent = true;  // هل هو طالب؟</pre><h3>2. أنواع البيانات</h3><ul class="list-disc list-inside"><li><strong>String:</strong> نصوص "مرحبا"</li><li><strong>Number:</strong> أرقام 25، 3.14</li><li><strong>Boolean:</strong> صحيح أو خطأ (true/false)</li><li><strong>Array:</strong> قائمة من القيم [1, 2, 3]</li></ul><h3>3. العمليات الحسابية</h3><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">let a = 10;
let b = 5;
console.log(a + b);  // 15 (جمع)
console.log(a - b);  // 5 (طرح)
console.log(a * b);  // 50 (ضرب)
console.log(a / b);  // 2 (قسمة)</pre><h2>المرحلة الثانية: الشروط والقرارات</h2><p>الشروط تسمح للبرنامج باتخاذ قرارات مختلفة:</p><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">if (age >= 18) {
  console.log("أنت بالغ");
} else {
  console.log("أنت قاصر");
}</pre><h2>المرحلة الثالثة: الحلقات (Loops)</h2><p>الحلقات تسمح بتكرار العملية عدة مرات:</p><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">for (let i = 1; i <= 5; i++) {
  console.log(i);  // سيطبع 1 2 3 4 5
}</pre><h2>المرحلة الرابعة: الدوال (Functions)</h2><p>الدالة هي مجموعة تعليمات معاد استخدامها:</p><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">function greet(name) {
  return "مرحباً " + name;
}

console.log(greet("أحمد"));  // مرحباً أحمد</pre><h2>اختيار لغة البرمجة الأولى</h2><h3>JavaScript - الخيار الأول للمبتدئين</h3><p>هذه هي أسهل لغة للبدء. تعمل في المتصفح مباشرة. يمكنك رؤية النتائج فوراً.</p><h3>Python - إذا أردت شيئاً أكثر سهولة</h3><p>Python تتمتع بجملة واضحة جداً وسهلة الفهم. رائعة للمبتدئين.</p><h2>خطوات البدء العملية</h2><ol class="list-decimal list-inside"><li><strong>اختر لغة واحدة:</strong> JavaScript أو Python</li><li><strong>جهز بيئة التطوير:</strong> حمّل VS Code (مجاني)</li><li><strong>تعلم المفاهيم الأساسية:</strong> متغيرات، شروط، حلقات، دوال</li><li><strong>مارس كل يوم:</strong> اكتب كود كل يوم، حتى لو 30 دقيقة</li><li><strong>ابني مشاريع صغيرة:</strong> آلة حاسبة، لعبة بسيطة، موقع ويب</li><li><strong>تعمق وتخصص:</strong> بعد 3-6 أشهر، اختر مجالاً (ويب، ألعاب، ذكاء اصطناعي)</li></ol><h2>موارد التعلم المجانية</h2><ul class="list-disc list-inside"><li><strong>YouTube:</strong> قنوات مثل "Traversy Media" و "freeCodeCamp"</li><li><strong>Codecademy:</strong> تعلم تفاعلي</li><li><strong>freeCodeCamp.org:</strong> دورات مجانية شاملة</li><li><strong>MDN Web Docs:</strong> توثيق ممتاز</li><li><strong>LeetCode:</strong> لحل مسائل برمجية</li></ul><h2>الأخطاء الشائعة التي يجب تجنبها</h2><ul class="list-disc list-inside"><li>عدم الممارسة المنتظمة - الممارسة هي كل شيء</li><li>اختيار لغات صعبة جداً في البداية</li><li>الاستسلام عند أول صعوبة - كل الأخطاء طبيعية</li><li>عدم حل مشاكل بنفسك - جرب قبل أن تبحث عن الحل</li><li>تعلم كل الأشياء دفعة واحدة - تعلم تدريجياً</li></ul><h2>الخاتمة</h2><p>البرمجة مهارة تُتعلم بالممارسة والصبر. كل مبرمج عظيم بدأ من الصفر. ابدأ اليوم، اكتب أول سطر كود، والباقي سيأتي بسهولة.</p>`
        },
        {
            id: 'javascript-advanced',
            category: 'البرمجة المتقدمة',
            title: 'JavaScript المتقدم: من Promises إلى Async/Await',
            summary: 'اتقن المفاهيم المتقدمة في JavaScript التي ستحسن مهارات البرمجة لديك بشكل كبير.',
            author: 'حمزة اعمرني',
            date: '20 نوفمبر 2025',
            color: 'warning',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
            tags: ['JavaScript', 'متقدم', 'Async', 'Promises'],
            content: `<h1>JavaScript المتقدم: الدليل الشامل</h1><p>بعد أن أتقنت أساسيات JavaScript، حان الوقت لتعلم المفاهيم المتقدمة التي تفصل بين المبرمج المبتدئ والمبرمج المحترف.</p><h2>1. Promises: التعامل مع العمليات غير المتزامنة</h2><p>الـ Promise تمثل عملية غير متزامنة قد تنجح أو تفشل في المستقبل:</p><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("نجاح!");
  } else {
    reject("فشل!");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));</pre><h2>2. Async/Await: كود أنظف وأوضح</h2><p>Async/Await تجعل العمل مع Promises أسهل وأكثر وضوحاً:</p><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('خطأ:', error);
  }
}

fetchData();</pre><h2>3. Destructuring: استخراج البيانات بسهولة</h2><p>Destructuring تسمح باستخراج قيم من Objects و Arrays:</p><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">// من Object
const person = { name: 'أحمد', age: 25 };
const { name, age } = person;

// من Array
const colors = ['أحمر', 'أزرق', 'أخضر'];
const [first, second] = colors;</pre><h2>4. Spread Operator: نسخ وجمع البيانات</h2><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">// جمع arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// نسخ objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };</pre><h2>5. Classes و OOP</h2><p>البرمجة الموجهة للكائنات تجعل الكود أكثر تنظيماً:</p><pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello " + this.name;
  }
}

const person = new Person('Ahmed', 25);
console.log(person.greet());</pre><h2>الخاتمة</h2><p>إتقان هذه المفاهيم سيجعلك مبرمجاً محترفاً قادراً على كتابة كود فعّال واحترافي.</p>`
        }
    ]
};

export const chatContent = {
    title: '💬 تحدث معي مباشرة',
    description: 'يمكنك التواصل معي من خلال الوسائل التالية، أو قم بملء نموذج الاتصال بسهولة.',
    methods: [
        { IconComponent: SiWhatsapp, title: 'واتساب مباشر', description: 'تحديث معي على واتساب للتحدث المباشر', url: 'https://wa.me/+212624855939', buttonText: 'واتساب', color: 'success' },
        { IconComponent: SiFacebook, title: 'فيسبوك', description: 'تحديث معك على فيسبوك', url: 'https://www.facebook.com/6kqzuj3y4e', buttonText: 'فيسبوك', color: 'primary' },
        { IconComponent: SiInstagram, title: 'إنستجرام', description: 'متابعة وتحديث معك على إنستجرام', url: 'https://instagram.com/hamza_amirni_01', buttonText: 'إنستجرام', color: 'danger' },
        { IconComponent: SiTelegram, title: 'تيليجرام مباشر', description: 'تحديث معك على تيليجرام للتحدث المباشر', url: 'https://t.me/hamzaamirni', buttonText: 'تيليجرام', color: 'primary' },
    ],
    formTitle: '✉️ اترك لي رسالة واضحة',
    formDescription: 'أرسل لي رسالة واجعلني أعرف أكثر!',
    requestTypes: ['استفسار عام', 'مساعدة سريعة', 'طلب مشروع', 'تعاون'],
    priorities: ['عاجل', 'عادي']
};

export default articlesContent;
