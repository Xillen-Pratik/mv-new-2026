import { ArrowRight, BarChart3, Heart } from 'lucide-react';
import Link from 'next/link';

export default function FeatureTeaser() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="text-sm font-bold tracking-wider text-green-500 uppercase mb-3 block">
          THE SOLUTION: UTILITY COMMERCE
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 max-w-2xl mx-auto leading-tight">
          What If Your Shopify Mobile App Did More Than Just Sell?
        </h2>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Turn your Shopify mobile app into a daily habit. Give customers a reason to open it every day, not just when they buy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow text-left group">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Boost Revenue</h3>
            <ul className="space-y-3 mb-8 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✔</span> Increase Average Order Value (AOV) by 25%
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✔</span> Reduce Cart Abandonment with Push Notifications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✔</span> Native Checkout Experience (Apple Pay / Google Pay)
              </li>
            </ul>
            <Link href="#" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow text-left group">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Increase Loyalty</h3>
            <ul className="space-y-3 mb-8 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✔</span> Build a Community Around Your Brand
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✔</span> Reward Repeat Customers Instantly
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✔</span> Exclusive App-Only Drops & Early Access
              </li>
            </ul>
            <Link href="#" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
