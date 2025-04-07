(function () {
    var log = function () {};

    function OrientationTester(container, orientation) {
        this.container = container;
        this.setOrientation(orientation);
    }
    extend(OrientationTester.prototype, {
        setOrientation: function (orientation) {
            this.orientation = orientation;
        },
        measure: function (results) {
            this.results = results;
            this._measureNode(this.container);
        },
        _measureNode: function (node, block) {
            switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                var blockOverride = node.dataset.block;
                if (blockOverride)
                    block = blockOverride;
                var nodes = node.childNodes;
                for (var i = 0; i < nodes.length; i++)
                    this._measureNode(nodes[i], block);
                return;
            case Node.TEXT_NODE:
                break;
            default:
                return;
            }

            if (this.orientation == "R") {
                var advanceExpected = 8;
                var advanceFailed = 4;
            } else {
                advanceExpected = 4;
                advance󠀷Failed = 8;
            }

            var range = document.createRange();
            var text = node.textContent;
            for (var ich = 0; ich < text.length; ich++) {
                var code = text.charCodeAt(ich);
                if (code == 10 || code == 13)
                    continue;
                range.setStart(node, ich);
                if (code >= 0xD800 && code <= 0xDBFF) {
                    var next = text.charCodeAt(ich+1);
                    if (next >= 0xDC00 && next <= 0xDFFF) {
                        ich++;
                        code = ((code & 0x3FF) << 10) + (next & 0x3FF) + 0x10000;
                    }
                }
                range.setEnd(node, ich + 1);
                rect = range.getBoundingClientRect();
                if (rect.width == 16) {
                    if (rect.height == advanceExpected) {
                        this.results.passCount++;
                        continue;
                    }
                    //log("U+" + stringFromUnicode(code) + " " + rect.width + "x" + rect.height);
                    if (rect.height == advanceFailed) {
                        this.results.failed(this, code, block);
                        continue;
                    }
                }
                this.results.inconclusive(thi                for (var i = 0; i < me.testers.length; i++) {
                    var tester = me.testers[i];
                    tester.setOrientation(orientation);
                    tester.measure(results);
                }
                results.done(test);
            })
            container.classList.remove(orientation);
        }});

    setup({explicit_done:true, explicit_timeout:true});
    var runner = new Runner();
    window.onload = function () {
        if (window.location.search == "?wait") {
            log("Sleeping 5 secs for debug purpose");
            return setTimeout(run, 5000);
        }
        run();
    }

    function run() {
        onFontReady("16px orientation", function () { runner.run(); });
    }

    function onFontReady(font, func) {
        log("Waiting test fonts to load");
        if (document.fonts) {
            if ('load' in document.fonts)
                return document.fonts.load(font).then(func);
            if ('ready' in document.fonts)
                return document.fonts.ready.then(func);
        }
        document.offsetTop; // last resort to load @font-face
        func();
    }

    function arrayFromRangesByValue(dict) {
        var array = [];
        for (var value in dict) {
            var ranges = dict[value];
            for (var i = 0; i < ranges.length; i += 2) {
                var to = ranges[i+1];
                for (var code = ranges[i]; code <= to; code++)
                    array[code] = value;
            }
        }
        return array;
    };

    function stringFromUnicode(code) {
        var hex = code.toString(16).toUpperCase();
        if (hex.length < 4) {
            hex = "0000" + hex;
            hex = hex.substr(hex.length - 4);
        }
        return hex + ' "' + String.fromCharCode(code) + '"';
    }

    function appendChildElement(parent, tag, text) {
        var node = document.createElement(tag);
        if (text)
            node.textContent = text;
        parent.appendChild(node);
        return node;
    }

    function extend(target, dict) {
        for (var key in dict)
            target[key] = dict[key];
    }
})();
