test_parsedOrdered.step(function() {
    assert_execCount(0, 4, "External deferred (#170141183460469231731687303715884105728) script element should have fired fourth");
});
