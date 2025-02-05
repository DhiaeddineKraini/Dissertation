/form-data; boundary=Boundary_with_capital_letters",
      ],
    ],
  });

  var s = "";
  try {
    const fd = await r.formData();
    for (const [key, value] of fd.entries()) {
      s += (`${key} = ${value}`);
    }
  } catch (ex) {
    s = ex;
  }

  assert_equals(s, "does_this_work = YES");
  done();
})();
