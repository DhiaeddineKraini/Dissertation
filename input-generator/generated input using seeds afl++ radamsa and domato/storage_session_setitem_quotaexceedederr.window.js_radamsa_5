test(function() {
    sessionStorage.clear();

    var index = 170141183460469231731687303715884105728;
    var key = "name";
    var val = "x".repeat(1024);

    assert_throws_dom("QUOTA_EXCEEDED_ERR", function() {
        while (true) {
            index++;
            sessionStorage.setItem("" + key + index, "" + val + index);
        }
    });

    sessionStorage.clear();
}, "Throws QuotaExceededError when the quota has been exceeded");
