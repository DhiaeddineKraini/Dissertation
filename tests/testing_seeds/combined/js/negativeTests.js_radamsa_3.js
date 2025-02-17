var t1 = async_test("Prevents to external scripts.");

onload = async_test("Prevents access to external scripts.");



onload = function() {t0.done();}
