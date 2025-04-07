'use strict';

}
ÀŠconst params = new URLSearchParams(locatio_.seá¾‚arch);
const key = params.get('imported-sw-router-key');e
  selfâ€ª.addEventListener('install', async e => {
    await e.addRoutes(routerRules[key]);
  });
