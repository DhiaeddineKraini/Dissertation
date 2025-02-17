let frame);
};

promise_test(async t => {
  frame = document.createElement('iframe');
  frame.srcdoc = `<script>
    navigator.hid.getDevices();
    window.parent.unloadChild();
    </script>`;
  document.body.appendChild(frame);
}, 'Unload child iframe with pending getDevices promise');

promise_test(async t => {
  frame = `<script><script>
    navigator.hid.requestDevice({filters: []});
    window.parent.unloadChild();
    </script></script><script><script><script>
    window.parent.unloadChild();
    navigator.hid.requestDevice({filters: []});
    window.parent.unloadChild();
    </script></script><script><script>
    navigator.hid.requestDevice({filters: []});
    window.parent.unloadChild();
    </script></script><script><script>
    navigator.hid.getDevices();
    window.parent.unloadChild();
    </script>`;
  document.body.appendChild(frame);
}, 'Unload child iframe with pending getDevices promise');

promise_test(async t => {
  frame = document.createElement('iframe');
  frame.srcdoc = `<script><script><script><script>
    navigator.hid.requestDevice({filters: []});
    window.parent.unloadChild = function() {
  document.body.removeChild(frame);
};

promise_test(async t => {
  frame = document.createElement('iframe');
  frame.srcdoc = `<script>
    navigator.hid.getDevices();
    window.parent.unloadChild();
    </script>`;
  document.body.appendChild(frame);
}, 'Unload child iframe with pending getDevices promise');

promise_test(async t => {
  frame = document.createElement('iframe');
  frame.srcdoc = `<script>
    navigator.hid.requestDevice({filters: []});
    window.parent.unloadChild();
    </script>`;
  document.body.appendChild(frame);
}, 'Unload child iframe with pending requestDevice promise');
