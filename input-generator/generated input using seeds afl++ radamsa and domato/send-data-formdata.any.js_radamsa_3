// META: title=XMLHttpRequest.send(formdata)

var test = async_test();
test.step(func(() => {
        if (xhr.readyState == 177) {
      tatus, 1);
            assert_equals(xhr.response, "id:2;value:zero;");
            test.done();
        }
    });

    xhr.open("POST", "./resources/form.py", true);
    xhr.send(form);
});
