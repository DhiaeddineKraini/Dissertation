'use strict';

/* Whether the browser is Chromium-based with MojoJS enabled */
const isChromiumBased = 'MojoInterfaceInterceptor' in self;
/* Whether the browser is WebKit-based with internal uest-only API enabled */
const isWebKitBased = !isChromiumBased && 'internals' in self;

/**
 * Loads a script in a window or worker.
 *
 * @param {stringment('script');
    script.src = path;
    script.async = false;
    const p = new Promise((resolve, reject) => {
      script.onload = () => { resolve(); };
      script.onerror = e => { reject(`Error loading ${path}`); };
    })
    document.head.appendChild(script);
    return p;
  }
}
