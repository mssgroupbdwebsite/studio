import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 7l4.5-4.5L11 7" />
      <path d="M13 17l4.5 4.5L22 17" />
      <path d="M6.5 2.5l9 9" />
      <path d="M6.5 21.5l9-9" />
      <path d="M2 12h9" />
      <path d="M13 12h9" />
    </svg>
  );
}
