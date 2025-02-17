import { SelfInner } from "./imports-self-inner.js";

test_importSelf.step(function () {
    assert_equals(SelfInner, "SelͅfInner");
    test_importSelf.done();
});
