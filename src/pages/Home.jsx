import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const heroImages = ["/images/hero-fm-1.jpg", "/images/hero-fm-2.jpg", "/images/hero-fm-3.jpg"];
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHeroIndex(i => (i + 1) % heroImages.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Supreme Facilities — Reliable Facilities Management</title>
      </Helmet>

      {/* Hero with background slideshow */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-900/60" />
        </div>

        <div className="relative container max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center z-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Reliable <span className="text-blue-300">Facilities Management</span> for Modern Assets
            </h1>
            <p className="mt-4 text-slate-100/90 text-lg">
              Hard & soft FM, preventive maintenance, CAFM-driven workflows, and 24/7 helpdesk across commercial, residential, healthcare, and retail.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700">Get a Proposal</Link>
              <Link to="/services" className="px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white/95 text-slate-900 hover:bg-white dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors">Explore Services</Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center text-white/90">
              <div><div className="text-3xl font-extrabold">98%</div><div className="text-xs text-white/80">SLA Compliance</div></div>
              <div><div className="text-3xl font-extrabold">24/7</div><div className="text-xs text-white/80">Helpdesk</div></div>
              <div><div className="text-3xl font-extrabold">7M+</div><div className="text-xs text-white/80">Sq.ft Managed</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white/95 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg p-4 grid grid-cols-2 gap-3">
              {['HVAC Maintenance','MEP Services','Housekeeping','Security','Landscaping','Waste Mgmt','Pest Control','Facade Cleaning'].map((t,i)=> (
                <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-700 p-3 text-sm bg-slate-50/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 flex items-center transition-colors">{t}</div>
              ))}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/95 dark:bg-slate-900 rounded-2xl shadow px-4 py-3 text-sm text-slate-700 dark:text-slate-200">
              IoT sensors · CAFM · PPM · CM · HSE
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar with logos */}
      <section className="py-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container max-w-7xl">
          <p className="uppercase tracking-wider text-xs text-slate-500">Trusted by teams at</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
            {[1,2,3,4,5,6].map(i => (
              <img key={i} src={`/logos/client-${i}.svg`} alt={`Client ${i}`} className="h-10 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition dark:opacity-90" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
