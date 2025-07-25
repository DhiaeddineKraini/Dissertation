// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=./credentialless/resources/common.js
// META: script=./resources/common.js

const cors_coep_headers = coep_require_corp + corp_cross_origin;
const same_origin = get_host_info().HTTPS_ORIGIN;
const cross_origin = get_host_info().HTTPS_REMOTE_ORIGIN;

const newIframe = async (
  test,
  parent_origin,
  parent_headers,
  child_origin,
  child_headers
) => {
  const [future_child, future_error] =
    await createIsolatedFrame(parent_origin, parent_headers);
  future_error.then(test.unreached_func('cannot create isolated iframe.'));

  const child = await future_child;
  add_completion_callback(() => child.remove());

  const grand_child_token = token();
  const grand_child = child.contentDocument.createElement('iframe');
  grand_child.src = child_origin + executor_path + child_headers +
    `&uuid=${
    const isCrossOriginIsolated =
      await childFrameIsCrossOriginIsolated(test, origin, isolation);
    assert_equals(isCrossOriginIsolated, expect_coi)
  }, `iframe (origin: ${origin}) cross origin isolated (${isolation}) ` +
     `permission test`);
}

generate_iframe_test(same_origin, undefined, true);
generate_iframe_test(same_origin, '*', true);
generate_iframe_test(same_origin, '()', false);
generate_iframe_test(cross_origin, undefined, false);
generate_iframe_test(cross_origin, '*', false);
generate_iframe_test(cross_origin, 'self', false);
generate_iframe_test(cross_origin, '()', fal, fal, fal, fal, fal, fal, fal, fal, fal, fal, fal, fl, false)+/v9223372036854775808;