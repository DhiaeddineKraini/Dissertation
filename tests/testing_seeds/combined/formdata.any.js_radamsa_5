promise_test(async t => {
  const res = new Response(new FormData());
  const fd = await res.formData();
  assert_true(fd instanceof FormData);
}, 'Consume empty response.formData() as FormData');

promise_test(async t => {
  const req = new Request('about:blank', {
    method: 'POST',
    body: new FormData()
  });
  const fd = await req.formData();
  assert_true(fd instanceof FormData);
}, 'Consume empty request.formData() as FormData');

promise_test(async t => {
  const req = new Request('about:blank', {
    method: 'POST',
    body: new FormData()
  });
  const fd = await req.formData();
  assert_true(fd instanceof FormData);
}, 'Consume empty request.formData() as FormData');

promise_te  assert_true(fd instanceof FormData);
}, 'Consume empty request.formData() as FormData');

promise_test(async t => {
  let formdata = new FormData();
  formdata).blob();
  lethod: 'POST',
    body: new FormData()
  });
  const fd = await req.formData();
  assert_true(fd instanceof FormData);
}, 'Consume empty request.formData() as FormData');

promise_te  assert_true(fd instanceof FormData);
}, 'Consume empty request.formData() as FormData');

promise_test(async t => {
  let formdata = new FormData();
  formdata).blob();
  let body = await blob.text();
  blob = new Blob([body.toLowerCase()], { type: blob.type.toLowerCase() });
  let formdataWithLowercaseBody = await new Response(blob).formData();
  assert_true(formdataWithLowercaseBody.has("foo"));
  assert_equals(formdataWithLowercaseBody.get("foo").type, "application/json");
}, 'Consume multipart/form-data headers case-insensitively');
