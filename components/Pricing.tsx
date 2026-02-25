import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const finalPlans = [
    {
      name: "Starter",
      price: "19",
      description: "Just getting started",
      features: ["Limit 500 Orders", "Single Color Theme", "Standard Support"],
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Creator",
      price: "99",
      description: "For growing brands",
      features: ["Unlimited Orders", "Full Customization", "Priority Support", "Push Notifications"],
      cta: "Start Free Trial",
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Rush",
      price: "159",
      description: "High volume sales",
      features: ["Advanced Analytics", "Dedicated Support", "Custom Integrations"],
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Enterprise",
      price: "789",
      description: "Maximum performance",
      features: ["Everything included", "Custom Development", "SLA Guarantee"],
      cta: "Contact Sales",
      highlight: false,
    },
  ];


  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-primary uppercase mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Start Free, Upgrade When Your App Pays for Itself
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-sm font-medium text-slate-900">Monthly</span>
            <div className="w-12 h-6 bg-slate-200 rounded-full p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full shadow-sm transform translate-x-6 transition-transform" />
            </div>
            <span className="text-sm font-medium text-slate-500">Yearly (-20%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {finalPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-white ring-2 ring-primary shadow-2xl scale-105 z-10' 
                  : 'bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                <span className="text-slate-500 ml-2">/mo</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-primary' : 'text-slate-400'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`w-full py-3 rounded-xl font-semibold text-center transition-colors ${
                  plan.highlight
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25'
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-100">
             <div className="text-left">
               <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Transaction Fee</p>
               <p className="text-2xl font-bold text-slate-900">1.5 %</p>
             </div>
             <div className="h-8 w-px bg-slate-200" />
             <div className="text-left">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Setup Fee</p>
                <p className="text-2xl font-bold text-slate-900">$0</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
