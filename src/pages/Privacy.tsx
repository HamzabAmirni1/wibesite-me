import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Privacy: React.FC = () => {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <h1 className="text-4xl font-bold text-dark-color mb-4">سياسة الخصوصية</h1>
        <p className="text-lg text-dark-color/70">
          نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية
        </p>
      </Card>

      <Card>
        <div className="prose prose-lg max-w-none text-right">
          <h2 className="text-2xl font-bold text-primary mb-4">1. المعلومات التي نجمعها</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            نقوم بجمع المعلومات التالية عندما تزور موقعنا أو تتفاعل معه:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>معلومات الاتصال مثل الاسم والبريد الإلكتروني (عند التواصل معنا)</li>
            <li>بيانات الاستخدام مثل صفحات الموقع التي تزورها</li>
            <li>معلومات تقنية مثل عنوان IP ونوع المتصفح</li>
            <li>ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">2. كيف نستخدم معلوماتك</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            نستخدم المعلومات المجمعة للأغراض التالية:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>تقديم وتحسين خدماتنا ومحتوانا</li>
            <li>الرد على استفساراتك وطلبات الدعم</li>
            <li>إرسال تحديثات حول المحتوى الجديد (بموافقتك)</li>
            <li>تحليل استخدام الموقع لتحسين الأداء</li>
            <li>عرض إعلانات مخصصة عبر Google AdSense</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">3. مشاركة المعلومات</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة، باستثناء:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل الموقع</li>
            <li>Google AdSense لعرض الإعلانات المخصصة</li>
            <li>عندما يتطلب القانون ذلك</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">4. ملفات تعريف الارتباط (Cookies)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            نستخدم ملفات تعريف الارتباط لـ:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>تذكر تفضيلاتك وإعداداتك</li>
<<<<<<< HEAD
          </ul>

          <p className="text-gray-700 leading-relaxed">
            يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال الرسالة التي تظهر عند زيارة الموقع لأول مرة، 
            أو من خلال إعدادات متصفحك. لمزيد من المعلومات حول كيفية استخدام Google لملفات تعريف الارتباط، 
            يرجى زيارة <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">سياسة ملفات تعريف الارتباط الخاصة بـ Google</a>.
=======
            <li>تحليل حركة المرور على الموقع</li>
            <li>عرض إعلانات مخصصة عبر Google AdSense</li>
            <li>تحسين تجربة المستخدم</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            يمكنك إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحك.
>>>>>>> cd604c7a170b82cea202f053241492dd08e86be1
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">5. Google AdSense والإعلانات</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            نستخدم Google AdSense لعرض الإعلانات على موقعنا. Google قد تستخدم:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>ملفات تعريف الارتباط لعرض إعلانات مخصصة</li>
            <li>بيانات مجهولة الهوية لتحسين الإعلانات</li>
            <li>معلومات حول زياراتك لمواقع أخرى</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            يمكنك إلغاء الاشتراك في الإعلانات المخصصة من خلال 
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">
              إعدادات إعلانات Google
            </a>
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">6. أمان المعلومات</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير.
            ومع ذلك، لا يمكن ضمان أمان البيانات بنسبة 100% عبر الإنترنت.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">7. حقوقك</h2>
          <p className="text-gray-700 leading-relaxed mb-4">لديك الحق في:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>الوصول إلى معلوماتك الشخصية</li>
            <li>تصحيح أو تحديث معلوماتك</li>
            <li>حذف معلوماتك الشخصية</li>
            <li>الاعتراض على معالجة معلوماتك</li>
            <li>نقل معلوماتك إلى خدمة أخرى</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">8. التحديثات على هذه السياسة</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإشعارك بأي تغييرات جوهرية 
            عن طريق نشر السياسة المحدثة على هذه الصفحة مع تاريخ التحديث.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">9. اتصل بنا</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
<<<<<<< HEAD
            <li>البريد الإلكتروني: hamzaamirni451@gmail.com</li>
=======
            <li>البريد الإلكتروني: privacy@hamzaamirni.com</li>
>>>>>>> cd604c7a170b82cea202f053241492dd08e86be1
            <li>واتساب: من خلال الروابط المتاحة في الموقع</li>
          </ul>

          <div className="bg-gray-100 p-4 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>تاريخ آخر تحديث:</strong> {new Date().toLocaleDateString('ar-SA')}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Privacy;
