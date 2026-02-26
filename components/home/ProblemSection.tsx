import Image from 'next/image';

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* Decorative gradient blurs */}
      <div className="pointer-events-none absolute -bottom-20 left-10 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-pink-200/40 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-violet-200/50 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Heading block */}
        <div className="mb-12 max-w-4xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.08em] text-[#FF383C]">
            The Problem
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-[1.2] text-slate-900 md:text-[40px] md:leading-[1.25]">
            Your Mobile App Shouldn&apos;t Be a Website With Push Notifications.
          </h2>
          <p className="max-w-[70ch] text-base leading-7 text-slate-600 md:text-lg">
            Every Shopify mobile app builder gives you a drag-and-drop editor and push notifications. That&apos;s table stakes.
            The real question is: will your customers open the app next week? If it&apos;s just a product catalog with a buy button,
            probably not.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[32px] font-bold leading-none text-[#FF383C] md:text-[36px]">
                  90%
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-[#FF383C]">
                  OF USERS ABANDON SHOPPING APPS IN 30 DAYS
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">The Retention Problem</h3>
              <p className="text-sm leading-6 text-slate-600">
                Same products as the website. Same layout. Same experience &ndash; no reason to open the app again.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[32px] font-bold leading-none text-[#FF383C] md:text-[36px]">
                  10+
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-[#FF383C]">
                  DAILY OPENS FOR UTILITY APPS.
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Utility Changes the Equation</h3>
              <p className="text-sm leading-6 text-slate-600">
                Apps that help customers do something, track a routine, analyze their skin &mdash; get opened daily.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[32px] font-bold leading-none text-[#FF383C] md:text-[36px]">
                  ₹1
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-[#FF383C]">
                  YOU SPEND ACQUIRING A USER WHO UNINSTALLS IS WASTED.
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Retention Beat Acquisition</h3>
              <p className="text-sm leading-6 text-slate-600">
                Ad costs keep rising. An app your customers open every morning is a sales channel that doesn&apos;t need a budget.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[708px] rounded-[32px] border border-slate-200 shadow-lg">
              <div className="relative aspect-[708/590] w-full overflow-hidden rounded-[32px]">
                <Image
                  src="/images/mm1xac6f-4c93pxl.png"
                  alt="Problem Illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
