export default function Page() {
  return (
    <main className="bg-[#0B0E14] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center space-y-8">
          <span className="uppercase tracking-[0.3em] text-sm text-gray-400">
            Garment Buying House
          </span>
          <h1 className="text-6xl font-semibold leading-tight">
            Manufacturing Excellence<br />You Can Trust
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Delivering world-class apparel production through precision,
            technology, and uncompromising quality standards.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <LuxurySection
        title="Cutting Division"
        description="Digitally controlled cutting systems ensuring exact measurements, consistency, and minimal fabric waste."
      />

      <LuxurySection
        title="Knitting Division"
        description="High-capacity knitting lines engineered for flexibility, durability, and premium fabric quality."
        reverse
      />

      <LuxurySection
        title="Washing Unit"
        description="Industrial eco-wash technology delivering superior softness, color retention, and fabric longevity."
      />

      <LuxurySection
        title="Ironing & Finishing"
        description="Meticulous finishing, inspection, and presentation meeting global buyer compliance standards."
        reverse
      />

      {/* MOVING GALLERY */}
      <section className="py-24 bg-[#111520]">
        <h2 className="text-center text-4xl font-semibold mb-14">
          Inside Our Production Floor
        </h2>

        <div className="overflow-hidden">
          <div className="flex gap-10 animate-marquee">
            {Array.from({ length: 14 }).map((_, i) => (
              <img
                key={i}
                src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
                alt="Factory"
                className="w-[420px] h-[260px] rounded-2xl object-cover shadow-2xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center text-gray-500 text-sm">
        © 2026 Premium Buying House. Crafted for Global Brands.
      </footer>
    </main>
  );
}

/* ---------- LUXURY SECTION ---------- */

function LuxurySection({
  title,
  description,
  reverse = false,
}: {
  title: string;
  description: string;
  reverse?: boolean;
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div className="space-y-8">
          <div className="w-16 h-[2px] bg-gradient-to-r from-white/80 to-white/10" />
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-8">
          <img
            src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
            alt={title}
            className="h-64 w-full object-cover rounded-2xl shadow-xl"
          />
          <img
            src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
            alt={title}
            className="h-64 w-full object-cover rounded-2xl shadow-xl translate-y-10"
          />
        </div>
      </div>
    </section>
  );
}
