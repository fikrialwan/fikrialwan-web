export const breakpoints: number[] = [768, 780, 960, 1024];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default mq;
