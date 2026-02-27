"use client";

import { useState } from 'react';
import { Check, Info } from 'lucide-react';
import Link from 'next/link';

type BillingCycle = 'monthly' | 'yearly';

type PlanFeature = {
  text: string;
  info?: boolean;
};

type Plan = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeature[];
  cta: string;
  highlight: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    name: 'Starter',
    monthlyPrice: 49,
    yearlyPrice: 41,
    features: [
      { text: 'Email/Ticket Support' },
      { text: 'All App Builder Features' },
      { text: 'Unlimited Push Notifications' },
      { text: '30 Days free trial' },
      { text: '5 Standard Integrations' },
    ],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Growth',
    monthlyPrice: 199,
    yearlyPrice: 166,
    features: [
      { text: 'Everything in Basic' },
      { text: '10 Standard Integrations' },
      { text: 'Quick Commerce Support' },
      { text: 'ASO (One Time Setup)', info: true },
      { text: 'Multi language / Multi Currency' },
      { text: 'Marketplace Support' },
    ],
    cta: 'Start Free Trial',
    highlight: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Scale',
    monthlyPrice: 399,
    yearlyPrice: 333,
    features: [
      { text: 'Everything in Growth' },
      { text: '20 Standard Integrations' },
      { text: 'Quick Commerce Support' },
      { text: 'ASO (One Time Setup)', info: true },
      { text: 'Multi language / Multi Currency' },
      { text: 'Marketplace Support' },
    ],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 799,
    yearlyPrice: 666,
    features: [
      { text: 'Everything in Scale' },
      { text: 'Standard + Custom Integrations' },
      { text: 'ASO (One Time Setup + Monitoring)' },
      { text: 'App Customization Included' },
    ],
    cta: 'Start Free Trial',
    highlight: false,
  },
];

const PAY_AS_YOU_GO_FEATURES_LEFT = ['Unlimited Revenue', '2 Standard Integration'];
const PAY_AS_YOU_GO_FEATURES_RIGHT = ['No ASO Service', 'No Marketplace Support'];

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>('yearly');

  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-wider text-primary uppercase mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Start Free, Upgrade When Your App Pays for Itself
          </h2>

          {/* Billing cycle segment: Monthly | Yearly (-17%) */}
          <div className="inline-flex rounded-full p-1 bg-slate-200 mt-8">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                billing === 'monthly'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                billing === 'yearly'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly <span className="text-slate-400 font-normal">(-17%)</span>
            </button>
          </div>
        </div>

        {/* Four pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const isYearly = billing === 'yearly';
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col p-6 rounded-2xl bg-white shadow-sm border transition-all duration-300 ${
                  plan.highlight
                    ? 'ring-2 ring-primary shadow-lg z-10 border-primary/20'
                    : 'border-slate-200 hover:shadow-md'
                }`}
              >
                {plan.highlight && plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6 flex-wrap">
                  {isYearly && (
                    <span className="text-xl font-normal text-slate-400 line-through">${plan.monthlyPrice}</span>
                  )}
                  <span className="text-3xl font-bold text-slate-900">${price}</span>
                  <span className="text-slate-600 text-base font-normal">/mo</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-5 h-5 shrink-0 text-green-500 mt-0.5" />
                      <span>{f.text}</span>
                      {f.info && (
                        <button type="button" className="shrink-0 text-slate-400 hover:text-slate-600" aria-label="More info">
                          <Info className="w-4 h-4" />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className={`w-full py-3 rounded-xl font-semibold text-center transition-colors ${
                    plan.highlight
                      ? 'bg-primary text-white hover:bg-primary-hover'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pay As You Go */}
        <div className="max-w-6xl mx-auto mt-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 p-6 lg:p-8 rounded-2xl bg-white shadow-sm border border-slate-200">
            <div className="lg:min-w-[180px]">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Pay As you go</h3>
              <p className="text-2xl font-bold text-slate-900">1.5 %</p>
              <p className="text-sm text-slate-600">(From Your Sales)</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 flex-1">
              <ul className="space-y-2">
                {PAY_AS_YOU_GO_FEATURES_LEFT.map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="w-5 h-5 shrink-0 text-green-500" />
                    {text}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {PAY_AS_YOU_GO_FEATURES_RIGHT.map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="w-5 h-5 shrink-0 text-green-500" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:shrink-0">
              <Link
                href="#"
                className="inline-block w-full lg:w-auto lg:min-w-[160px] py-3 px-6 rounded-xl font-semibold text-center bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>

        {/* Compare Plans */}
        <div className="text-center mt-10">
          <Link
            href="#"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-primary-hover uppercase tracking-wide transition-colors"
          >
            Compare Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
