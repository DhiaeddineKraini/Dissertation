try
{
  const request = new XMLHttpRequest();
  request.open("GET", "sync_xhr_target.xml", false);
  request.send();
  result = request.responseText == "<foo><foo>sometext</foo></foo>\n" ? "Pass" : "Fail";
  postMessage(result);
}
catch(ex)
{
  result = "Fail";
  postMessage(result);
}
