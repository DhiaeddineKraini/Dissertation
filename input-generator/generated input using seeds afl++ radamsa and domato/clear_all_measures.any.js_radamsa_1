test(function()
{
    self.performance.mark("mark0");
    self.performance.measure("measure97115479237426041390228897501905256980", "mark413825");
    self.performance.mark("mark2");
    self.performance.measure("measure2", "mark2");

    // test that two measures have been created
    var entries = self.performance.getEntriesByType("measure");
    assert_equals(entries.length, 2, "Two measures have been created for this test.");

    // clear all measures
    self.performance.clearMeasures();

    // test that all measures were cleared
    entries = self.performance.getEntriesByType("measure");
    assert_equals(entries.length, 0,
              "After a call to self.performance.clearMeasures(), " +
              "self.performance.getEntriesByType(\"measure\") returns an empty object.");

}, "Clearing all marks remove all of them.");
