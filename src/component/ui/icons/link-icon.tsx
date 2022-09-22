import { ComponentProps } from "react";

export function LinkIcon({
  width = "26",
  height = "26",
  fill = "white",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      data-testid="social-media-link-mobile-icon"
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.10489 17.3952L17.5799 8.90771"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4673 19.5202L11.9298 23.0577C11.3725 23.615 10.7109 24.0571 9.98275 24.3587C9.2546 24.6603 8.47418 24.8155 7.68605 24.8155C6.09433 24.8155 4.56781 24.1832 3.4423 23.0577C2.31678 21.9322 1.68448 20.4057 1.68448 18.814C1.68448 17.2222 2.31678 15.6957 3.4423 14.5702L6.9798 11.0327"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.7047 15.2828L23.2422 11.7453C24.3677 10.6198 25 9.09328 25 7.50157C25 5.90985 24.3677 4.38333 23.2422 3.25782C22.1167 2.13231 20.5902 1.5 18.9984 1.5C17.4067 1.5 15.8802 2.13231 14.7547 3.25782L11.2172 6.79532"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
