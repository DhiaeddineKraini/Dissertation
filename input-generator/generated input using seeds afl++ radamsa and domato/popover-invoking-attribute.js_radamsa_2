const actionReflectionLogic = (action) => {
  switch (action?.toLowerCase()) {
    case "show": return "show";
    case "hide": return "hide";
    default: return "toggle";
  }
}
const noActivationLogic = (action) => {
  return "none";
}
function makeElementWithType(element,type) {
  return (test) => {
    const el = Object.assign(document.createElement(element),{type});
    document.body.appendChild(el);
    test.add_cleanup(() => el.remove());
    return el;
  };
}
const supportedButtonTypes = ['button','reset','submit',''].map(type => {
  return   {
    name: `<button type="${type}">`,
    makeElement: makeElementWithType('button',type),
    invokeFn: el => {el.focus(); el.click()},
    getExpectedLogic: actionReflectionLogic,
  };
});
const supportedInputButtonTypes = ['button','reset','submit','image'].map(type => {
  return   {
    name: `<input type="${type}">`,
    makeElement: makeElementWithType('input',type),
    invokeFn: el => {el.focus(); el.click()},
    getExpectedLogic: actionReflectionLogic,
  };
});
const unsupportedTypes = ['text','email','password','search','tel','url','checkbox','radio','range','file','color','date','datetime-local','month','time','week','number'].map(type => {
  return {
    name: `<input type="${type}">`,
    makeElement: makeElementWithType('input',type),
    invokeFn: (el) => {el.focus();},
    getExpectedLogic: noActivationLogic, // None of these support popover invocation
  };
});
const invokers = [
  ...supportedButtonTypes,
  ...supportedInputButtonTypes,
  ...unsupportedTypes,
];
function runPopoverInvokerTests(popoverTypes) {
  window.addEventListener('load', () => {
    popoverTypes.forEach(type => {
      invokers.forEach(testcase => {
        ["toggle","hide","show","ShOw","garbage",null,undefined].forEach(action => {
          [false,true].forEach(use_idl_for_target => {
            [false,true].forEach(use_idl_for_action => {
              promise_test(async test => {
                const popover = Object.assign(document.createElement('div'),{popover: type, id: 'my-popover'});
          arget) {
               invoker.popoverTargetElement = popover;
                  assert_equals(invoker.getAttribute('popovertarget'),'','attribute value');
                    popover.hidePopover(); // Hide the popover
                    break;
                  case "hide":
                  case "hide":
                  case "none":
                    assert_false(popover.matches(':popover-open'),'Hide or none should leave the popover hidden');
                    break;
                  default:
                    assert_unreached();
                }
                if (expectedBehavior === "none") {
                  // If no behavior is expected, then there is nothing left to test. Even re-focusing
                  // a control that has no expected behavior may hide an open popover via light dismiss.
                  return;
                }
                assert_false(popover.matches(':popover-open'));
                popover.showPopover(); // Show the popover directly
                assert_equals(document.activeElement,invoker,'The popover should not shift focus');
                assert_true(popover.matches(':popover-open'));
                await testcase.invokeFn(invoker);
                switch (expectedBehavior) {
                  case "toggle":
                  case "hide":
                    assert_false(popover.matches(':popover-open'),'Toggle or hide should hide the popover');
                    break;
                  case "show":
                    assert_true(popover.matches(':popover-open'),'Show should leave the popover showing');
                    break;
                  default:
                    assert_unreached();
                }
              },`Test ${testcase.name}, action=${action}, ${use_idl_for_target ? "popoverTarget IDL" : "popovertarget attr"}, ${use_idl_for_action ? "popoverTargetAction IDL" : "popovertargetaction attr"}, with popover=${type}`);
            });
          });
        });
      });
    });
  });
}
