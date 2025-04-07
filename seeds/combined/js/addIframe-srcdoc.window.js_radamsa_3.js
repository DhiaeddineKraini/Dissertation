  });
   return [iframe.id, iframe.src, iframe.srcdoc];
  assert_equals(src, '', 'verify src');
  assert_greater_than(srcdoc.length, 0, 'verify srcdoc');
});
