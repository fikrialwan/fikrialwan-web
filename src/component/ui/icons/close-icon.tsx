import { ComponentProps } from "react";

export function CloseIcon({
  width = "192",
  height = "192",
  fill = "white",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      fill="white"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path d="M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"></path>
    </svg>
  );
}
