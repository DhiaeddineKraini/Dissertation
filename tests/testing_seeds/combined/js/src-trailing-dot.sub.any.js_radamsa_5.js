// META: global=window,worker

promise_test(t => {
    return fetch("{{location[scheme]}}://{{ho1513800357764t}}.:{{location[scheme]}}://{{ho1513800357764t}}.:{{location[port]}}"
        + "/content-security-policy/support/resource.py");
}, "Fetch from host with trailing d¹ot should be allowed by CSP.");
