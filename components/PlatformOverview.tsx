import { RefreshCw, BarChart, LifeBuoy } from 'lucide-react';

export default function PlatformOverview() {
  const features = [
    {
      icon: RefreshCw,
      title: "Automated Store Sync",
      description: "No need to manually update your app. Products, inventory, and collections sync automatically from Shopify in real-time.",
      color: "text-blue-500 bg-blue-100",
    },
    {
      icon: BarChart,
      title: "Deep Data Analytics",
      description: "Track installs, active users, and revenue directly from your dashboard. Understand what drives conversions.",
      color: "text-purple-500 bg-purple-100",
    },
    {
      icon: LifeBuoy,
      title: "24/7 Priority Support",
      description: "Our team of mobile experts is always ready to help you optimize your app for maximum ROI.",
      color: "text-green-500 bg-green-100",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          The Complete Shopify Mobile App Platform
        </h2>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Everything you need to design, launch, and grow your mobile app without writing a single line of code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
