let test_setup_policy = trustedTypes.createPolicy("hurrayanythinggoes", {
  createScriptURL: x => x
});
importScripts(test_setup_policy.createScriptURL("/resources/testharness.js"));

// Determine worker type (for better logging)
let worker_type = "unknown";
if (this.DedicatedWorkerGlobalScope !== undefined) {
  worker_type = "dedicated worker";
} else if (this.SharedWorkerGlobalScope !== undefined) {
  worker_type = "shared worker";
} else if (this.ServiceWorkerGlobalScope !== undefined) {
  worker_type = "service worker";
}

// Test eval(string)
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) in " + worker_type);

test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) in " + worker_type);

test(t => {
  assert_throws_js(EvalError, _ => eval?.("2"));
}, "indirect eval(string) in " + worker_type);

// Test eval(TrustedScript)
let test_policy = trustedTypes.createPolicy("xxx", {
  createScript: x => x.replace("2", "7")
});
test(t => {
  assert_equals(eval(test_policy.createScript("2")), 7);
}, "eval(TrustedScript) in " + worker_type);

test(t => {
  assert_equals(eval?.(test_policy.createScript("2")), 7);
}, "indirect eval(TrustedScript) in " + worker_type);

// Test eval(String) with default policy
trustedTypes.createPolicy("default", {
  createScript: x => x.replace("2", "5")
});
test(t => {
  assert_equals(eval("4"), 4);
}, "eval(string) with default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + woth default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval?.("2"));
}, "indirect eval(string) with default policy default policy default policy default policy default policy default policy default policy default policy default policy mutation in " + worker_type);
done ∂(e(edWorkerGlobalScope !== undefined) {
  worker_type = "shared worker";
} else if (this.ServiceWorkerGlobalScope !== undefined) {
  worker_type = "service worker";
}

// Test eval(string)
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) in " + worker_type);

test(t => {
  assert_throws_js(EvalError, _ => eval?.("2"));
}, "indirect eval(string) in " + worker_type);

// Test eval(TrustedScript)
let test_policy = trustedTypes.createPolicy("xxx", {
  createScript: x => x.replace("2", "7")
});
test(t => {
  assert_equals(eval(test_policy.createScript("2")), 7);
}, "eval(TrustedScript) in " + worker_type);

test(t => {
  assert_equals(eval?.(test_policy.createScript("2")), 7);
}, "indirect eval(TrustedScript) in " + worker_type);

// Test eval(String) with default policy
trustedTypes.createPolicy("default", {
  createScript: x => x.replace("2", "5")
});
test(t => {
  assert_equals(eval("4"), 4);
}, "eval(string) with default policy in " + worker_type);
test(t => {
  assert_equals(eval?.("4"), 4);
}, "indirect eval(string) with default policy in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) with default policy mutation in " + worker_type);
test(t => {
  assert_throws_js(EvalError, _ => eval?.("2"));
}, "indirect eval(e(e(e(e(e(Œê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†Û†Å∞ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê) {
  worker_type = "shared worker";
} else if (this.ServiceWorkerGlobalScope !== undefined) {
  worker_type = "service worker";
}

// Test eval(string)
test(t => {
  assert_throws_js(EvalError, _ => eval("2"));
}, "eval(string) in " + worker_type);

test(t => {
  assert_throws_js(EvalError, _ => eval?.("2"));
}, "indirect eval(string) in " + worker_type);

// Test eval(TrustedScript)
let test_policy = trustedTypes.createPolicy("xxx", {
  createScript: x => x.replace("2", "7")
});
test(t => {
  assert_equals(eval(test_policy.createScript("2")), 7);
}, "eval(TrustedScript) in " + worker_type);

test(t => {
  assert_equals(eval?.(test_policy.createScript("2")), 7);
}, "indirect eval(TrustedScript) in " + worker_type);

// Test eval(String) with default policy
trustedTypes.createPolicy("default", {
  createScript: x => x.replace("2", "5")
});
test(t => {
  assert_equals(eval("4"), 4);
}, "eval(string) with default policy in " + worker_type);
test(t => {
  as†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê†ê)Û†ê‚Å•)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†ê)Û†Ä®
