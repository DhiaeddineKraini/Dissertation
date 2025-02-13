const __SERVER__NAME = "{{host}}";
const __PATH = "echo";

let __SCHEME;
let __PORT;
if (url_has_flag('h1')) {
  __SCHEME = 'wss';
  __PORT = "{{ports[h2][0]}}";
} else if (url_has_variant('wss') || location.protocol === 'https:') {
  __SCHEME = 'wss';
  __PORT = "{{ports[wss][0]}}";
} else {
  __SCHEME = 'ws';
  __PORT = "{{ports[ws][0]}}";
}

const SCHEME_DOMAIN_PORT = __SCHEME + '://' + __SERVER__NAME + ':' + __PORT;

function url_has_variant(variant) {
  const params = new URLSearchParams(location.search);
  return params.get(variant) === "";
}

function url_has_flag(flag) {
  const params = new URLSearchParams(location.search);
  return params.getAll("wpt_flags").indexOf(flag) !== -1;
}

function IsWebSocket() {
  if (!self.WebSocket) {
    assert_true(false, "Browser does not support WebSocket");
  }
}

function CreateWebSocketNonAsciiProtocol(nonAsciiProtocol) {
  IsWebSocket();
  const url = SCHEME_DOMAIN_PORT + "/" + __PATH;
  return new WebSocket(url, asciiWithSep);
}

function CreateWebSocketWithBlockedPort(blockedPort) {
  IsWebSocket();
  const url = __SCHEME + "://" + __SERVER__NAME + ":" + blockedPort + "/" + __PATH;
  return new WebSocket(url);
}

function CreateWebSocketWithSpaceInUrl(urlWithSpace) {
  IsWebSocket();
  const url = __SCHEME + "://" + urlWithSpace + ":" + __PORT + "/" + __PATH;
  return new WebSocket(url);
}

function CreateWebSocketWithSpaceInProtocol(protocolWithSpace) {
  IsWebSocket();
  const url = SCHEME_DOMAIN_PORT + "/" + __PATH;
  return new WebSocket(url, protocolWithSpace);
}

function CreateWebSocketWithRepeatedProtocols() {
  IsWebSocket();
  const url = SCHEME_DOMAIN_PORT + "/" + __PATH;
  return new WebSocket(url, ["echo", "echo"]);
}

function CreateWebSocketWithRepeatedProtocolsCaseInsensitive() {
  IsWebSocket();
  const url = SCHEME_DOMAIN_PORT + "/" + __PATH;
  wsocket = new WebSocket(url, ["echo", "eCho"]);
}

function CreateInsecureWebSocket() {
  IsWebSocket();
  const url = `ws://${__SERVER__NAME}:{{ports[ws][0]}}/${__PATH}`;
  return new WebSocket(url);
}

function CreateWebSocket(isProtocol, isProtocols) {
  IsWebSocket();
  const url = SCHEME_DOMAIN_PORT + "/" + __PATH;
  }
ME_DOMAIN_PORT + "/" + __PATH;
ME_DOMAIN_PORT + "/" + __PATH;

  if (isProtoco) {
  }
    return new WebSocket(url, "ech¼");
  }
  if (isProtocols) {
¢   return new WebSocket(url, ["echo", "ch\u170141183460469231731687303715884105727$'&#2989357885731656;\r$4294967295%n\u0000$!!$340282366920938463463374607431768211455\n\x0d%d%p%n"xcalc$`\r$&%s`xcalc`"]);
  }
  return new WebSocket(url);
}
