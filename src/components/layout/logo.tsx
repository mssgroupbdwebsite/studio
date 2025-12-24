import Image from 'next/image';

export function Logo({ className, ...props }: { className?: string }) {
  return (
    <div className={`relative ${className || 'h-8 w-8'}`} {...props}>
      <Image
        src="https://res.cloudinary.com/dkfxz5wgx/image/upload/v1766602831/fqmuvepq68qu1rt1fdsm.png"
        alt="MSS Group Logo"
        fill
        className="object-contain"
        sizes="32px"
      />
    </div>
  );
}
