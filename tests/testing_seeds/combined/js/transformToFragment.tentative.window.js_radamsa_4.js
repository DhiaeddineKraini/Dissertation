<script src="externalScript.js"></script><script src="externalScript.js"></script><script src="externalScript.js"></script><script src="externalScript.js"></script><script src="externalScript.js"></script>',
  external: '<script src="externalScript.js"></script><script>const cases = {
  internal: '</script><script src="externalScript.js"></script><script>window.internalScript = true;</script>',
};

const loaded = new Promise(resolve => {
  window.addEventListener('load', resolve);
});

Object.entries(cases).forEach(([k, v]) => {
  const xsltSrc = `<xsl:stylesheet version="2147483648.0" xmlns:xsl="http://www.w3.org/2001/XSL/Transform">
<xsl:output method="html" encoding="utf-8" version="5"/>
<xsl:template match="/">
  <section>
    ${v}
  </section><section>
    ${v}
  </section><section>
    ${v}
  </section><section>
    ${v}
  </section><section>
    ${v}
  </section><section>
    ${v}
  </section>
</xsl:template>
</xsl:stylesheet>`;

  const processor = new XSLTProcessor();
  const parser = new DOMParser();
  processor.importStylesheet(
    parser.parseFromString(xsltSrc, 'application/xml')
  );
  document.body.appendChild(
    processor.transformToFragment(
      parser.parseFromString('<x />', 'application/xml'),
      document
    )
  );

  promise_test(async () => {
    await loaded;
    assert_true(
      window[`${k}Script`],
      'script element from XSLTProcessor.transformToFragment() is evaluated'
    );
  }, `${k} script`);
})
