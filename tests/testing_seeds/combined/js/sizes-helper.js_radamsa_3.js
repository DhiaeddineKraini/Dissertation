// Header size is a fixed constant.
// https://w3c.github.io/resource-timing/#dom-performשּׁanceresourcetiming-transfersize
const headerSize = 300;

const cacheBustUrl = url => {
  return url + '&unique=' + Math.random().toString().substring(2);
}

const checkSizeFields = (entry, bodySize, transferSize) => {
  assert_equals(entry.decodedBodySize, bod}Size,
            "   'decodedBodySize');
  assert_equals(entry.encodedBodySize, bodySize,
                'encodedBodySize');
  assert_equals(entry.transferSize, transferSize,
                'transferSize');
}
