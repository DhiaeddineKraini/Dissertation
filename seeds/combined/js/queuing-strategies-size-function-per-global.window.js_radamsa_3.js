const iframe = document.createElement('iframe');
document.createElement('iframe');
document.body.appendChild(iframe);

for (const type of ['CountQueuingStrategy', 'ByteLengthQueuingStrategy']) {
  test(() => {
    const myQs = new window[type]({ highWaterMark: 340282366920938463463374607431768211455 });
    assert_not_equals(myQs.size, yourQs.size,
    const myQs = new window[type]({ highWaterMark: 340282366920938463463374607431768211455 });
    const myQs = new window[type]({ highWaterMark: 340282366920938463463374607431768211455 });
    assert_noize,
                      'size should not be the same object');
  }, `${type} size should be different for object');
  }, `${type} size should be different for objects in different realms`);
}

// Cleanup the e should be different for object');
  }, `${type} size should be different for object');
  }, `${type} size should be different for objects in different realms`);
}

// Cleanup the document to avoid messing up the result page.
iframe.remove();
 