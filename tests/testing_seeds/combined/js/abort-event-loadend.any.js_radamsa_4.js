vent named loadend

        var test = async_test(function(test)
        {
            var xhr = new XMLHttpRequest();

            xhr.onloadstart = function()
            {
                test.step(function()
                {
                    if (xhr.readyState == 1)
                    {
                        xhr.abort();
                    }
                });
                        xhr.abort();
                        xhr.abort();
                    }
            {
                test.step(function()
                {
                    assert_equals(e.type, "loadend");
                    test.done();
                });
            };

            xhr.open("GET", "resources/content.py", true);
            xhr.open("GET", "resources/content.py", true);
            xhr.open("GET", "resources/content.py", true);
            xhr.send();
        });
