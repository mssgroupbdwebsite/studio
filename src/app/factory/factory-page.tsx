export default function Page() {
  return (
    <main className="bg-white text-gray-900 dark:bg-[#0B0E14] dark:text-gray-100 transition-colors duration-300">
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/your-id/image/upload/hero.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/65 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-5xl px-6 text-center space-y-8">
          <span className="uppercase tracking-[0.35em] text-sm font-medium text-gray-700 dark:text-gray-300">
            Garment Buying House
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Manufacturing Excellence <br />
            <span className="text-gray-800 dark:text-gray-200">
              You Can Trust
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Delivering world-class apparel production through precision,
            technology, and uncompromising quality standards.
          </p>
        </div>
      </section>

      {/* SECTIONS */}

      <LuxurySection
        title="Cutting Division"
        description="Advanced digital cutting systems ensuring absolute accuracy, efficiency, and optimized fabric utilization."
        img1="https://res.cloudinary.com/your-id/image/upload/cutting1.jpg"
        img2="https://res.cloudinary.com/your-id/image/upload/cutting2.jpg"
      />

      <LuxurySection
        title="Knitting Division"
        description="State-of-the-art knitting lines delivering consistency, scalability, and premium textile quality."
        reverse
        img1="https://res.cloudinary.com/your-id/image/upload/knit1.jpg"
        img2="https://res.cloudinary.com/your-id/image/upload/knit2.jpg"
      />

      <LuxurySection
        title="Washing Unit"
        description="Eco-conscious industrial washing technology ensuring durability, softness, and color integrity."
        img1="hhttps://res.cloudinary.com/dkfxz5wgx/image/upload/sxvvcxdm7airtjbzc9zr"
        img2="https://res.cloudinary.com/your-id/image/upload/wash2.jpg"
      />

      <LuxurySection
        title="Ironing & Finishing"
        description="Meticulous finishing, inspection, and packaging aligned with international buyer standards."
        reverse
        img1="https://res.cloudinary.com/your-id/image/upload/finish1.jpg"
        img2="https://res.cloudinary.com/your-id/image/upload/finish2.jpg"
      />

      {/* AUTO MOVING GALLERY */}
      <section className="py-28 bg-gray-50 dark:bg-[#111520] transition-colors">
        <h2 className="text-center text-4xl font-semibold mb-16">
          Factory Production Highlights
        </h2>

        <div className="overflow-hidden">
          <div className="flex gap-10 animate-marquee">
            {Array.from({ length: 14 }).map((_, i) => (
              <img
                key={i}
                src="https://res.cloudinary.com/your-id/image/upload/gallery.jpg"
                alt="Factory"
                className="w-[420px] h-[260px] rounded-2xl object-cover shadow-2xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2026 Garment Buying House. Trusted by Global Brands.
      </footer>
    </main>
  );
}

/* ---------------- LUXURY SECTION COMPONENT ---------------- */

function LuxurySection({
  title,
  description,
  reverse = false,
  img1,
  img2,
}: {
  title: string;
  description: string;
  reverse?: boolean;
  img1: string;
  img2: string;
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
          <div className="w-16 h-[2px] bg-gradient-to-r from-gray-900/80 to-transparent dark:from-white/80" />
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-8">
          <img
            src={img1}
            alt={title}
            className="h-64 w-full object-cover rounded-2xl shadow-xl"
          />
          <img
            src={img2}
            alt={title}
            className="h-64 w-full object-cover rounded-2xl shadow-xl translate-y-12"
          />
        </div>
      </div>
    </section>
  );
}
