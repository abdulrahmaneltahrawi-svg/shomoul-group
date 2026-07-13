import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black sticky top-0 z-60" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {/* Logo - Right side */}
          <Link className="text-[#c5a059] font-bold text-xl" to="">
            <img src="/imges/Shomoul.png" alt="logo" className="w-36 md:w-58 h-auto" />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Nav Links - Center */}
          <div className="hidden md:flex items-center gap-0">
            <Link to="/" className={`${isActive('/') ? 'text-[#c5a059] border-b-2 border-[#c5a059]' : 'text-white hover:text-[#c5a059]'} px-2 py-3 rounded-lg transition-colors font-bold`}>
              الرئيسية
            </Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-[#c5a059] border-b-2 border-[#c5a059]' : 'text-white hover:text-[#c5a059]'} px-3 py-2 rounded-lg transition-colors font-bold`}>
              من نحن
            </Link>
            <Link to="/services" className={`${isActive('/services') ? 'text-[#c5a059] border-b-2 border-[#c5a059]' : 'text-white hover:text-[#c5a059]'} px-3 py-2 rounded-lg transition-colors font-bold`}>
              الخدمات
            </Link>
            <Link to="/projects" className={`${isActive('/projects') ? 'text-[#c5a059] border-b-2 border-[#c5a059]' : 'text-white hover:text-[#c5a059]'} px-3 py-2 rounded-lg transition-colors font-bold`}>
              المشاريع
            </Link>
            <Link to="/companys" className={`${isActive('/companys') ? 'text-[#c5a059] border-b-2 border-[#c5a059]' : 'text-white hover:text-[#c5a059]'} px-3 py-2 rounded-lg transition-colors font-bold`}>
              الشركات
            </Link>
            <Link to="/clients" className={`${isActive('/clients') ? 'text-[#c5a059] border-b-2 border-[#c5a059]' : 'text-white hover:text-[#c5a059]'} px-3 py-2 rounded-lg transition-colors font-bold`}>
              العملاء
            </Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-[#c5a059] border-b-2 border-[#c5a059]' : 'text-white hover:text-[#c5a059]'} px-3 py-2 rounded-lg transition-colors font-bold`}>
              التواصل
            </Link>
          </div>

          {/* Left side - Search + Social Media Icons + Register Button */}
          <div className="flex items-center gap-3">


            {/* Social Media Icons - ضع صورك في src */}
            <div className="hidden md:flex items-center gap-2">
              <a href="https://api.whatsapp.com/send/?phone=966920031520" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors p-1.5 rounded">
                <img src="public/social media/002-whatsapp.png" alt="واتساب" className="w-full h-full object-contain invert" />
              </a>
              <a href="https://www.instagram.com/shomoul.group" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors p-1.5 rounded">
                <img src="public/social media/003-instagram.png" alt="انستقرام" className="w-full h-full object-contain invert" />
              </a>
              <a href="https://www.facebook.com/ShomoulGroup/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors p-1.5 rounded">
                <img src="public/social media/001-facebook.png" alt="فيسبوك" className="w-full h-full object-contain invert" />
              </a>
              <a href="https://www.linkedin.com/company/shomoulgroup" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors p-1.5 rounded">
                <img src="public/social media/004-linkedin.png" alt="لينكد إن" className="w-full h-full object-contain invert" />
              </a>
            </div>

            {/* Register Button */}
            <Link to="https://vportal.shomoulgroup.com/" className="px-4 py-2 bg-white/20 text-white font-semibold hover:bg-white/80 transition-colors">
              سجل كمورد
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className={`block ${isActive('/') ? 'text-[#c5a059]' : 'text-white hover:text-[#c5a059]'} py-2 transition-colors`} onClick={() => setIsOpen(false)}>
              الرئيسية
            </Link>
            <Link to="/about" className={`block ${isActive('/about') ? 'text-[#c5a059]' : 'text-white hover:text-[#c5a059]'} py-2 transition-colors`} onClick={() => setIsOpen(false)}>
              من نحن
            </Link>
            <Link to="/services" className={`block ${isActive('/services') ? 'text-[#c5a059]' : 'text-white hover:text-[#c5a059]'} py-2 transition-colors`} onClick={() => setIsOpen(false)}>
              الخدمات
            </Link>
            <Link to="/projects" className={`block ${isActive('/projects') ? 'text-[#c5a059]' : 'text-white hover:text-[#c5a059]'} py-2 transition-colors`} onClick={() => setIsOpen(false)}>
              المشاريع
            </Link>
            <Link to="/companys" className={`block ${isActive('/companys') ? 'text-[#c5a059]' : 'text-white hover:text-[#c5a059]'} py-2 transition-colors`} onClick={() => setIsOpen(false)}>
              الشركات
            </Link>
            <Link to="/clients" className={`block ${isActive('/clients') ? 'text-[#c5a059]' : 'text-white hover:text-[#c5a059]'} py-2 transition-colors`} onClick={() => setIsOpen(false)}>
              العملاء
            </Link>
            <Link to="/contact" className={`block ${isActive('/contact') ? 'text-[#c5a059]' : 'text-white hover:text-[#c5a059]'} py-2 transition-colors`} onClick={() => setIsOpen(false)}>
              التواصل
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;