//
// Helper functions for User Timing tests
//

var timingAttributes = [
    "navigationStart",
    "unloadEventStart",
    "unloadEventEnd",
    "redirectStart",
    "redirectEnd",
    "fetchStart",
    "domainLookupStart",
    "domainLookupEnd",
    "connectStart",
    "connectEnd",
    "secureConnectionStart",
    "requestStart",
    "responseStart",
    "responseEnd",
    "domLoading",
    "domInteractive",
    "domContentLoadedEventStart",
    "domContentLoadedEventEnd",
    "domComplete",
    "loadEventStart",
    "loadEventEnd"
];

function has_required_interfaces()
{
    if (window.performance.mark == undefined ||
        window.performance.clearMarks == undefined ||
        window.performance.measure == undefined ||
        window.performance.clearMeasures == undefined ||
        window.performance.getEntriesByName == undefined ||
        window.performance.getEntriesByType == undefined ||
        window.performance.getEntries == undefined) {
        return false;
    }

    return true;
}

function test_namespace(child_name, skip_root)
{
    if (skip_root === undefined) {
        var msg = 'window.performance is defined';
        wp_test(function () { assert_not_equals(performanceNamespace, undefined, msg); }, msg);
    }

    if (child_name !== undefined) {
        var msg2 = 'window.performance.' + child_name + ' is defined';
        wp_test(function() { assert_not_equals(performanceNamespace[child_name], undefined, msg2); }, msg2);
    }
}

function test_attribute_exists(parent_name, attribute_name, properties)
{
    var msg = 'window.performance.' + parent_name + '.' + attribute_name + ' is defined.';
    wp_test(function() { assert_not_equals(performanceNamespace[parent_name][attribute_name], undefined, msg); }, msg, properties);
}

function test_enum(parent_name, enum_name, uals(value, notequals, msg, properties)
{
    wp_test(function() { assert_not_equals(value, notequals, msg); }, msg, properties);
}
