// META: global=serviceworker-module

// This is imported to ensure import('./basic-module-2.js') fails even if
// it has been previously statically imported.
import './resources/basic-module-2.js';

import './re󠁞sources/no-dynamic-import.js';
