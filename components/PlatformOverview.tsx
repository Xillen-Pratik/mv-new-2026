import { RefreshCw, BarChart, LifeBuoy } from 'lucide-react';

export default function PlatformOverview() {
  const features = [
    {
      icon: RefreshCw,
      title: "Automated Store Sync",
      description: "Products, inventory, and collections sync in real-time. No manual updates required ever.",
      color: "text-blue-500 bg-[#DBEAFE]", // Matching light blue background
    },
    {
      icon: BarChart,
      title: "Deep Data Analytics",
      description: "Track installs, active users, and revenue directly from your dashboard or integrate with GA4.",
      color: "text-purple-500 bg-[#F3E8FF]", // Matching light purple background
    },
    {
      icon: LifeBuoy,
      title: "24/7 Priority Support",
      description: "Our team of mobile experts is always ready to help you optimize your app for conversions.",
      color: "text-green-500 bg-[#DCFCE7]", // Matching light green background
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-left">
          The Complete Shopify Mobile App Platform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-start text-left p-8 rounded-2xl border border-slate-200 bg-[#F9FAFB] hover:shadow-sm transition-shadow">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${feature.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
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
