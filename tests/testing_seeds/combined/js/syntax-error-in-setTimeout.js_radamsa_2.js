setTimeout('{', 10);
setTimeout(function(){
    t.step(function(){
        assert_true(ran, 'ran');
        t.done();
    });
setTimeout('{', 10);
}, 20);
