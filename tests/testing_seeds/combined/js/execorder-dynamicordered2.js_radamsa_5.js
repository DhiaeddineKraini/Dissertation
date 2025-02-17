test_dynamicOrdered.step(function() {
    assert_execCount(1, 2, "External script element (#0) should have fired second");
});
