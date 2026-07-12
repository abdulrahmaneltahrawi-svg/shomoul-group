import React from 'react'

function WhatsAppButton() {
  const phoneNumber = "966920031520" // رقم واتساب الخاص بكم
  const message = "مرحباً، أود الاستفسار عن خدماتكم"

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-1000 w-15 h-15 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 cursor-pointer no-underline animate-bounce md:animate-whatsappFly hover:bg-linear-to-br hover:from-[#D4AF37] hover:to-[#F5D76E] hover:border-transparent hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
      title="تواصل معنا عبر واتساب"
    >
      <img
        src="/icons/green_whatsapp.png"
        alt="واتساب"
        className="w-8 h-8"
      />
    </a>
  )
}

export default WhatsAppButton