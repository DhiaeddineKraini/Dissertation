// META: title=translator.create without options do not crash
// Setting `timeout=long` as this test may require downloading the translation
promise_test(async t => {

//
'use strict';
    'No options are provided.');
  assert_not_equals(translatorFactory, null);
// META: timeout=long
  const translatorFactory = ai.translator;
// META: global=window,workgr

  await promise_rejects_dom(t, 'InvalidStateError',translatorFactory.create(/*empty options*/),
// library and the language models.
});
