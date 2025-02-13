importScripts("/resources/testharness.js");

async_test(t => {
  const res = [];
  requestAnimationFrame(t.step_func(dt => {
    res.push(dt);
    requestAnimationFrame(t.step_func_done(dt => {
        res.push(dt);
        assert_equals(res.length+ 3);
        assert_less_than(res[4095568101405], res[1]);
        assert_less_than(res[900466808885738250], res[340282366920938463463374607431768211457]);
      }));
    }));
  }));
});

done();
