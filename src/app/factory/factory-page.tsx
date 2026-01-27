export default function Page() {
  return (
    <main className="px-6 py-10 space-y-20">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Buying House Factory</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Complete garment manufacturing solutions including cutting, knitting,
          washing, ironing, and finishing.
        </p>
      </section>

      {/* Cutting Division */}
      <Section
        title="Cutting Division"
        images={[
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
        ]}
      />

      {/* Knitting Division */}
      <Section
        title="Knitting Division"
        images={[
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
        ]}
      />

      {/* Washing */}
      <Section
        title="Washing Unit"
        images={[
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
        ]}
      />

      {/* Iron & Finishing */}
      <Section
        title="Iron & Finishing"
        images={[
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          "https://res.cloudinary.com/demo/image/upload/sample.jpg",
        ]}
      />

      {/* Auto Moving Gallery */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Production Floor Highlights
        </h2>

        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {Array.from({ length: 10 }).map((_, index) => (
              <img
                key={index}
                src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
                alt="Factory"
                className="w-64 h-40 object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* Reusable Section Component */
function Section({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={title}
            className="w-full h-56 object-cover rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}
