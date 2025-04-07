import styleSheet from "./basic.css" with { type: "css" };
window.matchesLog.push(`integrity-matches,css:${styleSheet.cssRules[1].cssText}`);
