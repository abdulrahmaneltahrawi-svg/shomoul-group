import { useState } from 'react';

function About() {
  const [activeSection, setActiveSection] = useState('story');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Navigation Buttons */}
      <section className="bg-black sticky top-16 z-50 shadow-lg" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('story')}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeSection === 'story'
                  ? 'bg-[#c5a059] text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-[#c5a059]/80 hover:text-white'
              }`}
            >
              قصتنا
            </button>
            <button
              onClick={() => scrollToSection('mission-vision')}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeSection === 'mission-vision'
                  ? 'bg-[#c5a059] text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-[#c5a059]/80 hover:text-white'
              }`}
            >
              رسالتنا ورؤيتنا
            </button>
            <button
              onClick={() => scrollToSection('values')}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeSection === 'values'
                  ? 'bg-[#c5a059] text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-[#c5a059]/80 hover:text-white'
              }`}
            >
              قيمنا
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Story */}
      <section id="story" className="py-20 bg-white scroll-mt-32" dir="rtl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
                <img
                  src="/imges/b003.jpg"
                  alt="مجموعة شمول"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1 bg-[#c5a059]/80 text-white rounded-full text-lg font-bold mb-4">قصتنا</div>
              <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                مجموعة شمول <span className="text-[#c5a059]">للاستشارات الهندسية</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                مجموعة شمول للإستشارات هي مجموعة من الشركات المتخصصة في الاستشارات
                الهندسية والسلامة والاستشارات القانونية والمالية والإدارية والفنية
                والاستشارات البيئية والجيوجرافية وأعمال المساحة وفرز الأراضي،
                باستخدام أحدث التقنيات للوصول إلى أعلى مستويات الخدمات لعملائنا.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                نحن فخورون دائمًا بكل ما حققناه ونسعى إلى مواصلة طريق التقدم والنمو بناءً على الرؤية المستقبلية للمملكة العربية السعودية ومرتكزات مبنية على أسس سليمة تتبع المعايير الدولية والوطنية ومواكبة التكنولوجيا مع التركيز على تحقيق النمو المستدام.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section id="mission-vision" className="py-20 bg-linear-to-l from-gray-50 to-blue-50 scroll-mt-32" dir="rtl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-50 rounded-full -z-10"></div>
                <img
                  src="/imges/s002.jpg"
                  alt="رسالتنا ورؤيتنا"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1 bg-[#c5a059]/80 text-white rounded-full text-lg font-bold mb-4">رسالتنا ورؤيتنا</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">
                ماذا <span className="text-[#c5a059]">نطمح</span> إليه
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border-r-4 border-[#c5a059]">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">رسالتنا</h3>
                  <p className="text-gray-600 leading-relaxed">
                    تقديم استشارات هندسية متكاملة بأعلى معايير الجودة والاحترافية، 
                    مع الالتزام بأخلاقيات المهنة وتحقيق رضا العملاء من خلال حلول مبتكرة وفعالة.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 border-r-4 border-black-500">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">رؤيتنا</h3>
                  <p className="text-gray-600 leading-relaxed">
                    أن نكون الخيار الأول في مجال الاستشارات الهندسية في المملكة العربية السعودية، 
                    وأن نساهم في تحقيق رؤية 2030 من خلال مشاريعنا المبتكرة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Values */}
      <section id="values" className="py-20 bg-white scroll-mt-32" dir="rtl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-50 rounded-full -z-10"></div>
                <img
                  src="/imges/fi06.jpg"
                  alt="قيمنا"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1 bg-[#c5a059]/80 text-white rounded-full text-lg font-bold mb-4">قيمنا</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">
                مبادئنا <span className="text-[#c5a059]">الأساسية</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-5 rounded-xl border-t-4 border-[#c5a059]  shadow-lg transition-all group flex items-center gap-4 " >
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center ">
                    <img src="/icons/high-quality.png" alt="quality" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">الجودة</h3>
                    <p className="text-gray-500 text-sm">نلتزم بأعلى معايير الجودة في جميع خدماتنا الهندسية والاستشارية.</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl border-t-4 border-[#c5a059]  shadow-lg transition-all group flex items-center gap-4 " >
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center ">
                    <img src="/icons/agree.png" alt="agree" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">النزاهة</h3>
                    <p className="text-gray-500 text-sm">نعمل بشفافية وأمانة في جميع تعاملاتنا مع العملاء والشركاء.</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl border-t-4 border-[#c5a059]  shadow-lg transition-all group flex items-center gap-4 " >
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center ">
                    <img src="/icons/project-management.png" alt="management" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">الابتكار</h3>
                    <p className="text-gray-500 text-sm">نستخدم أحدث التقنيات والحلول المبتكرة لتقديم أفضل الخدمات.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
     
    </>
  );
}

export default About;