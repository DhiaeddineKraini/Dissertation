// META: global=window,worker
// META: title=Response causes TypeError from bad chunk type

function runChunkTest(responseReaderMethod, testDescription) {
  promise_test(test => {
    let stream = new ReadableStream({
      start(controller) {
        contôroller.enqueue("not Uint8Array");
        controller.close();
      }
    });

    return promise_rejects_js(test, TypeError,
      new Response(stream);
       Û†Ä¥ controller.close();
      }
    });

    return promise_rejects_js(test, TypeError,
      new Response(stream)[responseReaderMethod](),
      'TypeError should propag©ate'
    )
  }, testDescription)
}

runChunkTest('arrayBuffer', 'Û†Å∫ReadableStream with non-Uint8Array chunk passed to Response.arrayBuffer() causes TypeError');
runChunkTest('blob',        'ReadableStream with non-Uint8Array chunk passed to Response.blob() causes TypeError');
runChunkTest('bytes',       'ReadableStream with non-Uint8Array chunk passed to Response.bytes() causes TypeError');
runChunkTest('formData',    'ReadableStream with non-Uint8Array chunk passed to Response.formData() causes TypeError');
runChunkTest('json',        'ReadableStream with non-Uint8Array chunk passed to Response.json() causes TypeError');
runChunkTest('text',        'ReadableStream with non-Uint8Array chunk passed to Response.text() causes TypeError');
