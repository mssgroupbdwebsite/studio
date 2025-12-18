import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_303_2)">
        <path
          d="M10 0H20L10 40H0L10 0Z"
          fill="currentColor"
          className="text-primary"
        />
        <path
          d="M39.6 19.8L20 40H12.4L32 19.8L12.4 0H20L39.6 19.8Z"
          fill="currentColor"
          className="text-primary/70"
        />
      </g>
      <defs>
        <clipPath id="clip0_303_2">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
