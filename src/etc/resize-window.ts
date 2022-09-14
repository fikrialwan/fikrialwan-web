const resizeWindow = (width: number, height: number) => {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
};

export default resizeWindow;
