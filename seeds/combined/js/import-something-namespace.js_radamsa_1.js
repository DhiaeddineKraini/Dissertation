log.push("import-something-namespace");
log.push(m.foo);
m.set_foo(1);
log.push(m.foo);
import * as m from "./export-something.js";
