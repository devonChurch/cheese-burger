const desktop = 500;
const desktopAndUp = `@media (min-width: ${desktop}px)`;
const underDesktop = `@media (max-width: ${desktop - 1}px)`;
const isMobile = () => window.matchMedia(`(max-width: ${desktop - 1}px)`).matches;
const isDesktop = () => window.matchMedia(`(min-width: ${desktop}px)`).matches;

export {desktop, desktopAndUp, underDesktop, isMobile, isDesktop};
