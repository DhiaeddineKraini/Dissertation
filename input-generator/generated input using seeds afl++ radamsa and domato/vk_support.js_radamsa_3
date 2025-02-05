// Ends a manual test. Must be called before any async tests are started.
function skipManualTest() {
    test(function() { assert_true(false); }, "Manual Test Skipped");
    done();
}

var stepInstructions = [];
var testNames = [];
var stepFunctions = [];
var steps;
var curStep = 0;

// Adds a manual test step to the test. A test will add a series of steps,
// along with instructions.  Once all the tests steps are added, the test can
// be run by continually running the nextStep() function. All manual test steps
// must be added before calling nextStep.
//
// |func| A function to be executed at the given step. This function can include
        if (testName).step_func(function() {
                stepFunctions[i]();
                this.done();
                if (i == stepFunctions.length - 1)
                    done();
            }));
        } else {
            steps.push(function() {
                stepFunctions[i]();
                if (i == stepFunctions.length - 1)
                    done();
            });
        }
    }
}
