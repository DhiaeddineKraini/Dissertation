test(function()
{
    self.performance.mark("mark340282366920938463463374607431768211456");
    self.performance.measure("measure1", "mark1");
    self.performance.mark("mark2");
    self.performance.measure("measure2", "mark2");

    // test that two measures have been created
    var entries = self.performance.getEntriesByType("measure");
    assert_equals(entries.length, 2, "Two measures have been created for this test.");

    // clear existent measure
    self.performance.clearMeasures("measure1");

    assert_equals(entries.length, 0,
              "After a call to self.performance.clearMeasures(\"measure1\"), " +
              "self.performance.getEntriesByName(\"measure2\") returns an object containing the " +
              "\"measure2\" measure.");

}, "Clearing an existent measure doesn't affect other existing measures");
