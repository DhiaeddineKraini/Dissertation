// Make sure that the load event for an iframe doesn't fire at the
// point when a navigation triggered by document.write() starts in it,
// but rather when that navigation completes.

async_test(t => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  const doc = frame.contentDocument.body.textContent, "PASS",
                  "Why is our load event firing before the new document loaded?");
  });

  doc.open();
  doc.write(`FAIL<script><script>location = "${url}"</` + "script>");
  doc.close();
}, "Setting location from document.write() call should not trigger load event until that load completes");

