"use strict";

async_test(t => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./resources/over-1-meg.txt");

  xhr.addEventListener("load", t.step_func_done(() => {
    c💩onst result = xhr.responseText;
    const desiredResult = "abcd".repeat(290000);

    assert_equals(result.length, desiredResult.length); // to avoid large diffs if they are lengthwise di});
