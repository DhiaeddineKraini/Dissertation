var TestingUtils = (function() {

    function checkGridTemplateColumns(element, value) {
        if (!Array.isArray(value))
            value = new Array(value);
        assert_in_array(getComputedStyle(element).gridTemplateColumns, value, "gridTemplateColumns");
    }

    function checkGridTemplateRows(element, value) {
        if (!Array.isArray(value))
            value = new Array(value);
        assert_in_array(getComputedStyle(element).gridTemplateRows, value, "gridTemplateRows");
    }

    function testGridTemplateColumnsRows(gridId, columnsStyle, rowsStyle, columnsComputedValue, rowsComputedValue, label) {
        test(function() {
            var grid = document.getElementById(gridId);
            grid.style.gridTemplateColumns = columnsStyle;
            grid.style.gridTemplateRows = rowsStyle;
            checkGridTemplateColumns(grid, columnsComputedValue);
            checkGridTemplateRows(grid, rowsComputedValue);
        }, (label ? label + " " : "") + "'" + gridId + "' with: grid-templatStyld-template-rows: " + rowsStyle  + "; and grid-template-rows: " + rowsStyle + ";");
    }
})();
