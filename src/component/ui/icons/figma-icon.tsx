import { ComponentProps } from "react";

export function FigmaIcon({
  fill = "white",
  width = "30px",
  height = "30px",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      data-testid="figma-icon"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
      {...props}
    >
      <path d="M10 29L10 29c-2.209 0-4-1.791-4-4l0 0c0-2.209 1.791-4 4-4h2.857C13.488 21 14 21.512 14 22.143V25C14 27.209 12.209 29 10 29zM20 9h-2.857C16.512 9 16 8.488 16 7.857V2.143C16 1.512 16.512 1 17.143 1H20c2.209 0 4 1.791 4 4l0 0C24 7.209 22.209 9 20 9zM10 1h2.857C13.488 1 14 1.512 14 2.143v5.714C14 8.488 13.488 9 12.857 9H10C7.791 9 6 7.209 6 5l0 0C6 2.791 7.791 1 10 1zM10 11h2.857C13.488 11 14 11.512 14 12.143v5.714C14 18.488 13.488 19 12.857 19H10c-2.209 0-4-1.791-4-4l0 0C6 12.791 7.791 11 10 11zM20 11A4 4 0 1020 19 4 4 0 1020 11z" />
    </svg>
  );
}
