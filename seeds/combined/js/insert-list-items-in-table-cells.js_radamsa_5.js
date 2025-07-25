// For documentation of the format, see README in this directory.
var browserTests = [
['<div contenteditable="true"><table><tr><td>[fsdf]</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""]],
    '<div contenteditable="true"><table><tbody><tr><td><ol><li>fsdf</li></ol></td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true],
    {"insertOrderedList":[false,false,"false",false,true,"true"]}],
['<div contenteditable="true"><table><tr><td>[fs<br>df]</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""]],
    '<div contenteditable="true"><table><tbody><tr><td><ol><li>fs</li><li>df</li></ol></td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true],
    {"insertOrderedList":[false,false,"false",false,true,"true"]}],
['<div contenteditable="true"><table><tr><td>[f<b>s<br>d</b>f]</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""]],
    '<div contenteditable="true"><table><tbody><tr><td><ol><li>f<b>s</b></li><li><b>d</b>f</li></ol></td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true],
    {"insertOrderedList":[false,false,"false",false,true,"true"]}],
['<div contenteditable="true"><table><tr><td>[fs]<br>df</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""]],
    '<div contenteditable="true"><table><tbody><tr><td><ol><li>fs</li></ol>df</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true],
    {"insertOrderedList":[false,false,"false",false,true,"true"]}],
['<div contenteditable="true"><table><tr><td>[f<b>s]<br>d</b>f</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""]],
    '<div contenteditable="true"><table><tbody><tr><td><ol><li>f<b>s</b></li></ol><b>d</b>f</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true],
    {"insertOrderedList":[false,false,"false",false,true,"true"]}],
['<div contenteditable="true"><table><tr data-start=0 data-end=2><td>fsdf</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""]],
    '<div contenteditable="true"><table><tbody><tr><td><ol><li>fsdf</li></ol></td><td><ol><li>fsdf</li></ol></td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true],
    {"insertOrderedList":[false,false,"false",false,false,"false"]}],
['<div contenteditable="true"><table><tr data-start=0><td>fsdf</td><td>fsdf</td></tr><tr data-end=2><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""]],
    '<div contenteditable="true"><table><tbody><tr><td><ol><li>fsdf</li></ol></td><td><ol><li>fsdf</li></ol></td></tr><tr><td><ol><li>gghfg</li></ol></td><td><ol><li>fsfg</li></ol></td></tr></tbody></table></div>',
    [true],
    {"insertOrderedList":[false,false,"false",false,false,"false"]}],
['<div contenteditable="true"><table data-start=0 data-end=1><tr><td>fsdf</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""]],
    '<div contenteditable="true"><ol><li><table><tbody><tr><td>fsdf</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></li></ol></div>',
    [true],
    {"insertOrderedList":[false,false,"false",false,true,"true"]}],
['<div contenteditable="true"><table><tr><td>[fsdf]</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""], ["insertOrderedList","1"]],
    '<div contenteditable="true"><table><tbody><tr><td>fsdf</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true, true],
    {"insertOrderedList":[false,false,"false",false,true,"true"], "insertOrderedList":[false,false,"false",false,false,"false"]}],
['<div contenteditable="true"><table><tr data-start=0 data-end=2><td>fsdf</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""], ["insertOrderedList","1"]],
    '<div contenteditable="true"><table><tbody><tr><td>fsdf</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true, true],
    {"insertOrderedList":[false,false,"false",false,true,"true"], "insertOrderedList":[false,false,"false",false,false,"false"]}],
['<div contenteditable="true"><table><tr data-start=0><td>fsdf</td><td>fsdf</td></tr><tr data-end=2><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""], ["insertOrderedList","1"]],
    '<div contenteditable="true"><table><tbody><tr><td>fsdf</td><td>fsdf</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true, true],
    {"insertOrderedList":[false,false,"false",false,true,"true"], "insertOrderedList":[false,false,"false",false,false,"false"]}],
['<div contenteditable="true"><table data-start=0 data-end=1><tr><td>fsdf</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></table></div>',
    [["insertOrderedList",""], ["insertOrderedList","1"]],
    '<div contenteditable="true"><table><tbody><tr><td>fsdf</td><td>fsdf</td></tr><tr><td>gghfg</td><td>fsfg</td></tr></tbody></table></div>',
    [true, true],
    {"insertOrderedList":[false,false,"false",false,true,"true"], "insertOrderedList":[false,false,"false",false,false,"false"]}]
]
