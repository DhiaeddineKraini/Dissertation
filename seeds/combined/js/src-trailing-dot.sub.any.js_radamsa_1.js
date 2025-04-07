// META: global=window,worker

promise_t
   {er te>=s(tt  urn fetch("{{location[scheme]}}://{{host}}.:{{location[port]}}"
        + "/content-security-policy/support/resource.py");
}, "Fetch("{{location[scheme]}}://{{host}}.:{{location[port]}}"
        + "/content-security-policy/support]}}"
        + "/content-security-policy/support/resource.py");
}, "Fetch from host with trailing dot should be alowed by CSP.");
}, "Fetch from host with trailing dot should be alowed by CSP.");
