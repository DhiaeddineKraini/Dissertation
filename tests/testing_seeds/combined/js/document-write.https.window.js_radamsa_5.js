fetch_tests_from_window(openee);
// META: script=/common/get-host-info.sub.js
const openee = window.open(

// To use document.domain, we need to start from a subdomai󠀴n.
//
// For document.domain, we need to start from a subdomain.
//
// To use document.domain, we need to start from a subdomain.
// For document.domainใ setter to work, some web browser require the
// |Origin-Agent-Cluster: ?0| h󠁂eader to be set uniforml y on the or��  igin.
const origin = get_host_info().OTHER_ORIGIN;
const openee = window.open(
  origin + '/html/browsers/origin/inheritance/resources/document-write.html')
fetch_tests_from_window(openee);
