import type { IconName } from "@/content/types";

const paths: Record<IconName, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 5.3-5.3 2.2 2.2-5.3z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.2c0 4.4 3.1 8.2 7.5 9.8 4.4-1.6 7.5-5.4 7.5-9.8V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13.5h6" />
      <path d="M9 17h4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19h16" />
      <path d="M7 15V9" />
      <path d="M12 15V5" />
      <path d="M17 15v-4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 4 8 4-8 4-8-4z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </>
  ),
  sunrise: (
    <>
      <path d="M4 17h16" />
      <path d="M7 17a5 5 0 0 1 10 0" />
      <path d="M12 6v3" />
      <path d="m6 9 1.5 1.5" />
      <path d="m18 9-1.5 1.5" />
    </>
  ),
  graduation: (
    <>
      <path d="m3 9 9-4 9 4-9 4z" />
      <path d="M7 11v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4" />
      <path d="M21 9v5" />
    </>
  ),
  pie: (
    <>
      <path d="M12 3v9h9" />
      <path d="M21 12a9 9 0 1 1-9-9" />
    </>
  ),
  options: (
    <>
      <path d="M4 7h10" />
      <circle cx="17" cy="7" r="2.5" />
      <path d="M4 17h4" />
      <circle cx="11" cy="17" r="2.5" />
      <path d="M14 17h6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.8 3 2.8 15 0 18" />
      <path d="M12 3c-2.8 3-2.8 15 0 18" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="7" width="13" height="10" rx="2" />
      <path d="m16 11 5-3v8l-5-3z" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s6-5.5 6-11a6 6 0 0 0-12 0c0 5.5 6 11 6 11z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m6 6 2.5 2.5" />
      <path d="m15.5 15.5 2.5 2.5" />
      <path d="m6 18 2.5-2.5" />
      <path d="m15.5 8.5 2.5-2.5" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
