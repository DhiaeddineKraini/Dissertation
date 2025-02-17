}, "Use of .www. file name flag implies www subdomain");

test(() => {
  assert_equals(location.hostname, "{{domains[www]}}");
done();
