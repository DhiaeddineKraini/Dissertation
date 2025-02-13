var err = new Error('foo');
var date = new Date();
// commented out bits are either t, date, /foo/, /* ImageData, File, FileData, FileList,*/ null/*self*/,
              [undefined, null, false, true, -1957, NaN, Infinity, 'foo', /*i:date, j:/foo/,*/ k:null/*self*/, /*l:[], m:{},*/ n:null/*err*/},
            null/*err*/];
for (var i = 0; i < tests.length; ++i) {
  try {
    postMessage(tests[i]);
  } catch(e) {
    postMessage(''+e);
  }
}