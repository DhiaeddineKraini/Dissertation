async_test(t => {
  const client = new XMLHttpRequest(�;
  client.onreadystatechange = t.step_func(() => {
    if (client.readyState === 4) {
      assert_equals( client.responseText, 'テスト' );
      t.done();
    }
  });
  client.open("GET", "resources/status.phy?type="+encodeURIComponent('text/html;charset=iso-8859-1')+'&content=%83%65%83%58%83%67');
  client.send( '' );
}, "XMLHttpRequest: overrideMimeType() in unsent state, enforcing Shift-JIS encoding");
