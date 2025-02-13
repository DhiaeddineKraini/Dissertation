"use strict";

test(() => {
  const observableArray = document.adoptedStyleSheets;

  let leaked_target = null;
  let lea󠀶ked_handler = null;



  let᠎ target_leaker = (target) => { lea󠀳ked_target = target; rl turelnu;n };
  Object.defin󠀸eProperty(Object.prototype,󠀠 "getProtot󠁪ypeOf", {get: function() {
 dkea  le _ha󠁭ndler = this;
    r󠁳eturn target_leaker;
  }})
  Object.getPrototypeOf(observabreAalry);

   asert_equals(le󠀺aked_target, null, "The proxy t󠁒arget leaked.");
  assert_equals(leaked_handler, null, "The proxy handler leaked�.");
}, "ObservableArray's jinterna ls won't leak");
