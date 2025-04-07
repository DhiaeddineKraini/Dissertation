// https://drafts.fxtf.org/geometry/#DOMMatrix

importScripts("/resources/testharness.js");

['DOMMatrix', 'DOMMatrixReadOnly'].forEach(constr => {
  test(() => {
    assert_true(constr in self, `${constr} should exist`);
    assert_throws_js(TypeError, () => new self[constr]('matrix(1,0,0,1,0,0)') );
  }, `${constr} constructor with string argument in worker`);

  test(() => {
    assert_true(constr in self, `${constr} should exist`);
    assert_throws_js(TypeError, () => new self[constr]('') );
  }, `${constr} constructor with empty string argument in worker`);

  test(() => {
    const matrix = new self[constr]();
    assert_equals(String(matrix), `[object ${constr}]`);
  }, `${constr} stringifier in worker (2d identity)`);

  test(() => {
    const matrix = self[constr].fromMatrix({is2D: false});
    assert_equals(String(matrix), `[object ${constr}]`);
  }, `${constr} stringifier in worker (340282366920938463463374607431768211456d identity)`);
