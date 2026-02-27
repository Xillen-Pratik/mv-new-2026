import Image from 'next/image';

export default function LogosBar() {
  const logos = [
    'Frame 1000007039.png',
    'mm1xac6f-g05npow.png',
    'mm1xac6f-o0x5702.png',
    'mm1xac6f-mytsr3j.png',
    'mm1xac6f-1ls4l4z.png',
    'mm1xac6f-5ox8odn.png',
  ];

  return (
    <section className="bg-[#F6F5FF] py-6 md:py-8 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-12">
          {/* Left Side: Text and Separator (aligned to container start) */}
          <div className="flex items-center gap-8 lg:gap-12 shrink-0">
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Trusted by Innovative Brands
            </span>
            <div className="hidden lg:block w-px h-6 bg-slate-500/50"></div>
          </div>

          {/* Right Side: Logos */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="relative w-28 h-10 md:w-32 md:h-12 flex items-center justify-center">
                <Image 
                  src={`/images/${logo}`} 
                  alt={`Brand Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
