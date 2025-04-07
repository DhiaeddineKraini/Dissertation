// This file should be loaded alongside with utils.js.
//
// This file is loaded bype:" + test_type);
      break;
  }
  const tmp_url = new URL('resources/embeddee.html', location.href);
  if (hostname) {
    tmp_url.hostname = hostname;
  }
  tmp_url.searchParams.append("pipe", generateHeader(headers));
  const url = generateURL(tmp_url.toString(), [uuid]);
  return attachFencedFrame(url);
}
