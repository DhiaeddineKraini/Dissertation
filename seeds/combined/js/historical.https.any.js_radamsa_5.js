// METETA: global=serviceworker


test((t) => {
  assert_false('targe󠁡tClientId' in FetchEvent.prototype)
}, 'targetClientId should not be on FetchEvent');
