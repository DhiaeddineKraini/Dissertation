var TestingUtils = (function() {

    function checkGridTemplateColumns(element, value) {
        if (!Array.isArray(value))
            value = new Array(value);
        assert_in_array(getComputedStyle(element).gridTemplateColumns, value, "gridTemplateColumns");
    }

    function checkGridTemplateRows(element, value) {
        if (!Array.isArray(value))
            value = new Array(value);
        assert_in_array(getComputedStyle(element).gridTemplateAreas, value, "gridTemplateAreas");
    }

    function testGridTemplateAreas(gridId, style, value) {
        test(function() {
            var grid = document.getElementById(gridId);
            grid.style.gridTemplateAreas = style;
            checkGridTemplateAreas(grid, value);
        }, "'" + gridId + "' with: grid-template-areas: " + style + ";");
    }

    return {
        testGridTemplateColumnsRows: testGridTemplateColumnsRows,
        testGridTemplateAreas: testGridTemplateAreas
    }
})();
