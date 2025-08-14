import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const cards = [
  {title:'Hard FM',desc:'HVAC, electrical, plumbing, MEP, BMS, elevators/escalators.'},
  {title:'Soft FM',desc:'Housekeeping, façade & glass, landscaping, waste management.'},
  {title:'Specialist',desc:'Pest control, water tank cleaning, kitchen extraction, civil works.'},
  {title:'HSE & Compliance',desc:'ISO 45001, risk assessments, toolbox talks, audit readiness.'},
  {title:'CAFM & Helpdesk',desc:'Asset registry, PPM, work orders, SLAs, mobile workforce.'},
  {title:'Projects',desc:'Fit‑out, retrofits, energy audits, sustainability initiatives.'},
];

export default function Services() {
  return (
    <section className="py-16 md:py-24">
      <Helmet><title>Services — Supreme Facilities</title></Helmet>
      <div className="container max-w-7xl">
        <div className="md:flex items-end justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold">End‑to‑End FM Services</h1>
          <Link to="/contact" className="text-blue-700 hover:underline text-sm">Get tailored scope →</Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c,i)=> (
            <div key={i} className="rounded-2xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 p-6 hover:shadow transition-colors">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.desc}</p>
              <ul className="mt-4 text-sm list-disc pl-4 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Planned & reactive maintenance</li>
                <li>KPIs & monthly reporting</li>
                <li>Qualified technicians</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
