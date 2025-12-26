
'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[85vh] md:h-[calc(100vh-56px)]">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dkfxz5wgx/image/upload/db69gbxq4f4fz4j3opam"
          alt="Modern apparel manufacturing facility"
          fill
          className="object-cover object-left"
          priority
          data-ai-hint="apparel factory"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
