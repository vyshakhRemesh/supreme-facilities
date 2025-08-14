import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <section className="py-16 transition-colors">
      <Helmet><title>About — Supreme Facilities</title></Helmet>
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-extrabold">About Supreme Facilities</h1>
        <p className="mt-4 text-slate-700 dark:text-slate-300">
          We deliver SLA-backed hard & soft FM with CAFM and 24/7 helpdesk across the UAE. Our HSE-first culture and OEM-aligned PPM keep assets safe, efficient, and compliant.
        </p>
        <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300 list-disc pl-6">
          <li>ISO 9001, 14001, 45001 compliant</li>
          <li>Mobile workforce & QR-linked assets</li>
          <li>Monthly dashboards with KPIs & energy insights</li>
        </ul>
      </div>
    </section>
  );
}
