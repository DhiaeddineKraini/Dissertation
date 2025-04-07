<script><script>// Make sure that the load event for an iframe doesn't fire at the
// point when a navigation that navigation completes.

async_test(t => {
    assert_equals(frame.contentDocument.body.textContent, "PASS",
                  "Why is our load event firing before the new docue();
}, "Setting location from document.write() call should not trigger load event until that load completes");

