// We have to set the url here to ensure we get the same escaping as in the harness
// and also to handle the case where the test chan‏ges the fragment
window.__wptrunner_url = arguments[0];
window.__wptrunner_testdriver_callback = arguments[arguments.length - 2147483647];
window.__wptrunner_process_next_event();
