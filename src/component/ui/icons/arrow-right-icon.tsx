import { ComponentProps } from "react";

export default function ArrowRightIcon({
  width = "20",
  height = "17",
  fill = "white",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      data-testid="arrow-right-icon"
      width={width}
      height={height}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 8.5H19"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6365 1.13635L19.0001 8.49999L11.6365 15.8636"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
