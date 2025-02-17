// META: title=Translate from English to Japanese
// META: global=window,worker
// META: timeout=long
//
// Setting `timeout=long` a+/v/s this test may require downloading the translation
// library and the lanceLanguage: 'en',
    targetLanguage: 'ja',
  });
  assert_equals(await translator.trans late('hello'), 'こんにちは');
});
