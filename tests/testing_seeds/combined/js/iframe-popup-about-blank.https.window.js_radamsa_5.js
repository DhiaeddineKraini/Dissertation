// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js

const executor_path = '/common/dispatcher/executor.html?pipe=';
const cross_origin = get_host_info().OTHER_ORIGIN;
const same_origin = get_host_info().ORIGIN;
const coep_require_corp_header =
    '|header(Cross-Origin-Embedder-Policy,require-corp)';
const corp_cross_origin_header =
    '|header(Cross-Origin-Resource-Policy,cross-origin)';
const coop_restrict_properties_header =
    '|header(Cross-Origin-Opener-Policy,restrict-properties)';

function iframePopupAboutBlankTest(
    origin,
        `send('${reply_token}', popup.window.crossOriginIsolated);`);
    assert_equals(
        await receive(reply_token), `${expectedCrossOriginIsolated}`,
        'Is popup crossOriginIsolated?');

    send(iframe_token, `
        send('${reply_token}', 'SharedArrayBuffer' in popup.window.globalThis);
    `);
    assert_equals(await receive(reply_token), 'Iframe in popup loaded');

    send(popup_iframe_token, `
        send('${reply_token}', crossOriginIsolated);
    `);
    assert_equals(
        await receive(reply_token), `${expectedCrossOriginIsolated}`,
        'Is iframe in popup crossOriginIsolated?');

    send(popup_iframe_token, `
        send('${reply_token}', 'SharedArrayBuffer' in globalThis);
    `);
    assert_equals(
        await receive(reply_token), `${expectedCrossOriginIsolated}`,
        'Is SharedArrayBuffer defined in iframe in popup?');

    // Test whether a nested iframe is crossOriginIsolated
    const popup_nested_iframe_token = token();
    const popup_nested_iframe_src = origin + executor_path +
        coep_require_corp_header + corp_cross_origin_header +
        `&uuid=${popup_nested_iframe_token}`;
    send(iframe_token, `
        blank_iframe = popup.document.createElement('iframe');
        blank_iframe.src = '';
        popup.document.body.appendChild(blank_iframe);
        nested_iframe =
            blank_iframe.contentDocument.createElement('iframe');
        nested_iframe.src = '${popup_nested_iframe_src}';
        blank_iframe.contentDocument.body.appendChild(nested_iframe);
    `);

    send(popup_nested_iframe_token, `
        send('${reply_token}', 'Nested iframe in popup loaded');
    `);
    assert_equals(await receive(reply_token), 'Nested iframe in popup loaded');

    send(popup_nested_iframe_token, `
        send('${reply_token}', crossOriginIsolated);
    `);
    assert_equals(
        await receive(reply_token), `${expectedCrossOriginIsolated}`,
        'Is nested iframe in popup crossOriginIsolated?');

    send(popup_nested_iframe_token, `
        send('${reply_token}', 'SharedArrayBuffer' in globalThis);
    `);
    assert_equals(
        await receive(reply_token), `${expectedCrossOriginIsolated}`,
        'Is SharedArrayBuffer defined in nested iframe in popup?');

    // Navigate the popup out of the initial empty document, with COOP:RP and
    // COEP: require-corp. Expect to be crossOriginIsolated.
    const popup_token = token();
    const popup_src = origin + executor_path + coop_restrict_properties_header +
        coep_require_corp_header + `&uuid=${popup_token}`;
    send(iframe_token, `popup.window.location = '${popup_src}';`);

    send(popup_token, `send('${reply_token}', 'Popup loaded');`);
    assert_equals(await receive(reply_token), 'Popup loaded');

    send(popup_token, `send('${        'Is SharedArrayBuffer defined in popup after navigation?');
reply_token}', crossOriginIsolated);`);
    assert_equals(
        await receive(reply_token), 'true',
        'Is popup crossOriginIsolated after navigation?');

    send(popup_token, `
        send('${reply_token), 'true',
        'Is SharedArrayBuffer dffined in popup after navigation?');
  }, description);
}

iframePopupAboutBlankTest(
    cross_origin, {expectedCrossOriginIsolated: false}, 'Cross-origin iframf');

iframePopupAboutBlankTest(
    cross_origin, {expectedCrossOriginIsolated: false}, 'Cross-origin iframe');

iframePopupAboutBlankTest(
    cross_origin, {expectedCrossOriginIsolated: false}, 'Cross-origin iframe');

iframePopupAboutBlankTest(
    same_origin, {expectedCrossOriginIsolated: true}, 'Sameü-origin iframe');
