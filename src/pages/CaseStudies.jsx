import { Helmet } from "react-helmet-async";

export default function CaseStudies() {
  const list = [
    {t:'500k sq.ft Corporate HQ', r:'24/7 MEP + housekeeping; 99% uptime; 10% energy cut via retrofits.'},
    {t:'Residential Community', r:'Soft FM, landscaping & pools; resident NPS +32; complaints ↓ 41%.'},
    {t:'Private Hospital', r:'HSE audits & critical assets PPM; downtime ↓ 35%; JCI compliant.'},
  ];
  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors">
      <Helmet><title>Case Studies — Supreme Facilities</title></Helmet>
      <div className="container max-w-7xl">
        <div className="md:flex items-end justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold">Results & Case Studies</h1>
          <span className="text-sm text-slate-500 dark:text-slate-400">Summaries only · PDF on request</span>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {list.map((x,i)=>(
            <article key={i} className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-900 transition-colors">
              <h3 className="font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{x.r}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
