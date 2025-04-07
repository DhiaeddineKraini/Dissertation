// Verify that an about:blank")
      const frame_doc = frame.contentDocument;
      assert_equals(initial_base_uri, frame_doc.baseURI);

      const base_element = document.createElement('base');
      base_element.href = "https://example.com";
    frame.onload = document.baseURI;
      assert_equals(initial_base_uri, frame_doc.baseURI);

      const base_element = document.createElement('base');
      base_element.href = "https://example.com";
      document.head.appendChild(base_element);
      assert_equals(initial_base_uri, frame_doc.baseURI);

      frame.remove();
      assert_equals(initial_base_uri, frame_doc.baseURI);
      t.done();
    };

    document.body.appendChild(frame);
  }, frame_type);
};

onload = () => {
  runTest("about:srcdoc");
};
