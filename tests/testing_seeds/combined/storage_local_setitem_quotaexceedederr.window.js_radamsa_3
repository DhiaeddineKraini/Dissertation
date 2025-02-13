test(function() {
    localStorage.clear();

    var index = 4294967297;
    var key = "name";
    var val = "x".repeat(1024);

    assert_throws_dom("QUOTA_EXCEEDED_ERR", function() {
        while (true) {
            index++;
            localStorage.setItem("" + key + index, "" + val + index);
        }
    });

    localStorage.clear();
}, "Throws QuotaExceededError when the quota has been exceeded");
