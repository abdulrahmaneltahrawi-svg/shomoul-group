import { useParams, Link } from 'react-router-dom';

function CompanyDetail() {
  const { id } = useParams();
  const index = parseInt(id);

  const companies = [
    { 
      name: "شمول الاعمال", 
      img: "//companies/b007.jpg",
      description: "شركة متخصصة في إدارة الأعمال وتقديم الحلول الإدارية المتكاملة للشركات والمؤسسات.",
      details: "تقدم شمول الأعمال حلولاً إدارية متكاملة تشمل التخطيط الاستراتيجي، إدارة الموارد البشرية، تحسين العمليات الإدارية، وتطوير الهياكل التنظيمية للمؤسسات.",
      services: ["التخطيط الاستراتيجي", "إدارة الموارد البشرية", "تطوير الهياكل التنظيمية", "تحسين العمليات الإدارية", "استشارات إدارية متكاملة"],
      stats: ["+50 عميل", "+100 مشروع", "15 خبير"],
      color: "from-blue-600 to-blue-800"
    },
    { 
      name: "شمول الهندسية", 
      img: "//companies/e007.jpg",
      description: "شركة رائدة في مجال الاستشارات والتصميم الهندسي للمشاريع السكنية والتجارية والصناعية.",
      details: "تقدم شمول الهندسية خدمات التصميم المعماري والإنشائي، الإشراف على التنفيذ، الدراسات الهندسية المتكاملة، وإعداد المخططات التنفيذية وفق أعلى المعايير.",
      services: ["التصميم المعماري", "التصميم الإنشائي", "الإشراف على التنفيذ", "الدراسات الهندسية", "إعداد المخططات التنفيذية"],
      stats: ["+200 مشروع", "+30 مهندس", "15 سنة خبرة"],
      color: "from-emerald-600 to-emerald-800"
    },
    { 
      name: "شمول البيئية", 
      img: "//companies/ev07.jpg",
      description: "شركة متخصصة في تقديم الاستشارات والحلول البيئية المستدامة.",
      details: "تقدم شمول البيئية خدمات الدراسات البيئية، تقييم الأثر البيئي، إدارة النفايات، حلول الطاقة المتجددة، والاستشارات البيئية للمشاريع التنموية.",
      services: ["الدراسات البيئية", "تقييم الأثر البيئي", "إدارة النفايات", "حلول الطاقة المتجددة", "استشارات بيئية"],
      stats: ["+80 دراسة", "+40 مشروع", "شهادة ISO"],
      color: "from-green-600 to-green-800"
    },
    { 
      name: "شمول المالية", 
      img: "//companies/fi03.jpg",
      description: "شركة متخصصة في الاستشارات والحلول المالية للشركات والمؤسسات.",
      details: "تقدم شمول المالية خدمات الاستشارات المالية، إدارة الاستثمارات، التخطيط المالي، دراسة الجدوى الاقتصادية، وتحليل الأداء المالي للمؤسسات.",
      services: ["الاستشارات المالية", "إدارة الاستثمارات", "التخطيط المالي", "دراسة الجدوى الاقتصادية", "تحليل الأداء المالي"],
      stats: ["+500M مدار", "+60 عميل", "20 خبير"],
      color: "from-amber-600 to-amber-800"
    },
    { 
      name: "شمول الجيوهندسية", 
      img: "//companies/g001.jpg",
      description: "شركة متخصصة في الخدمات الجيوهندسية والمساحية باستخدام أحدث التقنيات.",
      details: "تقدم شمول الجيوهندسية خدمات المساحة الأرضية والجوية، الدراسات الجيوتقنية، رفع مساحي ثلاثي الأبعاد، وتجزئة ودمج الأراضي.",
      services: ["المساحة الأرضية", "المساحة الجوية", "الدراسات الجيوتقنية", "رفع مساحي ثلاثي الأبعاد", "تجزئة ودمج الأراضي"],
      stats: ["+1000 مشروع", "+50 ألف هكتار", "أحدث التقنيات"],
      color: "from-orange-600 to-orange-800"
    },
    { 
      name: "شمول التصميم", 
      img: "//companies/i008.jpg",
      description: "شركة متخصصة في التصميم الداخلي والخارجي والإبداعي.",
      details: "تقدم شمول التصميم خدمات التصميم الداخلي للمساحات السكنية والتجارية، التصميم الخارجي للمباني، تصميم الديكور، والتصاميم ثلاثية الأبعاد.",
      services: ["التصميم الداخلي", "التصميم الخارجي", "تصميم الديكور", "التصاميم ثلاثية الأبعاد", "تصميم واجهات المباني"],
      stats: ["+300 مشروع", "+20 مصمم", "جوائز تصميم"],
      color: "from-violet-600 to-violet-800"
    },
    { 
      name: "شمول الصناعية", 
      img: "//companies/ie06.jpg",
      description: "شركة متخصصة في الاستشارات والحلول الهندسية الصناعية.",
      details: "تقدم شمول الصناعية خدمات التصميم الهندسي للمصانع، الإشراف على التنفيذ الصناعي، دراسات الجدوى للمشاريع الصناعية، وتحسين العمليات الإنتاجية.",
      services: ["التصميم الهندسي للمصانع", "الإشراف على التنفيذ الصناعي", "دراسات الجدوى الصناعية", "تحسين العمليات الإنتاجية", "استشارات صناعية"],
      stats: ["+60 مصنع", "+25 عميل", "خبرة صناعية"],
      color: "from-sky-600 to-sky-800"
    },
    { 
      name: "شمول السلامة", 
      img: "//companies/s00-3.jpg",
      description: "شركة متخصصة في أنظمة السلامة والأمن الصناعي والحماية من المخاطر.",
      details: "تقدم شمول السلامة خدمات تصميم واعتماد أنظمة السلامة، إعداد خطط الطوارئ، تقييم المخاطر، إصدار رخصة الدفاع المدني، وتدريب فرق السلامة.",
      services: ["تصميم أنظمة السلامة", "خطط الطوارئ", "تقييم المخاطر", "رخصة الدفاع المدني", "تدريب فرق السلامة"],
      stats: ["+500 منشأة", "+1000 دورة", "معتمد رسميًا"],
      color: "from-red-600 to-red-800"
    },
    { 
      name: "شمول القانون", 
      img: "//companies/sd08.jpg",
      description: "شركة متخصصة في الاستشارات والخدمات القانونية.",
      details: "تقدم شمول القانون خدمات الاستشارات القانونية في الأنظمة التجارية والعقارية، صياغة العقود، التقاضي أمام الجهات القضائية، والتوثيق القانوني.",
      services: ["الاستشارات القانونية", "صياغة العقود", "التقاضي", "التوثيق القانوني", "الأنظمة التجارية والعقارية"],
      stats: ["+1000 قضية", "+200 عميل", "15 محامي"],
      color: "from-indigo-600 to-indigo-800"
    },
    { 
      name: "شمول التقنية", 
      img: "//companies/ss09.jpg",
      description: "شركة متخصصة في حلول التقنية والمعلومات والتحول الرقمي.",
      details: "تقدم شمول التقنية خدمات التحول الرقمي، تطوير الأنظمة والبرمجيات، حلول الذكاء الاصطناعي، أمن المعلومات، والاستشارات التقنية المتكاملة.",
      services: ["التحول الرقمي", "تطوير الأنظمة والبرمجيات", "حلول الذكاء الاصطناعي", "أمن المعلومات", "استشارات تقنية"],
      stats: ["+80 نظام", "+40 عميل", "تقنيات حديثة"],
      color: "from-cyan-600 to-cyan-800"
    },
    { 
      name: "شمول التآزر", 
      img: "//companies/x004.jpg",
      description: "شركة متخصصة في إدارة المشاريع وتحقيق التكامل بين القطاعات المختلفة.",
      details: "تقدم شمول التآزر خدمات إدارة المشاريع المتكاملة، التنسيق بين الجهات المختلفة، تحقيق التكامل التشغيلي، وإدارة البرامج والمبادرات الاستراتيجية.",
      services: ["إدارة المشاريع المتكاملة", "التنسيق بين الجهات", "التكامل التشغيلي", "إدارة البرامج", "المبادرات الاستراتيجية"],
      stats: ["+150 مشروع", "+50 شراكة", "خبرة تكاملية"],
      color: "from-teal-600 to-teal-800"
    },
  ];

  if (index < 0 || index >= companies.length) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">الشركة غير موجودة</h1>
          <Link to="/companys" className="text-[#c5a059] font-bold hover:underline">العودة إلى الشركات</Link>
        </div>
      </div>
    );
  }

  const company = companies[index];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="flex flex-col items-center justify-center">
            {/* Text Content */}
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                {company.name}
              </h1>
              <div className="w-24 h-1 bg-[#c5a059] rounded-full mb-6 mx-auto"></div>
              <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mx-auto">
                {company.description}
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* DETAILS & SERVICES SECTION */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - About */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                {/* About Header */}
                <div className="gold-accent-heading">
                  <div className="accent-bar"></div>
                  <div className="heading-text">
                    <h2>عن الشركة</h2>
                    <p className="heading-sub">نبذة تعريفية عن {company.name}</p>
                  </div>
                  <div className="heading-icon-box">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg bg-linear-to-r from-amber-50 to-transparent border-r-4 border-[#c5a059] pr-6 p-6 rounded-l-xl shadow-sm">
                  {company.details}
                </p>

                {/* Features / Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="bg-linear-to-br from-amber-50 to-white p-5 rounded-2xl border border-amber-100 text-center">
                    <div className="w-12 h-12 bg-[#c5a059]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">رؤية واضحة</h4>
                    <p className="text-gray-500 text-sm">نسعى للريادة في مجالنا</p>
                  </div>
                  <div className="bg-linear-to-br from-amber-50 to-white p-5 rounded-2xl border border-amber-100 text-center">
                    <div className="w-12 h-12 bg-[#c5a059]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">فريق محترف</h4>
                    <p className="text-gray-500 text-sm">كفاءات عالية وخبرات</p>
                  </div>
                  <div className="bg-linear-to-br from-amber-50 to-white p-5 rounded-2xl border border-amber-100 text-center">
                    <div className="w-12 h-12 bg-[#c5a059]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">حلول مبتكرة</h4>
                    <p className="text-gray-500 text-sm">نقدم أحدث الحلول</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Services */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 sticky top-24">
                <div className="gold-accent-heading">
                  <div className="accent-bar"></div>
                  <div className="heading-text">
                    <h2>خدماتنا</h2>
                    <p className="heading-sub">أبرز الخدمات التي نقدمها</p>
                  </div>
                  <div className="heading-icon-box">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-3">
                  {company.services.map((service, i) => (
                    <div 
                      key={i} 
                      className="group flex items-center gap-4 p-4 bg-linear-to-l from-amber-50 to-white rounded-xl border border-[#c5a059]/10 hover:border-[#c5a059]/30 hover:shadow-md hover:shadow-[#c5a059]/5 transition-all duration-300 cursor-default"
                    >
                      <div className="w-10 h-10 bg-linear-to-br from-[#c5a059] to-[#a8863d] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md shadow-[#c5a059]/20">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-700 font-medium group-hover:text-[#c5a059] transition-colors">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact CTA in Sidebar */}
                <div className="mt-8 p-5 bg-black rounded-2xl text-center">
                  <p className="text-white font-bold mb-2">هل تحتاج هذه الخدمة؟</p>
                  <p className="text-gray-400 text-sm mb-4">تواصل معنا للحصول على استشارة مجانية</p>
                  <Link 
                    to="/contact"
                    className="block w-full py-3 bg-[#c5a059] text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm"
                  >
                    طلب استشارة
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* BACK BUTTON */}
          <div className="mt-12 text-center">
            <Link 
              to="/companys" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-l from-[#c5a059] to-[#a8863d] text-white font-bold rounded-2xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              العودة إلى قائمة الشركات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyDetail;