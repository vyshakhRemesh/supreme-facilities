import { Outlet, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ThemeToggle from "../components/ThemeToggle.jsx";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Request a Quote", cta: true },
];

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 flex flex-col transition-colors">
      <Helmet>
        <html lang="en" />
        <title>Supreme Facilities — Facilities Management UAE</title>
        <meta name="description" content="Hard & soft FM, preventive maintenance, CAFM-driven workflows, and 24/7 helpdesk across commercial, residential, healthcare, and retail." />
      </Helmet>

      <header className="w-full border-b bg-white/90 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 backdrop-blur sticky top-0 z-40 transition-colors">
        <div className="container max-w-7xl h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-600" aria-hidden="true"></div>
            <span className="font-bold tracking-tight text-lg">Supreme Facilities</span>
          </NavLink>
          <div className="hidden md:flex items-center gap-4 text-sm">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  (n.cta
                    ? "px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                    : "px-2 py-2 hover:text-blue-700") +
                  (isActive && !n.cta ? " text-blue-700 font-semibold" : "")
                }
              >
                {n.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="py-10 bg-slate-900 text-slate-200 mt-16">
        <div className="container max-w-7xl grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold">Supreme Facilities</div>
            <p className="text-sm text-slate-400 mt-2">ISO 9001, 14001, 45001 compliant. Based in UAE.</p>
          </div>
          <div>
            <div className="font-semibold">Services</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Hard FM</li>
              <li>Soft FM</li>
              <li>Projects</li>
              <li>HSE & Compliance</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Abu Dhabi · Dubai</li>
              <li><a href="tel:+9710000000" className="hover:underline">+971-XXX-XXXX</a></li>
              <li><a href="mailto:hello@supremefm.ae" className="hover:underline">hello@supremefm.ae</a></li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-center text-slate-500 mt-8">© {new Date().getFullYear()} Supreme Facilities. All rights reserved.</div>
      </footer>
    </div>
  );
}
