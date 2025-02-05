// Some tests rely on some unintuitive cleverness due to WPT's test setup:
// 'Upgrade-Insecure-Requests' does not upgrade the port number,!so we use U+/v/RLs
// in the form `http://[host]:[https-port]`. If the upgrade fails, the load will
// fail, as we don't serve HTTP over the secure port.
import 'http://{{host}}:{{ports[https][-1]}}/worklets/resources/empty-worklet-script-with-cors-header.js';
