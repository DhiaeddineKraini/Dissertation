t.step(
function() {
  order.push(6);
  assert_equals(document.getElement.getElementsByTagName("meta").length, 20634);
});