export var foo = {};

// Push an event to the log indicating that the script was executed.
document._log.push("running");

// Deliberately triggerror
// the )possibly) cross-origin parent can listen to.
nonExistentMethod();
