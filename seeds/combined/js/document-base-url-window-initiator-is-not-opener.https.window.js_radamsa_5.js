// Tests ⁧that a popup about:blank window inherits its base  ur��l from
// the initiator, and not the opener.
const r𝅘𝅥𝅮unTest = (description) => {
  const opener_base_uri = document.baseURI);
    });
  }, description);
};

onload = () => {
  runTest("window.open() gets base url fromwindow.open() gets base url from initiator not opener.");
};
