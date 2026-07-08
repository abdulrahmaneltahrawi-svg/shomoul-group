function Services() {
  const servicesData = [
    {
      id: 1,
      title: "قسم فرز الوحدات العقارية",
      description: "فرز الوحدات العقارية للأغراض السكنية والتجارية.",
      items: [
        "فرز الوحدات العقارية",
        "مخططات الفرز وأهميتها في تنظيم العقارات",
        "شهادة الفرز",
        "خدمات الفرز العقاري",
        "إعداد مخططات فرز الوحدات السكنية والتجارية",
        "تقديم طلبات الفرز للجهات المختصة",
        "إصدار شهادات الفرز النهائية",
        "تقديم استشارات حول عملية الفرز العقاري",
      ],
      icon: "/icons/layout.png",
    },
    {
      id: 2,
      title: "قسم الإشراف الهندسي",
      description: "إشراف هندسي دقيق لتحقيق أعلى مستويات الجودة والتنظيم والتنفيذ.",
      items: [
        "إشراف هندسي دقيق لتحقيق أعلى مستويات الجودة",
        "متابعة تنفيذ المشاريع وفق المواصفات المعتمدة",
        "ضمان الالتزام بالجدول الزمني والتكاليف المحددة",
        "إعداد تقارير فنية دورية لمراحل التنفيذ",
        "إدارة المخاطر وحل المشكلات الفنية في الموقع",
        "التنسيق مع الجهات الرسمية أثناء التنفيذ",
        "فحوصات ضمان الجودة",
      ],
      icon: "/icons/inspection.png",
    },
    {
      id: 3,
      title: "التصميم الداخلي والخارجي",
      description: "خدمات تصميم داخلي وخارجي إبداعية وعملية.",
      items: [
        "تصميم داخلي",
        "خدمة تصميم خارجي",
        "تصميم ديكور",
        "تصميم واجهات",
        "تصميم داخلي للمساحات السكنية والتجارية",
        "تصميم واجهات خارجية للمباني",
        "إعداد مخططات تنفيذية للديكور",
        "تقديم تصاميم ثلاثية الأبعاد (3D)",
      ],
      icon: "/icons/prototype.png",
    },
    {
      id: 4,
      title: "التصميم المعماري",
      description: "خدمات تصميم معماري شاملة تتوافق مع الأنظمة واحتياجات العملاء.",
      items: [
        "تقرير فني معماري",
        "إعداد مخططات معمارية وفق كود البناء السعودي",
        "تصميم معماري للمباني السكنية والتجارية",
        "تصميم واجهات المباني الخارجية",
        "إعداد وتخطيط الموقع العام",
        "تعديل وتطوير المخططات المعمارية",
        "إعداد تقرير فني معماري معتمد",
        "مراجعة وتدقيق المخططات للاعتماد الإلكتروني",
      ],
      icon: "/icons/servies.png",
    },
    {
      id: 5,
      title: "قسم السلامة",
      description: "تصميم واعتماد أنظمة وتقارير السلامة للمنشآت والمباني.",
      items: [
        "تصميم واعتماد مخططات أنظمة السلامة",
        "رخصة الدفاع المدني",
        "إعداد تقارير السلامة الفنية في المنشآت",
        "تقارير حصر كميات للمنشآت",
        "مخططات السلامة",
        "أنظمة الإطفاء والإنذار",
        "إصدار شهادة السلامة للمباني",
        "تقرير ملاءمة الأنظمة",
      ],
      icon: "/icons/fire-extinguisher.png",
    },
    {
      id: 6,
      title: "الرخص",
      description: "خدمات إصدار وتحديث الرخص التجارية والإنشائية.",
      items: [
        "إصدار وتحديث الرخص التجارية",
        "اصدار ترخيص السكن الجماعي",
        "إصدار رخصة بناء جديد",
        "إصدار رخصة تعديل أو ترميم مبنى قائم",
        "إصدار رخصة تسوية أرض",
        "إصدار شهادة إشغال",
        "شهادة إتمام البناء",
        "رخصة أشغال رصيف",
      ],
      icon: "/icons/checklist.png",
    },
    {
      id: 7,
      title: "المساحة والرفع المساحي",
      description: "حلول رفع مساحي دقيقة وشاملة.",
      items: [
        "رفع مساحي",
        "تجزئة ودمج لقطعة أرض",
        "خدمات الفرز",
        "تعديل وتحديث الصكوك العقارية",
        "إصدار إقرار مساحي",
        "خدمة إصدار تقرير مساحي",
        "إجراء الرفع المساحي للأراضي والمباني",
      ],
      icon: "/icons/management.png",
    },
    {
      id: 8,
      title: "هندسة مدنية",
      description: "خدمات هندسة مدنية موثوقة من التصميم إلى الإشراف.",
      items: [
        "تقرير فني",
        "تصميم إنشائي",
        "خدمة إشراف على التنفيذ",
      ],
      icon: "/icons/tool-outline.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا الهندسية</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الهندسية والاستشارية بأعلى معايير الجودة والاحترافية
          </p>
          <div className="w-64 md:w-204 h-1 bg-[#c5a059] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-amber-200 group"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
              </div>

              <p className="text-gray-700 font-semibold mb-4 text-sm">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 text-gray-500 text-sm grow">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#c5a059] rounded-full mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="block w-full text-center px-5 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-[#c5a059] transition-all duration-300">
                اطلب الخدمة
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;