const desktop = 500;
const desktopAndUp = `@media (min-width: ${desktop}px)`;
const underDesktop = `@media (max-width: ${desktop - 1}px)`;

export {desktop, desktopAndUp, underDesktop};
