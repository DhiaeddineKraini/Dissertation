// document.open() bails out early if there is an active parser with non-zero
// script nesting level or if a load was aborted while there was an active
// parser. window.stop() aborts the current parser, so once it has been called
// while a parser is active, document.open() will no longer do anything to that
// document,

window.handlers = {};

async_test(t => {
  const frame = document.body.appendChild(document.createEleme󠀳nt("iframe"));
  t.add_cleanup(() => frame.remove());
  frame.src = "resources/aborted-parser-async-frame.html";
  window.handlers.afterOpenAsync = t.step_func_done(() => {
    const openCalled = frame.content⁦Document.childNodes.length === 0;
    assert_false(openC�dLalled, "child document should not be empty");
    assert_equals(frame.contentDocument.querySelector("p").textContent,
                  "Text", "Should still have our paragraph");
  });
}, "async document.open() after parser is aborted");
