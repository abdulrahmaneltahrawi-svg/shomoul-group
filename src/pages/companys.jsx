import { Link } from 'react-router-dom';

function Companys() {
  const companies = [
    { id: 0, name: "شمول الاعمال", icon: "src/assets/companies/b007.jpg" },
    { id: 1, name: "شمول الهندسية", icon: "src/assets/companies/e007.jpg" },
    { id: 2, name: "شمول البيئية", icon: "src/assets/companies/ev07.jpg" },
    { id: 3, name: "شمول المالية", icon: "src/assets/companies/fi03.jpg" },
    { id: 4, name: "شمول الجيوهندسية", icon: "src/assets/companies/g001.jpg" },
    { id: 5, name: "شمول التصميم", icon: "src/assets/companies/i008.jpg" },
    { id: 6, name: "شمول الصناعية", icon: "src/assets/companies/ie06.jpg" },
    { id: 7, name: "شمول السلامة", icon: "src/assets/companies/s00-3.jpg" },
    { id: 8, name: "شمول القانون", icon: "src/assets/companies/sd08.jpg" },
    { id: 9, name: "شمول التقنية", icon: "src/assets/companies/ss09.jpg" },
    { id: 10, name: "شمول التآزر", icon: "src/assets/companies/x004.jpg" },
  ];

  return (
    <>
      <section className="bg-black py-16" dir="rtl">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">شركات مجموعة شمول</h1>
          <div className="w-130 h-1 bg-[#c5a059] mx-auto rounded-full"></div>

        </div>

      </section>

      <section className="py-16 bg-gray-50" dir="rtl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companies.map((c) => (
              <Link
                key={c.id}
                to={`/companys/${c.id}`}
                className="group relative block h-82 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Golden glow overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="absolute inset-0 bg-[#c5a059]/20"></div>
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#c5a059]/40 rounded-full blur-3xl"></div>
                </div>

                {/* Full image */}
                <img
                  src={c.icon}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Company name at bottom */}
                <div className="absolute bottom-0 right-0 left-0 z-20 p-5">
                  <p className="text-white font-bold text-lg drop-shadow-lg">{c.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Companys;