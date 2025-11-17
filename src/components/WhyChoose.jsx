import { Shield, Sparkles, Wallet } from "lucide-react";

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
    <Icon className="w-6 h-6 text-blue-600" />
    <h4 className="mt-3 font-semibold text-slate-900">{title}</h4>
    <p className="mt-1 text-sm text-slate-600">{desc}</p>
  </div>
);

export default function WhyChoose() {
  return (
    <section id="why" className="bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Why Choose Xpert</h3>
          <p className="mt-2 text-slate-600">Premium materials, modern design, honest pricing.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Feature icon={Shield} title="1‑Year Warranty" desc="Hassle‑free claims with responsive local support." />
          <Feature icon={Sparkles} title="Modern Aesthetics" desc="Clean, minimalist design that elevates your kitchen." />
          <Feature icon={Wallet} title="Great Value" desc="Top‑tier performance without the premium markup." />
        </div>
      </div>
    </section>
  );
}
