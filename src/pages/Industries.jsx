import { Helmet } from "react-helmet-async";

export default function Industries() {
  const items = ['Commercial Offices','Residential & Communities','Healthcare','Retail & F&B','Education','Hospitality','Industrial','Data Centers'];
  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-900 transition-colors">
      <Helmet><title>Industries — Supreme Facilities</title></Helmet>
      <div className="container max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-extrabold">Industries We Serve</h1>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((x,i)=>(
            <div key={i} className="rounded-2xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-700 transition-colors">
              <div className="font-semibold">{x}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">SLA-backed scope, FM playbooks, certified staff</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
