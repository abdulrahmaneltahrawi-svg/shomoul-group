import { useParams, Link } from 'react-router-dom';

function CompanyDetail() {
  const { id } = useParams();
  const index = parseInt(id);

  const companies = [
    { 
      name: "شمول الاعمال", 
      img: "/public/companies/b007.jpg",
      description: "شركة متخصصة في إدارة الأعمال وتقديم الحلول الإدارية المتكاملة للشركات والمؤسسات.",
      details: "تقدم شمول الأعمال حلولاً إدارية متكاملة تشمل التخطيط الاستراتيجي، إدارة الموارد البشرية، تحسين العمليات الإدارية، وتطوير الهياكل التنظيمية للمؤسسات.",
      services: ["التخطيط الاستراتيجي", "إدارة الموارد البشرية", "تطوير الهياكل التنظيمية", "تحسين العمليات الإدارية", "استشارات إدارية متكاملة"]
    },
    { 
      name: "شمول الهندسية", 
      img: "/public/companies/e007.jpg",
      description: "شركة رائدة في مجال الاستشارات والتصميم الهندسي للمشاريع السكنية والتجارية والصناعية.",
      details: "تقدم شمول الهندسية خدمات التصميم المعماري والإنشائي، الإشراف على التنفيذ، الدراسات الهندسية المتكاملة، وإعداد المخططات التنفيذية وفق أعلى المعايير.",
      services: ["التصميم المعماري", "التصميم الإنشائي", "الإشراف على التنفيذ", "الدراسات الهندسية", "إعداد المخططات التنفيذية"]
    },
    { 
      name: "شمول البيئية", 
      img: "/public/companies/ev07.jpg",
      description: "شركة متخصصة في تقديم الاستشارات والحلول البيئية المستدامة.",
      details: "تقدم شمول البيئية خدمات الدراسات البيئية، تقييم الأثر البيئي، إدارة النفايات، حلول الطاقة المتجددة، والاستشارات البيئية للمشاريع التنموية.",
      services: ["الدراسات البيئية", "تقييم الأثر البيئي", "إدارة النفايات", "حلول الطاقة المتجددة", "استشارات بيئية"]
    },
    { 
      name: "شمول المالية", 
      img: "/public/companies/fi03.jpg",
      description: "شركة متخصصة في الاستشارات والحلول المالية للشركات والمؤسسات.",
      details: "تقدم شمول المالية خدمات الاستشارات المالية، إدارة الاستثمارات، التخطيط المالي، دراسة الجدوى الاقتصادية، وتحليل الأداء المالي للمؤسسات.",
      services: ["الاستشارات المالية", "إدارة الاستثمارات", "التخطيط المالي", "دراسة الجدوى الاقتصادية", "تحليل الأداء المالي"]
    },
    { 
      name: "شمول الجيوهندسية", 
      img: "/public/companies/g001.jpg",
      description: "شركة متخصصة في الخدمات الجيوهندسية والمساحية باستخدام أحدث التقنيات.",
      details: "تقدم شمول الجيوهندسية خدمات المساحة الأرضية والجوية، الدراسات الجيوتقنية، رفع مساحي ثلاثي الأبعاد، وتجزئة ودمج الأراضي.",
      services: ["المساحة الأرضية", "المساحة الجوية", "الدراسات الجيوتقنية", "رفع مساحي ثلاثي الأبعاد", "تجزئة ودمج الأراضي"]
    },
    { 
      name: "شمول التصميم", 
      img: "/public/companies/i008.jpg",
      description: "شركة متخصصة في التصميم الداخلي والخارجي والإبداعي.",
      details: "تقدم شمول التصميم خدمات التصميم الداخلي للمساحات السكنية والتجارية، التصميم الخارجي للمباني، تصميم الديكور، والتصاميم ثلاثية الأبعاد.",
      services: ["التصميم الداخلي", "التصميم الخارجي", "تصميم الديكور", "التصاميم ثلاثية الأبعاد", "تصميم واجهات المباني"]
    },
    { 
      name: "شمول الصناعية", 
      img: "/public/companies/ie06.jpg",
      description: "شركة متخصصة في الاستشارات والحلول الهندسية الصناعية.",
      details: "تقدم شمول الصناعية خدمات التصميم الهندسي للمصانع، الإشراف على التنفيذ الصناعي، دراسات الجدوى للمشاريع الصناعية، وتحسين العمليات الإنتاجية.",
      services: ["التصميم الهندسي للمصانع", "الإشراف على التنفيذ الصناعي", "دراسات الجدوى الصناعية", "تحسين العمليات الإنتاجية", "استشارات صناعية"]
    },
    { 
      name: "شمول السلامة", 
      img: "/public/companies/s00-3.jpg",
      description: "شركة متخصصة في أنظمة السلامة والأمن الصناعي والحماية من المخاطر.",
      details: "تقدم شمول السلامة خدمات تصميم واعتماد أنظمة السلامة، إعداد خطط الطوارئ، تقييم المخاطر، إصدار رخصة الدفاع المدني، وتدريب فرق السلامة.",
      services: ["تصميم أنظمة السلامة", "خطط الطوارئ", "تقييم المخاطر", "رخصة الدفاع المدني", "تدريب فرق السلامة"]
    },
    { 
      name: "شمول القانون", 
      img: "/public/companies/sd08.jpg",
      description: "شركة متخصصة في الاستشارات والخدمات القانونية.",
      details: "تقدم شمول القانون خدمات الاستشارات القانونية في الأنظمة التجارية والعقارية، صياغة العقود، التقاضي أمام الجهات القضائية، والتوثيق القانوني.",
      services: ["الاستشارات القانونية", "صياغة العقود", "التقاضي", "التوثيق القانوني", "الأنظمة التجارية والعقارية"]
    },
    { 
      name: "شمول التقنية", 
      img: "/public/companies/ss09.jpg",
      description: "شركة متخصصة في حلول التقنية والمعلومات والتحول الرقمي.",
      details: "تقدم شمول التقنية خدمات التحول الرقمي، تطوير الأنظمة والبرمجيات، حلول الذكاء الاصطناعي، أمن المعلومات، والاستشارات التقنية المتكاملة.",
      services: ["التحول الرقمي", "تطوير الأنظمة والبرمجيات", "حلول الذكاء الاصطناعي", "أمن المعلومات", "استشارات تقنية"]
    },
    { 
      name: "شمول التآزر", 
      img: "/public/companies/x004.jpg",
      description: "شركة متخصصة في إدارة المشاريع وتحقيق التكامل بين القطاعات المختلفة.",
      details: "تقدم شمول التآزر خدمات إدارة المشاريع المتكاملة، التنسيق بين الجهات المختلفة، تحقيق التكامل التشغيلي، وإدارة البرامج والمبادرات الاستراتيجية.",
      services: ["إدارة المشاريع المتكاملة", "التنسيق بين الجهات", "التكامل التشغيلي", "إدارة البرامج", "المبادرات الاستراتيجية"]
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
      {/* Hero Banner */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-92 bg-[#c5a059] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c5a059] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-98 w-32 backdrop-blur-sm p-6 ">
              <img 
                src={company.img} 
                alt={company.name}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-right">
              <div className="inline-block px-4 py-1 bg-[#c5a059]/20 text-[#c5a059] rounded-full text-sm font-bold mb-4 border border-[#c5a059]/30">شركة مجموعة شمول</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{company.name}</h1>
              <p className="text-gray-300 text-lg leading-relaxed">{company.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#c5a059]/20 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">عن الشركة</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-10 border-r-4 border-[#c5a059] pr-6 bg-[#c5a059]/5 p-6 rounded-l-xl">{company.details}</p>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#c5a059]/20 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">خدماتنا</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {company.services.map((service, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-[#c5a059]/5 rounded-xl border border-[#c5a059]/20 hover:shadow-md hover:border-[#c5a059]/40 transition-all group">
                  <div className="w-10 h-10 bg-[#c5a059] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-[#c5a059] transition-colors">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/companys" className="inline-flex items-center gap-3 px-8 py-4 bg-[#c5a059] text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              العودة إلى الشركات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyDetail;