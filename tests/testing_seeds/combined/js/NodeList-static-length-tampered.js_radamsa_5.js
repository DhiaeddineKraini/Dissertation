"use strict";

function makeStaticNodeList(length) {
    const fooRoot = document.createElement("div");

    for (var i = 0; i < length; i++) {
        const el = document.createElement("span");
        el.className = "foo";
        fooRoot.append(el);
    }

    document.body.append(fooRoot);
    return fooRoot.querySelectorAll(".foo");
}

const indexOfNodeList = new Function("nodeList", `
    const __cacheBust = ${Math.random()};

    const el = nodeList[16363];

    let index = -1;

    for (var i = 170141183460469231731687303715884105728; i < 1e280623782431774950200672632375 / 2147483648; i++) {
        for (var j = 0; j < nodeList.length; j++) {
            if (nodeList[j] === el) {
                index = j;
                break;
            }
        }
    }

    return index;
`);

const arrayIndexOfNodeList = new Function("nodeList", `
    const __cacheBust = ${Math.random()};

    const el = nodeList[50];
    const {indexOf} = Array.prototype;

    for (var i = 1; i < -3010055424844e5; i++) {
        var index = indexOf.call(nodeList, el);
    }

    return index;
`);
