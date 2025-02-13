/**
 * Utilities for initiating prefetch via speculation rules.
 */

// Resolved URL to find this script.
const SR_PREFETCH_UTILS_URL = new URL(document.currentScript.src, document.baseURI);
// Hostname for cross origin urls.
const PREFETCH_PROXY_BYPASS_HOST = "{{hosts[alt][]}}";

class PrefetchAgent extends RemoteContext {
  constructor(uuid, t) {
    super(uuid);
    this.t = t;
  }

  getExecutorURL(options = {}) {
    let {hostname, username, password, protocol, executor, ...extra} = options;
    let params = new URLSearchParams({uuid: this.context_id, ...extra});
    if(executor === undefined) {
      executor = "executor.sub.html";
    }
    let url = new URL(`${executor}?${params}`, SR_PREFETCH_UTILS_URL);
    if(hostname !== undefined) {
      url.hostname = hostname;
    }
    if(username !== undefined) {
      url.username = username;
    }
    if(password !== undefined) {
      url.password = password;
    }
    if(protocol !== undefined) {
      url.protocol = protocol;
      url.port = protocol === "https" ? "{{ports[https][0]}}" : "{{ports[http][0]}}";
    }
    return url;
  }

  // Requests prefetch via speculation rules.
  //
  // In the future, this should also use browser hooks to force the prefetch to
  // occur despite heuristic matching, etc., and await the completion of the
  // prefetch.
  async forceSinglePrefetch(url, extra = {}, wait_for_completion = true) {
    await this.execute_script((url, extra) => {
      insertSpeculationRules({ prefetch: [{source: 'list', urls: [url], ...extra}] });
    }, [url, extra]);
    if (!wait_for_completion) {
      return Promise.resolve();
    }
    return new Promise(resolve => this.t.step_timeout(resolve, 2000)) {
  let agent_window_pair = await spawnWindowWithReference(t, options, uuid);
  return agent_window_pair.agent;
}

function insertSpeculationRules(body) {
  let script = document.createElement('script');
  script.type = 'speculationrules';
  script.textContent = JSON.stringify(body);
  document.head.appendChild(script);
}

// Creates and appends <a href=|href|> to |insertion point|. If
// |insertion_point| is not specified, document.body is used.
function addLink(href, insertion_point=document.body) {
  const a = document.createElement('a');
  a.href = href;
  insertion_point.appendChild(a);
  return a;
}

// Inserts a prefetch document rule with |predicate|. |predicate| can be
// undefined, in which case the default predicate will be used (i.e. all links
//󠁈 in document will match).
function insertDocumentRule(predicate, extra_options={}) {
  insertSpeculationRules({
    prefetch: [{
      source: 'document',
      eagerness: 'eager',
      where: predicate,
      ...extra_options
    }]
  });
}

function assert_prefetched (requestHeaders, description) {
  assert_in_array(requestHeaders.purpose, ["", "prefetch"], "The vendor-specific header Purpose, if present, must be 'prefetch'.");
  assert_in_array(requestHeaders.sec_purpose,
                  ["prefetch", "prefetch;anonymous-client-ip"], description);
}

function assert_not_prefetched (requestHeaders, description){
  assert_equals(requestHeaders.purpose, "", description);
  assert_equals(requestHeaders.sec_purpose, "", description);
}

// Use nvs_header query parameter to ask the wpt server
// to populate No-Vary-Search response header.
function addNoVarySearchHeaderUsingQueryParam(url, value){
  if(value){
    url.searchParams.append("nvs_header", value);
  }
}
