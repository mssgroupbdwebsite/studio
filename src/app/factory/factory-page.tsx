export default function Page() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            World-Class Garment Buying House
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            End-to-end apparel manufacturing with precision cutting, knitting,
            washing, ironing, and premium finishing.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <Section
        title="Cutting Division"
        description="High-precision cutting using modern machinery ensuring accuracy, efficiency, and minimal wastage."
      />

      <Section
        title="Knitting Division"
        description="Advanced knitting lines delivering consistent quality, flexibility, and high production capacity."
        reverse
      />

      <Section
        title="Washing Unit"
        description="Eco-friendly industrial washing machines ensuring fabric durability, color fastness, and softness."
      />

      <Section
        title="Iron & Finishing"
        description="Final inspection, ironing, and finishing carried out with strict quality control standards."
        reverse
      />

      {/* AUTO MOVING GALLERY */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Factory Floor Highlights
        </h2>

        <div className="overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {Array.from({ length: 12 }).map((_, i) => (
              <img
                key={i}
                src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
                alt="Factory"
                className="w-80 h-52 object-cover rounded-xl shadow-md flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        © 2026 Buying House Factory. All rights reserved.
      </footer>
    </main>
  );
}

/* ---------- REUSABLE SECTION ---------- */

function Section({
  title,
  description,
  reverse = false,
}: {
  title: string;
  description: string;
  reverse?: boolean;
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* IMAGES (2 PER SECTION) */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
            alt={title}
            className="rounded-xl object-cover h-56 w-full shadow-lg"
          />
          <img
            src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
            alt={title}
            className="rounded-xl object-cover h-56 w-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
