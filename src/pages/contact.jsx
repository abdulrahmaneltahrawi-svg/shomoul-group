import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `🔹 *طلب استشارة جديدة* 🔹\n\n👤 *الاسم:* ${formData.name}\n📞 *رقم الجوال:* ${formData.phone}\n✉️ *البريد:* ${formData.email}\n📋 *الخدمة المطلوبة:* ${formData.service}\n💬 *الرسالة:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/966505888280?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const branches = [
    {
      name: "فرع الإحساء",
      map: "https://www.google.com/maps/place/%D8%B4%D9%8F%D9%85%D9%88%D9%84+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+-+%D8%A7%D9%84%D8%A7%D8%AD%D8%B3%D8%A7%D8%A1%E2%80%AD/@25.4021496,49.5793926,17z/data=!3m1!4b1!4m6!3m5!1s0x3e3797ec50c3d701:0x9d589024ce82ad94!8m2!3d25.4021496!4d49.5793926!16s%2Fg%2F11lfcq_nrc!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D",
      address: "حي البستان أمام مركز العثيم التجاري، الأحساء",
      phones: ["920031520", "+966540746462", "+966505825060"],
    },
    {
      name: "فرع الخبر",
      map: "https://maps.app.goo.gl/7Msa2MHCtCQi7qwLA",
      address: "8896 شارع الأمير مشاري بن سعود، حي الأندلس",
      phones: ["920031520", "+966540746462", "+966505825060"],
    },
    {
      name: "فرع جدة",
      map: "https://maps.app.goo.gl/ENsMrUZvqLURhiUh7",
      address: "المكتب رقم 58، مركز القماح للأعمال، شارع البلدية",
      phones: ["920031520", "+966540746462", "+966505825060"],
    },
    {
      name: "فرع الدمام",
      map: "https://www.google.com/maps?q=26.3979786,50.0454491&entry=gps&lucs=,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjIwLjAuNzU3ODEwNjA5MBgAIJ6dCipaLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJTQQ%3D%3D&skid=c2dbb14a-ba74-41fc-8b10-fca11b3a8b51",
      address: "مجمع الفرقان، طريق الملك فهد، الفيصلية، الدمام 32272",
      phones: ["920031520", "+966540746462", "+966505825060"],
    },
    {
      name: "فرع الرياض",
      map: "https://www.google.com/maps/place/%D8%B4%D9%85%D9%88%D9%84+%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9,+3046+%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D9%85+%D9%81%D9%8A%D8%B5%D9%84+%D8%A8%D9%86+%D8%AA%D8%B1%D9%83%D9%8A+%D8%A8%D9%86+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%D8%8C+%D8%A7%D9%84%D9%81%D9%88%D8%B7%D8%A9%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+12632%E2%80%AD/data=!4m2!3m1!1s0x6ae14c174998097b:0xb0eda37c3cdebc61!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjE4LjEYACCIJyqKASw5NDI2NzcyNyw5NDI5MjE5NSw5NDI5OTUzMiwxMDA3OTY0OTgsMTAwNzk3NzYxLDEwMDc5NjUzNSw5NDI4NDQ4Nyw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOUICU0E%3D&skid=fb697acc-3ae1-4571-9907-247c5b7a1173",
      address: "حي الملك فيصل، شارع الشيخ حسن بن حسين",
      phones: ["920031520", "+966540746462", "+966505825060"],
    },
    {
      name: "فرع مكة",
      map: "https://www.google.com/maps/place/21%C2%B023'19.3%22N+39%C2%B052'25.0%22E/@21.3885222,39.8706682,967m/data=!3m1!1e3!4m4!3m3!8m2!3d21.3886871!4d39.8736!5m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",
      address: "شارع الطايف",
      phones: ["920031520", "+966540746462", "+966505825060"],
    },
    {
      name: "فرع الجبيل",
      map: "https://www.google.com/maps/place/Shomoul+engineering+consultant+%D8%B4%D9%85%D9%88%D9%84+%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+%D9%88+%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%E2%80%AD/@27.0041302,49.6568074,739m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e35a16618907543:0x5a701a93dee15314!8m2!3d27.0041302!4d49.6568074!16s%2Fg%2F11lccnhl3c!5m2!1e2!1e4?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",
      address: "مول، شارع المدينة المنورة، بالقرب من الجبيل",
      phones: ["920031520", "+966540746462", "+966505825060"],
    },
  ];

  const services = [
    "الاستشارات الهندسية",
    "المساحة وفرز الأراضي",
    "السلامة والرخص",
    "التصميم المعماري",
    "التصميم الداخلي",
    "الاستشارات القانونية",
    "الاستشارات المالية",
    "أخرى"
  ];

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="hero-title">تواصل معنا</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            نحن هنا لمساعدتك - تواصل معنا وسنرد عليك في أقرب وقت
          </p>
        </div>
      </div>

      {/* Contact Form + Info */}
      <section className="py-16 bg-gray-50" dir="rtl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                <div className="gold-accent-heading">
                  <div className="accent-bar"></div>
                  <div className="heading-text">
                    <h2>أرسل لنا رسالة</h2>
                    <p className="heading-sub">املأ النموذج وسيتم إرسال طلبك مباشرة عبر الواتساب</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">الاسم كامل</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="أدخل اسمك الكامل"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c5a059] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 transition-all bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">رقم الجوال</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="05XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c5a059] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 transition-all bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c5a059] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 transition-all bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">الخدمة المطلوبة</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c5a059] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 transition-all bg-gray-50"
                      >
                        <option value="">اختر الخدمة</option>
                        {services.map((s, i) => (
                          <option key={i} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">الرسالة</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c5a059] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 transition-all bg-gray-50 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#c5a059] text-white font-bold text-lg rounded-xl hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    إرسال عبر الواتساب
                  </button>
                </form>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c5a059]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">اتصل بنا</h3>
                <a href="tel:920031520" className="text-[#c5a059] text-lg font-bold hover:text-[#92743c] transition-colors">920031520</a>
                <p className="text-gray-500 text-sm mt-1">متاح يومياً من 8 صباحاً إلى 8 مساءً</p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c5a059]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">راسلنا</h3>
                <a href="mailto:info@shomoul.com" className="text-[#c5a059] text-lg font-bold hover:text-[#92743c] transition-colors">info@shomoulgroup.com</a>
                <p className="text-gray-500 text-sm mt-1">نرد على استفساراتكم خلال 24 ساعة</p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c5a059]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">الموقع</h3>
                <a href="https://www.google.com/maps?ll=26.32863,50.17987&z=16&t=m&hl=en&gl=SA&mapclient=embed&cid=11981446224562419378" className="text-[#c5a059] text-lg font-bold hover:text-[#92743c] transition-colors">الخبر، المملكة العربية السعودية</a>

                <p className="text-gray-500 text-sm mt-1">حي الاندلس، شارع الأمير مشاري بن سعود بن عبد العزيز</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 bg-white" dir="rtl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="page-title-wrapper">
            <div className="gold-badge" style={{margin: "0 auto 1rem"}}>فروعنا</div>
            <h2 className="page-title">جميع فروعنا</h2>
            <div className="title-decoration">
              <span className="line"></span>
              <span className="diamond"></span>
              <span className="line"></span>
            </div>
            <p className="title-sub">موزعة في أنحاء المملكة لتكون بالقرب منك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="group bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#c5a059] transition-colors">{branch.name}</h3>
                  <div className="w-12 h-12 bg-[#c5a059]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-4">
                  <svg className="w-6 h-6 text-gray-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <p className="text-gray-600">{branch.address}</p>
                </div>

                <div className="flex flex-col sm:flex-row-reverse sm:items-center justify-between gap-4 mt-6">
                  <div dir="ltr" className="text-left">
                    {branch.phones.map((phone, i) => (
                      <a key={i} href={`tel:${phone}`} className="block text-gray-600 hover:text-[#c5a059] transition-colors">{phone}</a>
                    ))}
                  </div>

                  <a href={branch.map} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#c5a059] font-semibold hover:text-[#92743c] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    عرض على الخريطة
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 text-center" dir="rtl">
        <div className="max-w-4xl mx-auto px-6">
          <div className="page-title-wrapper">
            <div className="gold-badge" style={{margin: "0 auto 1rem"}}>موقعنا</div>
            <h2 className="page-title">جِدنا على الخريطة</h2>
            <div className="title-decoration">
              <span className="line"></span>
              <span className="diamond"></span>
              <span className="line"></span>
            </div>
            <p className="title-sub">يمكنك استخدام الخريطة للوصول إلى أقرب فروعنا</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.934214913363!2d50.1798697!3d26.3286296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e767c98cb2a5%3A0xa646a5dc5e7cf6b2!2z2YXYrNmF2YjYudipINi02YXZiNmEINmE2YTYp9iz2KrYtNin2LHYp9iqIC0gU2hvbW91bCBDb25zdWx0aW5nIEdyb3VwIC0gU0NHICjYp9mE2LTZh9ix2Yog2LPYp9io2YLYp9mLKQ!5e0!3m2!1sen!2ssa!4v1783340006099!5m2!1sen!2ssa" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy" 
              title="موقع شمول"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact