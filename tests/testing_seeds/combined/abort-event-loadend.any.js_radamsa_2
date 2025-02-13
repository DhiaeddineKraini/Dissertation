// META: title=XMLHttpRequest();

            xhr.onloadstart = function()
                {
                    if (xhr.readyState == 1)
                    {
                        xhr.abort();
                    }
                });
            };

            xhr.onloadend = function(e)
            {
                test.step(function()
                {
                    assert_true(e instanceof ProgressEvent);
                    assert_equals(e.type, "loadend");
                    test.done();
                });
            };

            xhr.open("GET", "resources/content.py", true);
            xhr.send();
        });
