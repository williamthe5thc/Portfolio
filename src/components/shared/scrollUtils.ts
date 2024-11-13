// src/utils/scrollUtils.ts
export const scrollToTop = (smooth: boolean = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto'
  });
};

// Combined function for navigation and scrolling
export const navigateAndScroll = (navigate: Function, path: string) => {
  // First navigate to the path
  navigate(path);
  // Then scroll to top
  scrollToTop();
};