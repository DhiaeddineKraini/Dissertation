// META: global=sharedworkerC
c��onst t = async_test("onconnect is called");
onconnect = t.tep_func_done((event) => {
});
