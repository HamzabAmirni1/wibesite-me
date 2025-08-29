import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { AlertTriangle, Info, Shield, ExternalLink } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center bg-gradient-to-br from-orange-50 to-red-50">
        <div className="flex items-center justify-center mb-4">
          <AlertTriangle className="w-12 h-12 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold text-dark-color mb-4">إخلاء المسؤولية</h1>
        <p className="text-lg text-dark-color/70">
          معلومات مهمة حول استخدام موقع حمزة اعمرني والمحتوى المقدم
        </p>
      </Card>

      <Card>
        <div className="prose prose-lg max-w-none text-right">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex items-center">
              <Info className="w-5 h-5 text-yellow-600 ml-2" />
              <p className="text-yellow-800 font-semibold">
                يرجى قراءة هذا الإخلاء بعناية قبل استخدام الموقع
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">1. إخلاء المسؤولية العام</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            المعلومات الواردة في موقع حمزة اعمرني مقدمة لأغراض تعليمية وإعلامية فقط. 
            رغم بذل أقصى الجهود لضمان دقة المعلومات، إلا أننا لا نضمن اكتمالها أو دقتها أو حداثتها. 
            استخدام هذه المعلومات يكون على مسؤوليتك الشخصية.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">2. المحتوى التقني والبرمجي</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">تنبيه مهم للمطورين:</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>الأكواد والحلول البرمجية مقدمة كأمثلة تعليمية</li>
              <li>يجب اختبار جميع الأكواد في بيئة آمنة قبل الاستخدام الإنتاجي</li>
              <li>قد تحتاج الأكواد لتعديلات حسب متطلبات مشروعك</li>
              <li>نحن غير مسؤولين عن أي أضرار ناتجة عن استخدام الأكواد</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">3. الروابط الخارجية</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            يحتوي الموقع على روابط لمواقع خارجية لأغراض المرجعية والفائدة. نحن لسنا مسؤولين عن:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>محتوى المواقع الخارجية أو دقة المعلومات فيها</li>
            <li>سياسات الخصوصية للمواقع الخارجية</li>
            <li>أي أضرار قد تنتج عن زيارة هذه المواقع</li>
            <li>توفر أو استمرارية عمل هذه المواقع</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">4. الإعلانات والمحتوى التجاري</h2>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <div className="flex items-center mb-2">
              <Shield className="w-5 h-5 text-green-600 ml-2" />
              <h3 className="font-semibold text-green-800">إعلانات Google AdSense</h3>
            </div>
            <p className="text-green-700 text-sm">
              يستخدم هذا الموقع Google AdSense لعرض الإعلانات. نحن غير مسؤولين عن محتوى هذه الإعلانات 
              أو المنتجات والخدمات المُعلن عنها. يرجى توخي الحذر عند التعامل مع الإعلانات.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">5. النصائح والاستشارات</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            أي نصائح أو توصيات مقدمة في الموقع:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>مبنية على الخبرة الشخصية والمعرفة العامة</li>
            <li>لا تشكل استشارة مهنية رسمية</li>
            <li>قد لا تناسب جميع الحالات أو المشاريع</li>
            <li>يُنصح بالحصول على استشارة متخصصة للقرارات المهمة</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">6. حقوق الطبع والنشر</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            نحترم حقوق الملكية الفكرية ونسعى لتجنب انتهاكها. إذا كنت تعتقد أن محتوى في الموقع 
            ينتهك حقوق الطبع والنشر الخاصة بك، يرجى التواصل معنا فوراً لحل المشكلة.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">7. تحديث المحتوى</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            نسعى لتحديث المحتوى بانتظام، لكن التقنية تتطور بسرعة. بعض المعلومات قد تصبح قديمة 
            أو غير دقيقة مع مرور الوقت. يُنصح بالتحقق من أحدث المصادر الرسمية.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">8. الأخطاء والسهو</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            رغم بذل العناية في إعداد المحتوى، قد تحدث أخطاء أو سهو. نحن غير مسؤولين عن أي 
            أضرار ناتجة عن هذه الأخطاء. إذا وجدت خطأ، يرجى إبلاغنا لتصحيحه.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">9. توفر الخدمة</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            نسعى لضمان توفر الموقع على مدار الساعة، لكن قد تحدث انقطاعات لأسباب تقنية أو صيانة:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>لسنا مسؤولين عن انقطاع الخدمة المؤقت</li>
            <li>قد نحتاج لإيقاف الموقع للصيانة دون إشعار مسبق</li>
            <li>لا نضمن الوصول المستمر للموقع</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">10. التغييرات على الإخلاء</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            نحتفظ بالحق في تعديل هذا الإخلاء في أي وقت. التعديلات تصبح سارية فور نشرها. 
            يُنصح بمراجعة هذه الصفحة دورياً للاطلاع على أي تغييرات.
          </p>

          <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
            <div className="flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600 ml-2" />
              <h3 className="font-semibold text-red-800">تنبيه مهم</h3>
            </div>
            <p className="text-red-700 text-sm">
              استخدام هذا الموقع يعني موافقتك على جميع بنود إخلاء المسؤولية هذا. 
              إذا كنت لا توافق على أي من هذه البنود، يرجى عدم استخدام الموقع.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">11. التواصل</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            للاستفسارات حول إخلاء المسؤولية أو الإبلاغ عن مشاكل:
          </p>
          <div className="flex items-center gap-2 text-primary">
            <ExternalLink size={16} />
            <span>تواصل معنا عبر صفحة الاتصال</span>
          </div>

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

export default Disclaimer;
