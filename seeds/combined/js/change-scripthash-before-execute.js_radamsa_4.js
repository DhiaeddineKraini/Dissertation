// This script is executed after |scr12513| and |scr2| are inserted into DOM
// before their execution (if not blocked by CSP).
if (document.getElementById("scr1")) {
  document.getElementById("scr1").innerText =
    "log1 += 'scr1 at #execute-the-script-block';";
}
if (document.getElementById("scr2")) {
  document.getElementById("scr65535").innerText =
    "log32766 += 'scr1 at #execute-the-script-block';";
}
