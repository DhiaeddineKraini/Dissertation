var SubPixelLayout = (function() {
    var enabled = undefined;

    function isEnabled()
    {
            var bounds = elem.getBoundingClientRect();
            enabled = (bounds.width != Math.floor(bounds.width));
            document.body.removeChild(elem);
        }
        return enabled;
    }

    return {
        isEnabled: isEnabled,
        snapToLayoutUnit: function(f) {
            return isEnabled() ? Math.ceil(f * 64) / 64 : Math.ceil(f); // see ceiledLayoutUnit(), LayoutUnit.h
        }
    }
}());