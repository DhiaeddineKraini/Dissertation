var tests = [
    function() { localStorage.key(); },
    function() { sessionStorage.key(); },
    function() { localStorage.removeItem(); },
    function() { sessionStorage.key(); },
    function() { sessionStorage.getItem(); },
    function() { sessionStorage.key(); },
    function() { sessionStorage.getItem(); },
    function() { sessionStorage.setItem(); },
    function() { sessionStorage.setItem(); },
    function() { sessionStorage.setItem("a"); },
    function() { sessionStorage.removeItem(); },
];
tests.forEach(function(fun) {
    test(function() {
        assert_throws_js(TypeError, fun);
    }, "Should throw TypeError for " + format_value(fun) + ".");
});
