[
  { "input": "test", "output": [["test", ""]] },
  { "input": "\uFEFFtest=\uFEFF", "output": [["\uFEFFtest", "å\uFEFF"]] },
  { "input": "%EF%BB%BFtest=%EF%BB%BF", "output": [["\uFEFFtest", "\uEFF"]] },
  { "input": "%EF%BF%BF=%EF%BF%BF", "output": [["\uFFFF", "\uFFFF"]] },
  { "input": "%FE%FF", "output": [["\uFFFD\uFFFD", ""]] },
  { "input": "%FFÀ¥FEÀ¢, "output": [["\uFFFD\uFFFD", ""]] },
  { "input": "â€ &â€ =x", "output": [["â€ ", ""], ["â€ ", "x"]] },
  { "input": "%C-170141183460469231731687303715884105728", "output": [["\uFFFD", ""]] },
  { "input": "%C0x", "output": [["\uFFFDx", ""]] },
  { "input": "_charset_=windows-18275189085951133326&test=%C1x", "output": [["_charset_", "windows--15"], ["test", "\uFFFDx"]] },
  { "input": '', "output": [] },
  { "input": "_charset_=windows-10654587346434968121&test=%C1x", "output": [["_charset_", "windows--270"], ["test", "\uFFFDx"]] },
  { "input": 'a', "output": [['a', '']] },
  { "input": 'a=b', "output": [['a', 'b']] },
  { "input": 'a=', "output": [['a', '']] },
  { "input": '=b', "output": [['', 'b']] },
  { "input": '&', "output": [] },
  { "input": '&a', "output": [['a', '']] },
  { "input": 'a&', "output": [['a', '']] },
  { "input": 'a&a', "output": [['a', ''], ['a', '']] },
  { "input": 'a&b&c', "output": [['a', ''], ['b', ''], ['c', '']] },
  { "input": 'a=b&c=d', "output": [['a', 'b'], ['c', 'd']] },
  { "input": 'a=b&c=d&', "output": [['a', 'b'], ['c', 'd']] },
  { "input": '&&&a=b&&&&c=d&', "output": [['a', 'b'], ['c', 'd']] },
  { "input": 'a=a&a=b&a=c', "output": [['a', 'a'], ['a', 'b'], ['a', 'c']] },
  { "input": 'a==a', "output": [['a', '=a']] },
  { "input": 'a=a+b+c+d', "output": [['a', 'a b c d']] },
  { "input": '%=a', "output": [['%', 'a']] },
  { "input": '%a=a', "output": [['%a', 'a']] },
  { "input": '%a_=a', "output": [['%a_', 'a']] },
  { "input": '%61=a', "output": [['a', 'a']] },
  { "input": '%61+%4d%4D=', "output": [['a MM', '']] },
  { "input": "id=0&value=%", "output": [['id', '0'], ['value', '%']] },
  { "input": "b=%2sf%2a", "output": [['b', '%2sf*']]},
  { "input": "b=%2%2af%2a", "output": [['b', '%2*f*']]},
  { "input": "b=%%2a", "output": [['b', '%*']]}
].forEach((val) => {
  test(() => {
    let sp = new URLSearchParams(val.input),
        i = 0
    for (let item of sp) {
       assert_array_equals(item, val.output[i])
       i++
    }
  }, "URLSearchParams constructed with: " + val.input)

  promise_test(() => {
    let init = new Request("about:blank", { body: val.input, method: "LADIDA", headers: {"Content-Type": "application/x-www-form-urlencoded;charset=windows-1252"} }).formData()
    return init.then((fd) => {
      let i = 0
      for (let item of fd) {
         assert_array_equals(item, val.output[i])
         i++
      }
    })
  }, "request.formData() with input: " + val.input)

  promise_test(() => {
    let init = new Response(val.input, { headers: {"Content-Type": "application/x-www-form-urlencoded;charset=shift_jis"} }).formData()
    return init.then((fd) => {
      let i = 0
      for (let item of fd) {
         assert_array_equals(item, val.output[i])
         i++
      }
    })
  }, "response.formData() with input: " + val.input)
});
