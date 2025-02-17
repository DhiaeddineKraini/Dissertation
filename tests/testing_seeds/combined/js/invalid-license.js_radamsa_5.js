function runTest(config)
{
    promise_test(function (test) {
        var initDataType;
                  assert_unreached(
                    `Failed to reach the update() call.  Error: '${error.name}' '${error.message}'`);
            }

            // Propagate the error on through.
            throw error;
        });

        return promise_rejects_js(
            test, TypeError, p,
            'update() should fail because of an invalid license.');
    }, 'Update with invalid Clear Key license');
}
