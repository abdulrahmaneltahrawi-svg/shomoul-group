import { useEffect, useState, useRef } from 'react';

function Index() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, team: 0, years: 0 });
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCounting) return;

    const targets = { projects: 3560, clients: 1061, team: 830, years: 10 };
    const duration = 2000;
    const steps = 60;
    const increment = {};
    Object.keys(targets).forEach(key => {
      increment[key] = targets[key] / steps;
    });

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts(prev => {
        const newCounts = {};
        Object.keys(targets).forEach(key => {
          newCounts[key] = Math.min(Math.floor(increment[key] * currentStep), targets[key]);
        });
        return newCounts;
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [startCounting]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imges/ChatGPT Image May 20, 2026, 11_12_45 AM.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 py-20 md:py-70 relative z-10" dir="rtl">
          <div className="max-w-4xl mx-auto text-center mt-32 md:mt-48">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              حلول هندسية احترافية
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              نقدم أفضل الاستشارات الهندسية والتصميم والإشراف على المشاريع بأحدث التقنيات
            </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/about"
                className="inline-block bg-[#c5a059] hover:bg-black text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                من نحن
              </a>
              <a
                href="/services"
                className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-8 py-4 rounded-lg transition-all text-lg"
              >
                خدماتنا
              </a>
            </div>
          </div>
        </div>
      </div>
       
      {/* about Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
            <div className="relative w-full lg:w-1/2 h-auto lg:h-155">
              <div className="flex lg:hidden gap-4 justify-center">
                <img src="/imges/Screenshot 2026-05-13 163200.png" alt="" className="w-[47%] h-90 object-cover rounded-[25px] shadow-2xl" />
                <img src="/imges/Screenshot 2026-05-13 163206.png" alt="" className="w-[47%] h-90 object-cover rounded-[25px] shadow-2xl" />
              </div>
              <div className="hidden lg:block relative h-155">
                <img src="/imges/Screenshot 2026-05-13 163206.png" alt="" className="absolute left-8 bottom-10 w-62.5 h-120 object-cover rounded-[35px] shadow-2xl" />
                <img src="/imges/Screenshot 2026-05-13 163200.png" alt="" className="absolute left-75 top-0 w-62.5 h-120 object-cover rounded-[35px] shadow-2xl" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-right">
              <h2 className="text-3xl font-extrabold text-[#222] leading-tight mb-8">مجموعة شمول للاستشارات الهندسية</h2>
              <p className="text-gray-700 leading-9 mb-8 text-md">مجموعة شمول للإستشارات هي مجموعة من الشركات المتخصصة في الاستشارات الهندسية والسلامة والاستشارات القانونية والمالية والإدارية والفنية والاستشارات البيئية والجيوجرافية وأعمال المساحة وفرز الأراضي، باستخدام أحدث التقنيات للوصول إلى أعلى مستويات الخدمات لعملائنا.</p>
              <p className="text-gray-700 leading-9 text-md mb-5">نحن فخورون دائمًا بكل ما حققناه ونسعى إلى مواصلة طريق التقدم والنمو بناءً على الرؤية المستقبلية للمملكة العربية السعودية ومرتكزات مبنية على أسس سليمة تتبع المعايير الدولية والوطنية ومواكبة التكنولوجيا مع التركيز على تحقيق النمو المستدام.</p>
              <a href="/about" className="inline-flex items-center justify-center bg-[#4d4d4d] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#c5a059] transition duration-300">معرفة المزيد</a>
            </div>
          </div>
        </div>
      </section>

      {/*stats */}
      <section ref={statsRef} className="stats-section relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imges/ChatGPT Image 8 يوليو 2026، 11_23_27 ص.png')" }}>
          <div className="absolute inset-0 bg-black/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <img src="/icons/management.png" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-8 invert" />
              <h2 className="text-white text-4xl md:text-6xl font-extrabold">{counts.projects}+</h2>
              <p className="text-white text-lg md:text-2xl font-bold mt-4 md:mt-10">المشاريع</p>
            </div>
            <div>
              <img src="/icons/support.png" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-8 invert" /> 
              <h2 className="text-white text-4xl md:text-6xl font-extrabold">{counts.clients}+</h2>
              <p className="text-white text-lg md:text-2xl font-bold mt-4 md:mt-10">العملاء</p>
            </div>
            <div>
              <img src="/icons/costumer.png" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-8 invert" />
              <h2 className="text-white text-4xl md:text-6xl font-extrabold">{counts.team}+</h2>
              <p className="text-white text-lg md:text-2xl font-bold mt-4 md:mt-10">أعضاء الفريق</p>
            </div>
            <div>
              <img src="/icons/anniversary.png" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-8 invert" />
              <h2 className="text-white text-4xl md:text-6xl font-extrabold">{counts.years}+</h2>
              <p className="text-white text-lg md:text-2xl font-bold mt-4 md:mt-10">سنوات في مجال العمل</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 3 Cards same style as services page */}
      <section className="py-20 bg-gray-50" dir="rtl">
        <div className="max-w-7xl mx-auto px-5">
          <div className="page-title-wrapper">
            <h2 className="page-title">الخدمات</h2>
            <div className="title-decoration">
              <span className="line"></span>
              <span className="diamond"></span>
              <span className="line"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 - الاستشارات الهندسية */}
            <div className="flex flex-col bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-amber-200 group">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800">الاستشارات الهندسية</h3>
                <img src="/icons/servies.png" alt="الاستشارات الهندسية" className="w-12 h-12 object-contain" />
              </div>
              <p className="text-gray-700 font-semibold mb-4 text-sm">
                نقدم خدمات هندسية شاملة في التصميم والإشراف والاستشارات للمشاريع السكنية والتجارية والصناعية.
              </p>
              <ul className="space-y-3 mb-8 text-gray-500 text-sm grow">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>التصميم المعماري والإنشائي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>الإشراف الهندسي على المشاريع</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>الدراسات الهندسية المتكاملة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>إعداد المخططات التنفيذية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>التصميم الداخلي والخارجي</span>
                </li>
              </ul>
              <a
                href={`https://wa.me/966505888280?text=${encodeURIComponent("أريد الاستفسار عن خدمة: الاستشارات الهندسية")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-[#c5a059] transition-all duration-300"
              >
                اطلب الخدمة
              </a>
            </div>

            {/* Card 2 - المساحة وفرز الأراضي */}
            <div className="flex flex-col bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-amber-200 group">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800">المساحة وفرز الأراضي</h3>
                <img src="/icons/management.png" alt="المساحة وفرز الأراضي" className="w-12 h-12 object-contain" />
              </div>
              <p className="text-gray-700 font-semibold mb-4 text-sm">
                خدمات مساحية دقيقة باستخدام أحدث التقنيات لرفع مساحي وتجزئة ودمج الأراضي.
              </p>
              <ul className="space-y-3 mb-8 text-gray-500 text-sm grow">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>رفع مساحي للأراضي والمباني</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>تجزئة ودمج قطع الأراضي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>فرز الوحدات العقارية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>تعديل وتحديث الصكوك العقارية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>إصدار تقارير مساحية معتمدة</span>
                </li>
              </ul>
              <a
                href={`https://wa.me/966505888280?text=${encodeURIComponent("أريد الاستفسار عن خدمة: المساحة وفرز الأراضي")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-[#c5a059] transition-all duration-300"
              >
                اطلب الخدمة
              </a>
            </div>

            {/* Card 3 - السلامة والرخص */}
            <div className="flex flex-col bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-amber-200 group">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800">السلامة والرخص</h3>
                <img src="/icons/fire-extinguisher.png" alt="السلامة والرخص" className="w-12 h-12 object-contain" />
              </div>
              <p className="text-gray-700 font-semibold mb-4 text-sm">
                تصميم واعتماد أنظمة السلامة وإصدار الرخص التجارية والإنشائية بكفاءة واحترافية.
              </p>
              <ul className="space-y-3 mb-8 text-gray-500 text-sm grow">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>تصميم واعتماد أنظمة السلامة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>رخصة الدفاع المدني وشهادة السلامة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>إصدار رخص البناء والتعديل</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>إعداد خطط الطوارئ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                  <span>تقييم المخاطر وإدارة السلامة</span>
                </li>
              </ul>
              <a
                href={`https://wa.me/966505888280?text=${encodeURIComponent("أريد الاستفسار عن خدمة: السلامة والرخص")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-[#c5a059] transition-all duration-300"
              >
                اطلب الخدمة
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="/services" className="inline-block px-8 py-3 bg-[#c5a059] text-white font-bold rounded-lg hover:bg-black transition-colors">
              عرض جميع الخدمات
            </a>
          </div>
        </div>
      </section>

      {/* Shomoul picture */}
      <section>
        <img src="/imges/ChatGPT Image May 20, 2026, 04_29_10 PM.png" loading="lazy" alt="مجموعة شمول من الداخل" className="w-full max-h-197.5 object-cover block" />
      </section>

      {/* alhayat */}
      <section className="py-16 bg-gray-50">
        <div className="page-title-wrapper">
          <h2 className="page-title">الهيئات المعتمدة</h2>
          <div className="title-decoration">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className="overflow-hidden w-full relative">
          <div className="slider-track">
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/مركز التحكيم التجاري لدول مجلس التعاون الخليجي.jpg" loading="lazy" alt="هيئة" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/بلدي.jpg" loading="lazy" alt="بلدي" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/Sabic.jpg" loading="lazy" alt="Sabic" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/Sap.jpg" loading="lazy" alt="SAP" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/مدن .jpg" loading="lazy" alt="مدن" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/Tasnee.jpg" loading="lazy" alt="Tasnee" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/شركة المياه الوطنية.jpg" loading="lazy" alt="المياه" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/وزارة الدفاع السعودي.jpg" loading="lazy" alt="الدفاع" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/مركز التحكيم التجاري لدول مجلس التعاون الخليجي.jpg" loading="lazy" alt="هيئة" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/بلدي.jpg" loading="lazy" alt="بلدي" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/Sabic.jpg" loading="lazy" alt="Sabic" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/Sap.jpg" loading="lazy" alt="SAP" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/مدن .jpg" loading="lazy" alt="مدن" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/Tasnee.jpg" loading="lazy" alt="Tasnee" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/شركة المياه الوطنية.jpg" loading="lazy" alt="المياه" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="shrink-0 w-56 h-32 bg-white rounded-xl shadow flex items-center justify-center p-5 border border-gray-100">
              <img src="/alhayat/وزارة الدفاع السعودي.jpg" loading="lazy" alt="الدفاع" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative flex items-center justify-center text-center text-white" 
        style={{ height: '85vh', minHeight: '400px', backgroundImage: "url('/imges/ChatGPT Image Jul 13, 2026, 04_43_04 PM.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-5">
          <h1 className="hero-title">لنعمل سوياً</h1>
          <div className="justify-center">
            <span className="line" style={{background: "linear-gradient(90deg, transparent, #c5a059)"}}></span>
          </div>
          <p className="text-lg md:text-xl mb-6 text-gray-200">أخبرنا بما تبحث عنه، وسنرى كيف يمكننا مساعدتك</p>
          <a href="https://api.whatsapp.com/send/?phone=966920031520" className="inline-block px-8 py-4 border-2 border-white text-white text-lg hover:bg-white/60 hover:border-white/50 hover:scale-110 transition-all duration-300">اتصل بنا</a>
        </div>
      </section>   

      {/* Clients Section */}
      <section className="py-16">
        <div className="page-title-wrapper">
          <h2 className="page-title">العملاء</h2>
          <div className="title-decoration">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/001-1.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/002-1.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/003-1.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/004-2.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/006-1.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/007-1.png" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/008-1.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/009-1.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/010-1.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/011.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/025.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-gray-200 hover:scale-110 transition-transform">
                <img src="/clients/013.jpg" alt="عميل" className="max-w-[75%] max-h-[75%] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;