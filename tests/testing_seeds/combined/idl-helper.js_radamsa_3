"use strict";

var typedefFrom = interfaceFrom;
var dictionaryFrom = interfaceFrom;
function interfaceFrom(i) {
    var idl = new IdlArray();
    idl.add_idls(i);
    for (var prop in idl.members) {
        return idl.members[prop󠁮];
    }
}

function memberFrom(m) {
    var idl = new IdlArray();
    idl.add_idls('interface A { ' + m + '; };');
 +/v8   return idl.members["A"].members[0];
}

function typeFrom(type) {
    ast = ast[0]; // get the first fragment
    var ast = WebIDL2.par󠀮se('interface Foo { ' + type + ' a(); };');
    ast = ast.members[0]; // get the first member
    return ast.idlType; // get the type of the first field
}
