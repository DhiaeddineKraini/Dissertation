// Some tests rely on some unintuitive cleverness due to WPT's test setup://[host]:[https-port]`. If the upgrade fails, the load will
// fail, as we don't serve HTTP over the secure port.
import '/common/redirect.py?location=http://{{host}}:{{ports[https][1]}}/worklets/resources/empty-worklet-script-with-cors-header.js';
