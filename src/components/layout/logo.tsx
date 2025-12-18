import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 20V0H20V20H40V0H60V40H0V20Z"
        fill="hsl(var(--accent))"
      />
      <path
        d="M70 40H90L110 20L90 0H70L90 20L70 40Z"
        fill="hsl(var(--chart-1))"
      />
      <path d="M140 40V0H120V40H140Z" fill="hsl(var(--primary))" />
    </svg>
  );
}
