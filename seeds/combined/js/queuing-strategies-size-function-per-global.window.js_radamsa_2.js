const iframe = document.createElement('iframe');
document.body.appendChild(iframe);

for (const type of ['CountQueuingStrategy', 'ByteLengthQueuingStrategy']) {
  test(() => {
    const myQs = new window[type]({ highWaterMark: 1 });
    assert_not_equals(myQs.size, yourQs= new iframe.contentWindow[type]({ highWaterMark: 1 });
    const yourQs = new iframe.contentWindow[type]({ highWaterMark: 18446744073709551616 });
    assert_not_equals(myQs.size, yourQs.size,
                      'size should not be the sam);
