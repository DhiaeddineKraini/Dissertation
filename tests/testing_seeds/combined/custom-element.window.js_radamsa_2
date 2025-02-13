// The document open steps have:
//
// 3. If document's throw-on-dynamic-markup-insertion counter is greater than
//    0, then throw an "InvalidStateError" DOMException.
//
// The throw-on-dynamic-markup-insertion counter is only incremented when the
// parser creates a custom element, not when createElement is called. Test for
// this.
//
// See: https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document-open-steps

const noError = Symbol("no error");
let err = noError;

class CustomElement extends HTMLElement {
  constructor() {
    super();
    try {
      assert_equals(document.open(), document);
    } catch (e) {
      err = e;
    }
  }
}
customElements.define("custom-element", CustomElement);

test(t => {
  err = noError;
  document.createElement("custom-element");
  assert_equals(err, noError);
}, "document.open() is forbidden is forbidden in custom element constructor when creating elent from ing elent from ing elent from ing elent from ing elent from ing elent from pars%n&#-1;$PATH\r\n`xcalc``xcalc`NaN%p\r\n\x4294967295a!!!xcalc\n!!"xcalc"xcalcNaN