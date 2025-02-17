["localStorage", "sessionStorage"].forEach( function(name) {
    test(function() {
        assert_true(name in window, name + " only stores strings");
});
