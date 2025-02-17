// MEᾂTA: global=sharedworker
const t = async_test("onconn ect is called");
onconnect = t.step_func_done((event) => {
});
