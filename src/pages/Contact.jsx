import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-900 transition-colors">
      <Helmet><title>Contact — Supreme Facilities</title></Helmet>
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-extrabold text-center">Request a Proposal</h1>
        <p className="text-center text-slate-600 dark:text-slate-300 mt-2">Tell us about your asset(s) and scope. We’ll respond within one business day.</p>

        {sent ? (
          <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 text-center transition-colors">
            <div className="font-semibold">Thanks! We’ll get back to you shortly.</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">You can also WhatsApp us at <a className="text-blue-700 underline" href="https://wa.me/9710000000">+971 00 000 0000</a>.</p>
          </div>
        ) : (
          <form
            className="mt-8 grid grid-cols-1 gap-4"
            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
            method="POST"
            onSubmit={(e)=>{ setTimeout(()=>setSent(true), 300); }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 transition-colors" name="name" placeholder="Full name" required />
              <input className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 transition-colors" name="email" placeholder="Work email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 transition-colors" name="company" placeholder="Company" />
              <input className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 transition-colors" name="phone" placeholder="Phone" />
            </div>
            <textarea className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 min-h-[120px] transition-colors" name="message" placeholder="Facilities, scope, SLAs, start date." />
            <button className="mt-2 rounded-2xl bg-blue-600 text-white px-5 py-3 hover:bg-blue-700">Submit Request</button>
            <p className="text-xs text-slate-500 dark:text-slate-400">By submitting, you agree to our privacy policy.</p>
          </form>
        )}
      </div>
    </section>
  );
}
