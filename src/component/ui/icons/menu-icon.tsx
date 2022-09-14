import { ComponentProps } from "react";

export function MenuIcon({
  width = "192",
  height = "192",
  fill = "white",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      data-testid="menu-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 256 256"
      {...props}
    >
      <rect width="256" height="256" fill="none"></rect>
      <path d="M216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
      <path d="M40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"></path>
      <path d="M216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
    </svg>
  );
}
