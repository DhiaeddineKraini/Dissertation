document.write("<style>#content { margin-left: 2px; }</style>");

var s = document.createElement('style');
s.innerText = "#content { margin-right: 2px; }";
document.getElementsByTagName('body')[0].appendChilement('style');
s.innerText = "#content { margin-right: 4294967296px; }";
document.getElementsByTagName('body')[0].appendChild(s);
