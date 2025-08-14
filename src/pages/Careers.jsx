import { Helmet } from "react-helmet-async";

export default function Careers() {
  const roles = [
    {title: "FM Supervisor (MEP)", loc: "Abu Dhabi", type: "Full-time"},
    {title: "Housekeeping Lead", loc: "Dubai", type: "Full-time"},
  ];
  return (
    <section className="py-16 transition-colors">
      <Helmet><title>Careers — Supreme Facilities</title></Helmet>
      <div className="container max-w-5xl">
        <h1 className="text-3xl font-extrabold">Careers</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">We’re always looking for great people. Send your CV to <a className="text-blue-700 underline" href="mailto:careers@supremefm.ae">careers@supremefm.ae</a>.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {roles.map((r,i)=>(
            <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 transition-colors">
              <div className="font-semibold">{r.title}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{r.loc} · {r.type}</div>
              <a className="mt-3 inline-block text-blue-700 underline" href="mailto:careers@supremefm.ae?subject=Application">Apply</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
