import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Terms: React.FC = () => {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <h1 className="text-4xl font-bold text-dark-color mb-4">شروط الاستخدام</h1>
        <p className="text-lg text-dark-color/70">
          الشروط والأحكام التي تحكم استخدام موقع حمزة اعمرني
        </p>
      </Card>

      <Card>
        <div className="prose prose-lg max-w-none text-right">
          <h2 className="text-2xl font-bold text-primary mb-4">1. قبول الشروط</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            باستخدام موقع حمزة اعمرني، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
            إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">2. وصف الخدمة</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            موقع حمزة اعمرني هو منصة تقنية تقدم:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>محتوى تعليمي في مجال البرمجة والتقنية</li>
            <li>مقالات ودروس تقنية</li>
            <li>معلومات حول المشاريع والخدمات</li>
            <li>روابط للتواصل والقنوات التعليمية</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">3. الاستخدام المقبول</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            يُسمح لك باستخدام الموقع للأغراض التالية فقط:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>الاطلاع على المحتوى التعليمي والتقني</li>
            <li>التعلم والاستفادة من المواد المقدمة</li>
            <li>التواصل معنا للاستفسارات المشروعة</li>
            <li>مشاركة المحتوى مع ذكر المصدر</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">4. الاستخدام المحظور</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            يُحظر عليك القيام بما يلي:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>نسخ أو إعادة نشر المحتوى دون إذن</li>
            <li>استخدام الموقع لأغراض غير قانونية</li>
            <li>محاولة اختراق أو إلحاق الضرر بالموقع</li>
            <li>إرسال محتوى مسيء أو غير لائق</li>
            <li>انتهاك حقوق الملكية الفكرية</li>
            <li>استخدام برامج آلية لجمع البيانات</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">5. حقوق الملكية الفكرية</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            جميع المحتويات الموجودة على الموقع، بما في ذلك النصوص والصور والتصميم والكود، 
            محمية بحقوق الطبع والنشر وتخص حمزة اعمرني. لا يُسمح بإعادة الاستخدام دون إذن مكتوب.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">6. المحتوى المقدم من المستخدمين</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            عند إرسال أي محتوى إلينا (تعليقات، رسائل، إلخ):
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>تضمن أن المحتوى لا ينتهك حقوق الآخرين</li>
            <li>تمنحنا الحق في استخدام المحتوى للأغراض التعليمية</li>
            <li>تتحمل المسؤولية الكاملة عن المحتوى المرسل</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">7. الإعلانات</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            قد يحتوي الموقع على إعلانات من شركاء إعلانات معتمدين. 
            نحن غير مسؤولين عن محتوى هذه الإعلانات أو المواقع التي تؤدي إليها.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">8. إخلاء المسؤولية</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            الموقع والمحتوى مقدمان "كما هما" دون أي ضمانات. نحن غير مسؤولين عن:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>دقة أو اكتمال المعلومات المقدمة</li>
            <li>أي أضرار ناتجة عن استخدام الموقع</li>
            <li>انقطاع الخدمة أو الأخطاء التقنية</li>
            <li>محتوى المواقع الخارجية المرتبطة</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">9. تحديد المسؤولية</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            في أي حال من الأحوال، لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة 
            أو عرضية أو خاصة أو تبعية ناتجة عن استخدام الموقع.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">10. التعديلات</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            نحتفظ بالحق في تعديل هذه الشروط في أي وقت. التعديلات تصبح سارية فور نشرها على الموقع. 
            استمرارك في استخدام الموقع يعني موافقتك على الشروط المحدثة.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">11. إنهاء الاستخدام</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            نحتفظ بالحق في منع أو تقييد الوصول إلى الموقع لأي مستخدم ينتهك هذه الشروط، 
            دون إشعار مسبق ودون تحمل أي مسؤولية.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">12. القانون المطبق</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            تخضع هذه الشروط لقوانين المملكة العربية السعودية. أي نزاع ينشأ عن استخدام الموقع 
            يخضع لاختصاص المحاكم السعودية.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">13. التواصل</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            للاستفسارات حول هذه الشروط، يمكنك التواصل معنا عبر:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>البريد الإلكتروني: terms@hamzaamirni.com</li>
            <li>واتساب: من خلال الروابط المتاحة في الموقع</li>
          </ul>

          <div className="bg-gray-100 p-4 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>تاريخ آخر تحديث:</strong> {new Date().toLocaleDateString('ar-SA')}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>تاريخ السريان:</strong> {new Date().toLocaleDateString('ar-SA')}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Terms;
