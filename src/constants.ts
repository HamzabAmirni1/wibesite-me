import { Home, User, Youtube, Code, AppWindow, Gamepad2, Bot, Wrench, Newspaper, MessageSquare, Server, Palette, BrainCircuit, Cpu, Lightbulb, CheckCircle } from 'lucide-react';
import { SiFacebook, SiYoutube, SiInstagram, SiWhatsapp, SiTelegram, SiOpenai, SiGithubcopilot, SiPerplexity, SiGoogledocs, SiCoursera, SiCanva, SiGithub, SiStackoverflow } from 'react-icons/si';
import { FaChess, FaKeyboard, FaGraduationCap, FaMosque, FaQuran, FaTh } from 'react-icons/fa';

export const navLinks = [
  { id: 'home', title: 'الصفحة الرئيسية', icon: Home },
  { id: 'about', title: 'عني', icon: User },
  { id: 'videos', title: 'الفيديوهات', icon: Youtube },
  { id: 'programming', title: 'البرمجة', icon: Code },
  { id: 'apps', title: 'التطبيقات', icon: AppWindow },
  { id: 'fun', title: 'التسلية', icon: Gamepad2 },
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
        url: 'https://www.mediafire.com/file/z4dr352cdqb6bd2/smart_education_BAC_1.0.apk/file',
        buttonClass: 'bg-gradient-to-r from-primary to-secondary'
    }
];

export const whatsappChannels = [
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
            content: `<h2>تصميم الويب في 2025</h2><p>تصميم الويب ليس فقط عن الجماليات، بل عن خلق تجربة مستخدم رائعة.</p><h2>1. التصميم المستجيب</h2><p>يجب أن يعمل موقعك بشكل مثالي على جميع الأجهزة. أكثر من 60% من حركة المرور تأتي من الهواتف الذكية.</p><h2>2. سرعة التحميل</h2><p>موقع بطيء = موقع مهجور. استخدم Google PageSpeed Insights لقياس السرعة. قلل حجم الصور، استخدم CDN.</p><h2>3. البساطة</h2><p>تصميم نظيف وبسيط أفضل من تصميم معقد. استخدم المساحة البيضاء بذكاء.</p><h2>4. الألوان</h2><p>اختيار الألوان الصحيحة يؤثر على عاطفة المستخدم. استخدم Coolors.co لاختيار ألوان متناسقة.</p><h2>5. إمكانية الوصول</h2><p>تأكد من أن موقعك يمكن استخدامه من قبل الجميع بما في ذلك الأشخاص ذوي الاحتياجات الخاصة.</p>`
        },
        {
            id: 'productivity-tips',
            category: 'إنتاجية وتنظيم',
            title: 'كيف تزيد إنتاجيتك كمبرمج بـ 10 نصائح فعالة',
            summary: 'تعلم استراتيجيات إنتاجية مثبتة ستجعلك تنجز أكثر في وقت أقل.',
            author: 'حمزة اعمرني',
            date: '5 نوفمبر 2025',
            color: 'info',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
            tags: ['إنتاجية', 'نصائح', 'تطوير'],
            content: `<h2>الإنتاجية: المفتاح الحقيقي للنجاح</h2><p>كل مبرمج يواجه نفس التحدي: كيف أنجز أكثر في وقت أقل؟ الحقيقة أن الإنتاجية ليست عن العمل أكثر، بل عن العمل بذكاء.</p><h2>1. قسم عملك إلى مهام صغيرة</h2><p>بدلاً من "أنشئ موقع كامل"، قسم المشروع إلى مهام صغيرة مثل "أنشئ صفحة الرئيسية".</p><h2>2. تقنية Pomodoro</h2><p>اعمل 25 دقيقة بتركيز، ثم خذ فترة راحة 5 دقائق. كرر 4 مرات ثم راحة أطول.</p><h2>3. تجنب الانقطاعات</h2><p>أغلق الإشعارات، ضع الهاتف جانباً. حتى انقطاع بسيط يقلل إنتاجيتك 40%.</p><h2>4. استخدم الأدوات الصحيحة</h2><p>VS Code أو IntelliJ توفر ساعات من وقتك. استخدم اختصارات لوحة المفاتيح.</p><h2>5. اقرأ التوثيق</h2><p>التوثيق الرسمي يوفر وقتاً طويلاً من محاولة التجربة والخطأ.</p><h2>6. اكتب أكوادك بنظافة</h2><p>كود نظيف = وقت أقل في الصيانة. استخدم أسماء متغيرات واضحة.</p><h2>7. استخدم Git</h2><p>Git ليس خيار، بل ضرورة. يسهل التعاون والعودة للإصدارات السابقة.</p><h2>8. اختبر أثناء التطوير</h2><p>لا تنتظر النهاية. اكتب unit tests واختبر بانتظام.</p><h2>9. استثمر في التعلم</h2><p>30 دقيقة يومية للتعلم = تقدم في حياتك المهنية.</p><h2>10. انتبه لصحتك</h2><p>7-8 ساعات نوم، رياضة يومية، طعام صحي = إنتاجية عالية.</p>`
        },
        {
            id: 'islamic-knowledge',
            category: 'معرفة إسلامية',
            title: 'أهمية الأذكار والاستغفار في حياتنا اليومية',
            summary: 'تعرف على فضائل الأذكار والاستغفار وكيف تؤثر على روحك وصحتك النفسية.',
            author: 'حمزة اعمرني',
            date: '1 نوفمبر 2025',
            color: 'success',
            image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
            tags: ['إسلام', 'أذكار', 'روحاني'],
            content: `<h2>الأذكار والاستغفار: حصن المؤمن</h2><p>في حياتنا اليومية المزدحمة، ننسى غالباً أعظم مصدر للقوة والطمأنينة - ذكر الله. الأذكار ليست مجرد كلمات نرددها، بل هي علاج للقلب والروح والنفس.</p><h2>ما هي الأذكار؟</h2><p>الأذكار هي كلمات عظيمة وردت في القرآن الكريم والسنة النبوية الشريفة، تدل على عظمة الله وقدرته وحكمته. من أبسط الأذكار (سبحان الله، الحمد لله، لا إله إلا الله، الله أكبر) إلى الأدعية والسور القرآنية.</p><h2>فضائل الأذكار</h2><p><strong>تطهير القلب:</strong> الأذكار تنقي القلب من الذنوب والمعاصي وتملأه بالإيمان.</p><p><strong>حماية من الشر:</strong> قال النبي صلى الله عليه وسلم كلمات عظيمة تحمي من الأذى.</p><p><strong>سعادة وراحة نفسية:</strong> الذاكرون والذاكرات لهم مغفرة وأجر عظيم.</p><h2>أذكار الصباح والمساء</h2><p>من أهم الأذكار اليومية هي أذكار الصباح والمساء. هذا يحفظك طوال اليوم ويبارك في وقتك.</p><h2>الاستغفار</h2><p>الاستغفار هو طلب المغفرة من الله وطلب حفظه ورعايته. الاستغفار يفتح باب الرحمة والبركة.</p><h2>أثر الأذكار على الصحة النفسية</h2><p>الدراسات الحديثة أثبتت أن الأذكار والدعاء يقللان من الإجهاد والقلق. عندما تشعر بالضيق، اجلس وقل "لا حول ولا قوة إلا بالله".</p><h2>الخاتمة</h2><p>الأذكار والاستغفار هما سلاح المؤمن. من داوم عليهما وجد السلام والأمان والسعادة. تذكر: "ألا بذكر الله تطمئن القلوب".</p>`
        },
        { 
            id: 'unban-whatsapp',
            category: 'أدوات تقنية',
            title: 'طريقة إلغاء حظر رقم واتساب بكل سهولة', 
            summary: 'ستجد هنا الحل الكامل لفتح واتساب من خلال طريقة سهلة وموثوقة وآمنة.',
            author: 'حمزة اعمرني',
            date: '28 نوفمبر 2025',
            color: 'success',
            image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80',
            tags: ['واتساب', 'حظر', 'الحل السريع', 'أدوات'],
            content: `
                <h2>حل مشكلة حظر واتساب - الحل الأساسي!</h2>
                <p>ستجد هنا الحل الكامل لفتح واتساب من خلال طريقة سهلة وموثوقة وآمنة.</p>
                <p>في هذه المقالة، تعرف على جميع الطرق لإلغاء الحظر من واتساب بسهولة.</p>
                
                <h2>طرق إلغاء الحظر من واتساب الأساسية</h2>
                <ol class="list-decimal list-inside space-y-6 my-6">
                    <li>
                        <strong>التواصل مع فريق الدعم بشكل مباشر:</strong> قم بزيارة صفحة دعم واتساب، استخدم خياراتهم للتواصل مع فريق الدعم.
                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" alt="صورة فريق الدعم في واتساب" class="my-4 rounded-lg shadow-md">
                    </li>
                </ol>
            `
        },
        { 
            id: 'start-programming',
            category: 'أساسيات البرمجة',
            title: 'كيف تبدأ تعلم البرمجة من الصفر؟', 
            summary: 'قد تكون قررت تعلم البرمجيات أو كنت تفكر في بدء التعلم من الصفر؟',
            author: 'حمزة اعمرني',
            date: '15 نوفمبر 2025',
            color: 'primary',
            image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
            tags: ['برمجة', 'مبتدئين', 'تعليم'],
            content: `
                <h2>كيف تبدأ البرمجة من الصفر؟</h2>
                <p>إذا اخترت تعلم البرمجة، أنت على الطريق الصحيح لمستقبل مشرق وواعد.</p>
                
                <h2>خطوات البدء للمبتدئين</h2>
                <ol class="list-decimal list-inside space-y-4 my-6">
                    <li><strong>اختر مجال معين:</strong> ابدأ من صفر واختر هل تريد بدء الويب أم البرمجة العامة.</li>
                    <li><strong>ابدأ بأساسيات البرمجة:</strong> ابدأ بفهم المفاهيم الأساسية.</li>
                    <li><strong>الممارسة والمزيد الممارسة:</strong> اكتب الأكواد بنفسك وحل المسائل والتحديات.</li>
                    <li><strong>بناء مشروعات عملية:</strong> ابن مشاريع صغيرة وكبيرة حسب مستواك.</li>
                </ol>
            `
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
