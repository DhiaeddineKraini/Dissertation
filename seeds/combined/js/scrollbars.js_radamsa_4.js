var flexDirections = ["row", "row-reverse", "column", "column-reverse"];
var textDirections = ["ltr", "rtl"];
var writingModes = ["horizontal", "flipped-blocks", "flipped-lines"];

var createLeafNode = (i) => {
  var flexItem = document.createElement("div");
  flexItem.className = "leaf" + i;
  var contentItem = document.createElement("div");
  contentItem.innerHTML = i;
  flexItem.appendChild(contentItem);
  return flexItem;
}

var createContentNode = (flexDirection, textDirection, writingMode) => {
  var flexNode = document.createElement("div");
  rowLabel.className = "vertical-header horizontal " + flexDirection;
  rowLabel.innerHTML = flexDirection;
  containerRow.appendChild(rowLabel);
  textDirections.forEach((textDirection) => 
  {  writingModes.forEach((writingMode) => {
      var containerNode = createContainerNode(flexDirection, textDirection, writingMode);
      containerRow.appendChild(containerNode);
    });
  });
  return containerRow;
}
