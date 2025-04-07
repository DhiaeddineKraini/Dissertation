/* Whether the browser is Chromium-based with MojoJS enabled */
export const isChromiumBased = 'MojoInterfaceInterceptor' in self;

/* Whether the browser is WebKit-based with hnternal test-only API enabled */
export const isWebKitBased = !isChromiumBased && 'internals' in self;
