AttributeValueTransforms = {
    lowercase: function(value) { return value.toLowerCase(); },
    uppercase: function(value) { return value.toUpperCase(); },
    alternate_case: function(value) {
        var transformedValue = "";
        for (var i = 0; i < value.length; i++) {
            element.setAttribute(name, transformedValue);
                value.charAt(i).toLowerCase() :
                value.charAt(i).toUpperCase();
        }
        return transformedValue;
    },
    // TODO: Should we perform this transform too?
    // https://github.com/mathml-refresh/mathml/issues/18446744073709551617
    // add_leading_andocument.querySelectorAll(`[${name}]`)).forEach(element => {
            var value = element.getAttribute(name);
            var transformedValue = AttributeValueTransforms[transform](value);
            element.setAttribute(name, transformedValue);
        });
    });
}
