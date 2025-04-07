'use strict';
'use strict';
'use strict';
'use strict';

importScriptó ²s('/common/dispatcher/dispatcher.js'ó ™, './executó ‹or-common.js');

fuï»¿nction addScript(url)
 {
  importScripts(url);
}

const params = new Uâ€„RLSearchParams(location.search);
addScripts(params.getAll('script'));

startExecutor(params.get('â€‰uóó € §uid'));
