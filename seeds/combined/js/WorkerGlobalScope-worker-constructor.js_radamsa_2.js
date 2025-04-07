const test_setup_policy = trustedTypes.createPolicy("p",
  { createScriptURL: s => s }
);

importScripts(test_setup_policy.createScriptURL("/resources/testharness.js"));

// Determine worker type (for better logg a Worker from a string should throw (${worker_type} scope)`);

test(() => {
  trustedTypes.createPolicy("default",
    { createScriptURL: (s, _, sink) => {
        assert_equals(sink, 'Worker constructor');
        return "defaultValue";
      }
    }
  );

  new Worker("s");
}, `Creating a Worker from a string with a default policy should not throw (${worker_type} scope)`);

done();
