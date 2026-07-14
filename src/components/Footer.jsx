import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-16 relative overflow-hidden" dir="rtl">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="group">
            <Link to="/">
              <img src="/imges/footer-logo.png" alt="logo" className="w-38 h-auto mb-4 group-hover:scale-105 transition-transform duration-300" />
            </Link>
            <p className="text-gray-400 leading-relaxed mt-4 group-hover:text-gray-300 transition-colors duration-300">
              شركة رائدة في تقديم الحلول الهندسية والاستشارات المهنية
            </p>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h5 className="text-lg font-bold mb-4 text-white relative inline-block">
              روابط سريعة
              <span className="block h-0.5 bg-[#c5a059] w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
            </h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#c5a059] transition-all duration-300 inline-block hover:translate-x-2">من نحن</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#c5a059] transition-all duration-300 inline-block hover:translate-x-2">الخدمات</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-[#c5a059] transition-all duration-300 inline-block hover:translate-x-2">المشاريع</Link>
              </li>
              <li>
                <Link to="/companys" className="text-gray-400 hover:text-[#c5a059] transition-all duration-300 inline-block hover:translate-x-2">شركات</Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-400 hover:text-[#c5a059] transition-all duration-300 inline-block hover:translate-x-2">العملاء</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#c5a059] transition-all duration-300 inline-block hover:translate-x-2">اتصل بنا</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="group">
            <h5 className="text-lg font-bold mb-4 text-white relative inline-block">
              تواصل معنا
              <span className="block h-0.5 bg-[#c5a059] w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
            </h5>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3 hover:text-[#c5a059] transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#c5a059] /20 flex items-center justify-center group-hover:bg-[#947843] /40 transition-colors">
                  <img src="/icons/phone-call.png" alt="واتساب" className="w-7 h-7" />
                </div>
                <a href="https://api.whatsapp.com/send/?phone=966920031520" target="_blank" rel="noopener noreferrer">920031520</a>
              </li>
              <li className="flex items-center gap-3 hover:text-[#c5a059] transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#c5a059] /20 flex items-center justify-center group-hover:bg-[#947843] /40 transition-colors">
                  <img src="/icons/email (1).png" alt="بريد" className="w-7 h-7" />
                </div>
                <a href="mailto:info@shomoul.group" target="_blank" rel="noopener noreferrer">info@shomoul.group@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 hover:text-[#c5a059] transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#c5a059] /20 flex items-center justify-center group-hover:bg-[#947843] /40 transition-colors">
                  <img src="/icons/gps.png" alt="موقع" className="w-7 h-7" />
                </div>
                <a href="https://maps.app.goo.gl/RMk6UUgm8LJPQjT68"><span>الخبر، المملكة العربية السعودية</span></a>
                
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700/50 my-8" />

        <div className="text-center text-gray-500 hover:text-gray-400 transition-colors duration-300">
          <p>© 2026 Shomoul. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;