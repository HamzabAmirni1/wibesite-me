import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from '../components/ProfileSection';
import SkillsCard from '../components/SkillsCard';
import Timeline from '../components/Timeline';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import Card from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';
import { Lightbulb, CheckCircle, Palette } from 'lucide-react';
import { aboutContent } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring'
    }
  }
};

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <ProfileSection />
      </motion.div>

      {/* Banner Ad */}
      <motion.div variants={itemVariants}>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl mx-auto rounded-2xl border-2 border-dashed border-primary/40 bg-white/70 shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="مساحة إعلانية"
              className="w-full h-32 sm:h-40 object-cover"
            />
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=400&q=80" alt="برمجة حديثة" className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"/>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="تطوير تطبيقات" className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"/>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80" alt="تعلم تقني" className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"/>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SkillsCard skills={aboutContent.skills} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            {t('journeySection.title', language)}
          </h3>
          <Timeline items={Array.isArray(t('journeySection.items', language)) ? t('journeySection.items', language) : []} />
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            {t('philosophySection.title', language)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Continuous Learning */}
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark-color mb-2">
                {t('philosophySection.continuousLearning.title', language)}
              </h4>
              <p className="text-dark-color/70">
                {t('philosophySection.continuousLearning.description', language)}
              </p>
            </motion.div>

            {/* Quality Delivery */}
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark-color mb-2">
                {t('philosophySection.qualityDelivery.title', language)}
              </h4>
              <p className="text-dark-color/70">
                {t('philosophySection.qualityDelivery.description', language)}
              </p>
            </motion.div>

            {/* Design & Creativity */}
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark-color mb-2">
                {t('philosophySection.designCreativity.title', language)}
              </h4>
              <p className="text-dark-color/70">
                {t('philosophySection.designCreativity.description', language)}
              </p>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <div className="space-y-10">
            <section className="space-y-3 text-center">
              <h2 className="text-3xl font-extrabold text-primary">
                صفحة خدمات تطوير وتصميم المواقع
              </h2>
              <p className="text-dark-color/80 leading-relaxed max-w-3xl mx-auto">
                مرحباً بك في مساحة خدماتي الخاصة بتطوير وتصميم المواقع الإلكترونية. أعمل على مساعدة الأفراد والشركات على بناء حضور رقمي احترافي وسريع، مع تجربة استخدام مريحة على جميع الأجهزة.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-primary border-r-4 border-primary pr-3 inline-block">
                الخدمات التي أقدّمها
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-dark-color">تصميم وتطوير المواقع الشخصية</h4>
                  <p className="text-dark-color/80 text-sm leading-relaxed">
                    مواقع تعريفية وصفحات هبوط للمستقلّين، المدرّبين، وصنّاع المحتوى، مصممة لتسويق خدماتك بشكل احترافي.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-dark-color">تصميم مواقع الشركات</h4>
                  <p className="text-dark-color/80 text-sm leading-relaxed">
                    مواقع احترافية لعرض خدمات الشركة، فريق العمل، وإنجازاتها، مع نماذج تواصل وطلب عروض.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-dark-color">إنشاء المتاجر الإلكترونية</h4>
                  <p className="text-dark-color/80 text-sm leading-relaxed">
                    متاجر إلكترونية متكاملة لبيع المنتجات المادية أو الرقمية مع إدارة المنتجات والطلبات بسهولة.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-dark-color">ربط وسائل الدفع الإلكتروني</h4>
                  <p className="text-dark-color/80 text-sm leading-relaxed">
                    ربط الموقع ببوابات دفع إلكترونية موثوقة تناسب السوق المحلي والدولي لضمان تجربة دفع سلسة وآمنة.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-dark-color">الدعم التقني والصيانة</h4>
                  <p className="text-dark-color/80 text-sm leading-relaxed">
                    متابعة دورية للموقع، إصلاح الأعطال، التحديثات الأمنية، وتحسين الأداء لضمان استقرار مشروعك.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-dark-color">تحسين محركات البحث (SEO)</h4>
                  <p className="text-dark-color/80 text-sm leading-relaxed">
                    تهيئة الموقع للظهور في نتائج البحث، تحسين السرعة، وهيكلة المحتوى لزيادة فرص الوصول إلى عملائك.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg text-dark-color">برمجة حلول خاصة حسب الطلب</h4>
                  <p className="text-dark-color/80 text-sm leading-relaxed">
                    تطوير أنظمة ولوحات تحكم ومنصّات مخصّصة (حجز، إدارة عملاء، أنظمة داخلية…) وفق احتياجات مشروعك.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-primary border-r-4 border-primary pr-3 inline-block">
                لماذا تختار العمل معي؟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right text-sm">
                <div className="bg-green-50/70 border border-green-100 rounded-xl p-4 space-y-2">
                  <h4 className="font-semibold text-dark-color">احترافية في التنفيذ</h4>
                  <p className="text-dark-color/80">
                    التزام بأفضل معايير التصميم والبرمجة مع واجهات عصرية ومتجاوبة ومناسبة لهوية مشروعك.
                  </p>
                </div>
                <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 space-y-2">
                  <h4 className="font-semibold text-dark-color">سرعة في الإنجاز</h4>
                  <p className="text-dark-color/80">
                    احترام المواعيد المتفق عليها وتسليم المشروع في الوقت دون التضحية بالجودة.
                  </p>
                </div>
                <div className="bg-purple-50/70 border border-purple-100 rounded-xl p-4 space-y-2">
                  <h4 className="font-semibold text-dark-color">أسعار مناسبة ومرنة</h4>
                  <p className="text-dark-color/80">
                    باقات وخيارات متعدّدة تناسب الأفراد وروّاد الأعمال والشركات بمختلف أحجامها.
                  </p>
                </div>
                <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-4 space-y-2">
                  <h4 className="font-semibold text-dark-color">دعم مستمر بعد التسليم</h4>
                  <p className="text-dark-color/80">
                    مرافقة تقنية بعد إطلاق الموقع، مع إمكانية التعديلات والتحسينات عند الحاجة.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-primary border-r-4 border-primary pr-3 inline-block">
                باقات الخدمات
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right text-sm">
                <div className="rounded-xl border border-primary/20 bg-white/70 shadow-sm p-5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-primary">باقة البداية</h4>
                    <ul className="list-disc list-inside space-y-1 text-dark-color/80">
                      <li>موقع صفحة واحدة (Landing Page)</li>
                      <li>تصميم متجاوب مع الهاتف</li>
                      <li>نموذج تواصل بسيط</li>
                      <li>ربط بحسابات التواصل الاجتماعي</li>
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-primary/10 space-y-1">
                    <p className="font-semibold text-dark-color">السعر: ابتداءً من X درهم</p>
                    <p className="text-xs text-dark-color/70">مثال: صفحة تعريفية لمستقل أو مدرّب أو خدمة واحدة.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-primary/20 bg-white/80 shadow-sm p-5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-primary">باقة الأعمال</h4>
                    <ul className="list-disc list-inside space-y-1 text-dark-color/80">
                      <li>موقع من 3 إلى 5 صفحات</li>
                      <li>تصميم متوافق مع هوية العلامة التجارية</li>
                      <li>نموذج طلب عرض سعر</li>
                      <li>تهيئة أساسيات تحسين محركات البحث</li>
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-primary/10 space-y-1">
                    <p className="font-semibold text-dark-color">السعر: ابتداءً من Y درهم</p>
                    <p className="text-xs text-dark-color/70">مثال: موقع شركة خدمات، وكالة، أو مكتب استشارات.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-primary/20 bg-white/90 shadow-sm p-5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-primary">باقة المتجر الإلكتروني</h4>
                    <ul className="list-disc list-inside space-y-1 text-dark-color/80">
                      <li>متجر إلكتروني متكامل</li>
                      <li>صفحات المنتجات وسلّة المشتريات</li>
                      <li>ربط بوابة دفع إلكترونية</li>
                      <li>إعداد خيارات الشحن والضرائب الأساسية</li>
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-primary/10 space-y-1">
                    <p className="font-semibold text-dark-color">السعر: ابتداءً من Z درهم</p>
                    <p className="text-xs text-dark-color/70">مثال: متجر لبيع الملابس، المنتجات الرقمية، أو غيرها.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3 text-center">
              <h3 className="text-2xl font-bold text-primary">
                جاهز للبدء في مشروع موقعك؟
              </h3>
              <p className="text-dark-color/80 max-w-2xl mx-auto text-sm leading-relaxed">
                للتواصل والطلب، يمكنك استخدام نموذج التواصل في الموقع أو مراسلتي مباشرة عبر البريد الإلكتروني أو الواتساب. أرسل وصفاً مختصراً لمشروعك ونوع الموقع الذي تريده، وسأعود إليك بعرض يشمل السعر ومدة التنفيذ.
              </p>
            </section>
          </div>
        </Card>
      </motion.div>

      {/* Inline Ad */}
      <motion.div variants={itemVariants}>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>

      <motion.div variants={itemVariants}>
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default Home;
