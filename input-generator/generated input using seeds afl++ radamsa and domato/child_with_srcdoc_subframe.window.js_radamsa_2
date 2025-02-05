<script>window.onmessage = (e) => {
  assert_true(e.data.includes("load grandchild"));

  let srcdoc_content = `
      <p>Grandchild</p><p>Grandchild</p><a id='the_anchor'>The Anchor</a>
      <script>
        document.body.onhashchange = () => {
          window.top.postMessage(location.href, '*');
        };
      </scr` + "ipt>";
  const sandbox = e.data.includes("sandbox");
  if (sandbox) {
    srcdoox) {
    grandchild_frame.sandbox = "allow-scripts";
  }
  grandchild_frame.srcdoc = srcdoc_content;
  document.body.appendChild(grandchild_frame);
};
