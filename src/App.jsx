import React, { useState, useEffect } from 'react';

export default function App() {
  const [fluid, setFluid] = useState('water');
  const [pressure, setPressure] = useState('low');
  const [formData, setFormData] = useState({ name: '', company: '', product: 'Non-asbestos gasket', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Gasket selector');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Gasket selector', href: '#selector' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#about' },
    { name: 'Quality', href: '#about' },
    { name: 'Enquiry', href: '#enquiry' },
  ];

  const getGasketRecommendation = () => {
    if (fluid === 'water' && pressure === 'low') {
      return {
        title: "Non-asbestos or rubber gasket",
        description: "Fibre sheet or rubber handles water and air at low pressure and is the most economical choice. Full-face cut suits flat flanges.",
        note: "Indicative guidance only. Temperature, flange face and bolt load also matter, so confirm with an engineer before ordering."
      };
    } else if (pressure === 'high' || fluid === 'steam') {
      return {
        title: "Spiral wound gasket",
        description: "Steel winding with graphite or PTFE filler. Designed to resist high pressure fluctuations and thermal expansion.",
        note: "Class 150 to 2500 applications in refineries and steam pipelines."
      };
    } else if (fluid === 'corrosive') {
      return {
        title: "Ring joint or Kammprofile gasket",
        description: "Machined metal rings for grooved flanges or serrated core with soft facing layers.",
        note: "Recommended for Class 600 and above in chemical process plants."
      };
    } else {
      return {
        title: "Jacketed or Serrated gasket",
        description: "Soft filler wrapped in a metal shell or concentric grooves that bite into flange face.",
        note: "Suitable for heat exchangers, boilers, and steam lines."
      };
    }
  };

  const recommendation = getGasketRecommendation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-sky-200 selection:text-slate-900">
      
      {/* 1. TOP NAVBAR (Exact Logo & Header from Screenshot 2026-10-11 192955) */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-b border-slate-200/80' 
            : 'bg-white py-5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo Section - Exact match with Screenshot */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0f172a] flex items-center justify-center font-black text-white text-xl shadow-sm group-hover:scale-105 transition-transform">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-[#0f172a] tracking-tight leading-none group-hover:text-sky-600 transition-colors">
                Taloja Sealing Co.
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">
                INDUSTRIAL GASKETS
              </span>
            </div>
          </a>

          {/* Right-Aligned Pill Navigation Box */}
          <nav className="flex items-center space-x-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative px-4 py-2 text-xs font-bold transition-all duration-200 rounded-full ${
                    isActive 
                      ? 'text-sky-600 bg-white shadow-xs' 
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                  
                  {/* Underline for active state */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-sky-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

        </div>
      </header>

      {/* 2. HERO SECTION WITH INDUSTRIAL BACKDROP */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden border-b border-slate-800"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.78)), url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop')`
        }}
      >
        <main className="max-w-7xl mx-auto px-8 py-20 md:py-24 grid md:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/40 text-[10px] font-bold text-sky-300 shadow-lg backdrop-blur-md uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>Direct Manufacturer • Taloja MIDC</span>
            </div>
            
            <h1 className="text-5xl md:text-6.5xl font-black text-white leading-[1.05] tracking-tight drop-shadow-md">
              Gaskets for pipes that <br /> run hot, cold and <br /> corrosive.
            </h1>
            
            <p className="text-lg text-slate-200 max-w-xl leading-relaxed font-medium drop-shadow-sm">
              We cut, wind and machine industrial gaskets in Taloja MIDC, Mumbai, and ship them to refineries, plants and fabricators in India and abroad. No minimum order.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="#enquiry" 
                onClick={() => setActiveTab('Enquiry')}
                className="px-7 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-sm rounded-lg transition-all shadow-xl shadow-sky-500/20 hover:scale-105 duration-200"
              >
                Request a quote
              </a>
              <a 
                href="#selector" 
                onClick={() => setActiveTab('Gasket selector')}
                className="px-7 py-3.5 border border-slate-500 bg-slate-900/60 backdrop-blur-md hover:border-white text-white font-bold text-sm rounded-lg transition-all shadow-md"
              >
                Find the right gasket
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center items-center py-4">
            <div className="p-6 bg-[#131d31]/80 backdrop-blur-lg rounded-full border border-slate-600 shadow-2xl">
              <svg className="w-80 h-80 md:w-96 md:h-96 drop-shadow-2xl" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="170" stroke="#0088cc" strokeWidth="10" />
                {[140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85].map((r, i) => (
                  <circle key={i} cx="200" cy="200" r={r} stroke="#cbd5e1" strokeWidth="1.5" opacity="0.65" />
                ))}
                <circle cx="200" cy="200" r="75" stroke="#0088cc" strokeWidth="14" />
                <circle cx="200" cy="200" r="60" fill="#0d1525" />
                {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = 200 + 170 * Math.cos(rad);
                  const cy = 200 + 170 * Math.sin(rad);
                  return (
                    <circle key={idx} cx={cx} cy={cy} r="11" fill="#ffffff" stroke="#0088cc" strokeWidth="2.5" />
                  );
                })}
              </svg>
            </div>
          </div>
        </main>
      </div>

      {/* 3. STATS BAR */}
      <section id="about" className="border-b border-slate-200 bg-white shadow-xs">
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border-r border-slate-200/80 pr-4">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">Since 1973</div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">Custom Gaskets & Seals</div>
          </div>
          <div className="border-r border-slate-200/80 pr-4">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">11 Types</div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">Rubber Sheet to Ring Joints</div>
          </div>
          <div className="border-r border-slate-200/80 pr-4">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">1 Piece</div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">Minimum Order Quantity</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">Worldwide</div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">Global Shipping</div>
          </div>
        </div>
      </section>

      {/* 4. GASKET SELECTOR */}
      <section id="selector" className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Which gasket fits your line?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Pick what flows through the flange and how much pressure it sees. You get a starting point to discuss with our engineers.
            </p>

            <div className="space-y-6 pt-2">
              <div>
                <label className="block text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">What is in the line?</label>
                <select 
                  value={fluid}
                  onChange={(e) => setFluid(e.target.value)}
                  className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm font-semibold shadow-xs transition-colors"
                >
                  <option value="water">Water, air, general service</option>
                  <option value="steam">Steam, high temp water</option>
                  <option value="corrosive">Corrosive chemicals, acids</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">Flange pressure class</label>
                <select 
                  value={pressure}
                  onChange={(e) => setPressure(e.target.value)}
                  className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm font-semibold shadow-xs transition-colors"
                >
                  <option value="low">Class 150 or lower</option>
                  <option value="high">Class 300 to 1500</option>
                  <option value="extreme">Class 2500 and above</option>
                </select>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 bg-white p-8 rounded-2xl border-l-4 border-amber-500 border-t border-r border-b border-slate-200 shadow-md space-y-4">
            <span className="text-[10px] uppercase font-black text-amber-600 tracking-widest bg-amber-50 px-2.5 py-1 rounded-md">Recommended Type</span>
            <h3 className="text-2xl font-extrabold text-slate-900">{recommendation.title}</h3>
            <p className="text-slate-700 text-base leading-relaxed">{recommendation.description}</p>
            <p className="text-xs text-slate-500 pt-4 border-t border-slate-100">{recommendation.note}</p>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT SCHEDULE TABLE */}
      <section id="products" className="max-w-7xl mx-auto px-8 py-20 border-t border-slate-200">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Product schedule
          </h2>
          <p className="text-slate-600 text-base">
            Every item is made to your drawing or flange standard. Send a sketch if you do not have a drawing.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-6">Type</th>
                <th className="py-4 px-6">Spec</th>
                <th className="py-4 px-6 text-right">Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {[
                { name: "Non-asbestos gasket", desc: "Compressed fibre sheet cut to any flange size", fit: "Water, steam, oil" },
                { name: "Spiral wound gasket", desc: "Steel winding with graphite or PTFE filler", fit: "Class 150 to 2500" },
                { name: "Ring joint gasket (R, RX, BX)", desc: "Machined metal rings for grooved flanges", fit: "Class 600 and above" },
                { name: "Kammprofile gasket", desc: "Grooved metal core with soft facing layers", fit: "Heat exchangers, reactors" },
                { name: "Jacketed gasket", desc: "Soft filler wrapped in a metal shell", fit: "Narrow faces, exchangers" },
                { name: "Corrugated gasket", desc: "Corrugated metal with graphite facing", fit: "Boilers, steam lines" },
                { name: "Serrated gasket", desc: "Concentric grooves bite into the flange face", fit: "High bolt load joints" },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-5 px-6 font-bold text-slate-900">{item.name}</td>
                  <td className="py-5 px-6 text-slate-600">{item.desc}</td>
                  <td className="py-5 px-6 text-right font-bold text-sky-600">{item.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. ENQUIRY FORM SECTION */}
      <section id="enquiry" className="max-w-7xl mx-auto px-8 py-20 border-t border-slate-200">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Tell us what you need
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Give us the type, size, pressure class and quantity. We reply with a quote, usually within one working day.
            </p>
            <p className="text-xs text-slate-400 pt-4">
              Sample site: wire the button to your email or form service before going live.
            </p>
          </div>

          <div className="md:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-6 rounded-lg text-center font-medium">
                Enquiry sent successfully! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">Your name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-800 text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">Company</label>
                  <input 
                    type="text" 
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-800 text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">Product</label>
                  <select 
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full bg-slate-50 text-slate-950 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-800 text-sm font-semibold cursor-pointer"
                  >
                    <option value="Non-asbestos gasket">Non-asbestos gasket</option>
                    <option value="Spiral wound gasket">Spiral wound gasket</option>
                    <option value="Ring joint gasket">Ring joint gasket (R, RX, BX)</option>
                    <option value="Kammprofile gasket">Kammprofile gasket</option>
                    <option value="Jacketed gasket">Jacketed gasket</option>
                    <option value="Corrugated gasket">Corrugated gasket</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">Size, class and quantity</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-slate-50 text-slate-950 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-800 text-sm font-semibold"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-md cursor-pointer duration-150"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}