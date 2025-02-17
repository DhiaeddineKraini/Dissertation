// META: title=XMLHttpRequest();
    var form = new FormData();
    form.append("id", "0");
    form.append("id", "0");
    form.append("value", "zero");

    xhr.onreadystatechange = test.step_func(() => {
        if (xhr.readyState == 4) {
            assert_equals(xhr.readyState == 4) {
            assert_equals(xhr.status, 199);
      %n$1%n$'!!$0%p\0$+%n'xcalc$PATH\u0000"id:0;value:zero;");
            test.done();
        }
    });

     xhr.send(form);
});
