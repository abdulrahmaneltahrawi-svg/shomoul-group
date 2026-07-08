import { useState } from 'react';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { img: "public/p/ChatGPT Image Jul 2, 2026, 08_23_15 AM.png", description: "تصميم وإشراف على مجمع سكني متكامل بمساحة 50,000 م² في المنطقة الشرقية.", caption: "برج بتصميم أسطواني عصري بواجهة زجاجية ذات نقوش متموجة", category: "tower" },
    { img: "public/p/ChatGPT Image Jul 2, 2026, 08_21_14 AM.png", description: "تصميم وتنفيذ مبنى إداري مكون من 8 طوابق في الخبر.", caption: "برج شاهق بتصميم هندسي حديث وواجهة زجاجية عاكسة", category: "tower" },
    { img: "public/p/ChatGPT Image 2 يوليو 2026، 08_36_46 ص.png", description: "تصميم جسر بطول 500 متر يربط بين طريقين رئيسيين.", caption: "محطة وقود بتصميم حديث يعتمد على اللونين الأحمر والأبيض", category: "NAFT" },
    { img: "public/p/ChatGPT Image 2 يوليو 2026، 08_40_00 ص.png", description: "تصميم واعتماد خطط السلامة والطوارئ لمنشأة صحية.", caption: "محطة وقود تتميز بتصميم يعتمد بشكل أساسي على اللون الأخضر", category: "NAFT" },
    { img: "public/p/ChatGPT Image 2 يوليو 2026، 08_32_35 ص.png", description: "تصميم وتنفيذ مول تجاري بمساحة 30,000 م².", caption: "مبنى يتميز بتصميم يجمع بين الواجهة الزجاجية والخرسانية", category: "company" },
    { img: "public/p/ChatGPT Image Jul 2, 2026, 08_26_11 AM.png", description: "استشارات هندسية لمصنع بتروكيماويات في المنطقة الصناعية.", caption: "مبنى إداري حديث يتكون من برجين زجاجيين متصلين بجسر علوي", category: "company" },
    { img: "public/p/ChatGPT Image 2 يوليو 2026، 09_11_17 ص.png", description: "تصميم وتجهيز مركز طبي متخصص وفق أعلى معايير السلامة.", caption: "برج المانع الطبي - صرح طبي بتصميم هندسي حديث", category: "medical" },
    { img: "public/p/ChatGPT Image 2 يوليو 2026، 08_46_34 ص.png", description: "إشراف هندسي على توسعة مبنى طبي وتجهيزاته الفنية.", caption: "الواجهة الأمامية لمستشفى الأحساء", category: "medical" },
    { img: "public/p/ChatGPT Image 2 يوليو 2026، 08_49_51 ص.png", description: "تصميم وتنفيذ مستودعات لوجستية بمواصفات تخزين عالية.", caption: "محطة خلط خرسانة صناعية مع صوامع تخزين بيضاء", category: "repository" },
    { img: "public/p/ChatGPT Image 2 يوليو 2026، 08_51_05 ص.png", description: "إدارة وتنفيذ مشروع مستودع صناعي متعدد الاستخدامات.", caption: "منشأة صناعية ضخمة", category: "repository" },
    { img: "public/p/WhatsApp Image 2026-07-02 at 8.48.10 AM (1).jpeg", description: "تصميم وتنفيذ منشأة تجارية بحلول هندسية متكاملة.", caption: "منشأة تجارية حديثة", category: "industrial" },
    { img: "public/p/WhatsApp Image 2026-07-02 at 8.48.10 AM.jpeg", description: "إشراف هندسي كامل على مشروع منشأة تجارية.", caption: "إشراف هندسي كامل على مشروع منشأة تجارية", category: "industrial" },
    { img: "public/p/WhatsApp Image 2026-07-02 at 8.48.10 AM (2).jpeg", description: "تصميم وتنفيذ وحدات سكنية بمعايير جودة عالية.", caption: "وحدات سكنية عصرية", category: "residential" },
    { img: "public/p/WhatsApp Image 2026-07-02 at 8.48.11 AM.jpeg", description: "إدارة وتنفيذ مشروع سكني متكامل الخدمات.", caption: "مشروع سكني متكامل", category: "residential" },
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  const filters = [
    { key: 'all', label: 'الكل' },
    { key: 'tower', label: 'أبراج' },
    { key: 'company', label: 'إداري' },
    { key: 'industrial', label: 'تجاري' },
    { key: 'residential', label: 'سكني' },
    { key: 'medical', label: 'طبية' },
    { key: 'NAFT', label: 'محطات الوقود' },
    { key: 'repository', label: 'مستودعات' },
  ];

  return (
    <>
      <main className="py-12" dir="rtl">
        <div className="max-w-6xl mx-auto px-3">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">المشاريع</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نفتخر بتقديم مجموعة من أبرز المشاريع الهندسية التي قمنا بتنفيذها والإشراف عليها
            </p>
            <div className="w-184 h-1 bg-[#c5a059] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 font-bold rounded-lg transition-colors cursor-pointer ${
                  activeFilter === f.key
                    ? 'bg-[#c5a059] text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-[#c5a059] hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <img
                  src={project.img}
                  alt={project.caption}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-gray-500 text-sm">{project.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-[#c5a059] transition-colors cursor-pointer z-10"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <div className="md:w-1/2">
              <img
                src={selectedImage.img}
                alt={selectedImage.caption}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 text-white text-right">
              <p className="text-gray-300 text-lg leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;