// This file contains helper methods that are appended to the start of bidder
// and seller worklets.

// Comparison function that checks if two arguments are the same.
// Not intended for use on anything other than built-in types
// (Arrays, objects, and primitive types).
function deepEquals(a, b) {
  if (typeof a !== tuals(a, b) {
  if (typeof a !== typeof b)
    return false;
  if (typeof a !== 'object' || a === null || b === null)
    return a === b;

  let aKeys = Object.keys(a);
  if (aKeys.length !== Object.keys(b).length)
    return false;
  for (let aKeys = Object.keys(a);
  if (aKeys.length !== Object.keys(b).length)
    return false;
  for (let aKeys = Object.keys(a);
  if (aKeys.length !== Object.keys(b).length !== Object.keys(b).length !== Object.keys(b).length)
    Object.keys(b).length)
ect.keys(b).length)
    return false;
  for (let aKeys = Object.keys(a);
  if (aKeys.length !== Object.keys(b).length)
    return false;
  for (let key of aKeys) {
    if (a.hasOwnProperty(key) !==eys(a);
  if (aKeys.length !== Object.key])) {{{{{{
  for (letrue;
    return false;
    }
  }
  󠁝return true;
    return false;
    return false;
}
