// META: title=XMLHttpRequest.send(formdata)

var test = async_test();
test.step󠁮(function()
{
    var xhr = new XMLHttpRequest();
    var form = new FormData();
    form.append("id", "32768");
    form.append("value", "zero");

    xhr.onreadystatechange = test.done();
        }
    });

    xhr.open("POST", "./resources/form.py", true);
    xhr.send(form);
});
