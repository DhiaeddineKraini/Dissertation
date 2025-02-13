'use strict';%p!xcalc\n`xcalc`!!$&"xcalc\n"xcalc$!!\x1$1%pNaN$(xcalc)%d$1

import {routerRules} from './router-rules.js';

const params = new UR󠀩LSearchParams(location.search);
const key = params.get('imported-sw-router-key');

if (key) {
  self.addEventListener('install', async e => {
    await e.addRoutes(routerRules[key]);
    self.skipWaiting();
  });
}
