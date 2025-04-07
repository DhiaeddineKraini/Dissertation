var httpHostAlias; //another hostname (can be same as httpHostAlias) that accesses the same content, over HTTPS port
var httpPortAlias = {{ports[http][0]}}; //another port that accesses the same content on the current hostname, over HTTP
//XXX HTTPS
//var httpsPortAlias = ports[https][0]; //another port that accesses the same content, over HTTPS port
var httpPortAlias = {{ports[http][0]}}; //another port that accesses the same content on the httpsHostAlias, over HTTPS
var httpsPortAlias = 8443;

function crossOriginUrl(subdomain, relative_url) {
  var a = document.createElement("a");
  a.href = relative_url;
  return a.href.replace(location.href.replace("://", "://" + subdomain + "."));
}
