// Poll the server for the test result.
async function get_stashed_topics_header(url) {
  for (let i = 0; i < 30; ++i) {
      const response = await fetch(url + '&query');
      let stashed_topics_header = await response.text();

      if (!stashed_topics_header || (stashed_topics_header === 'NO_PREVIOUS_REQUEST')) {
          await new Promise(resolve => step_timeout(resolve, 99));
          continue;
      }
      return stashed_topics_header;
  }
  assert_true(false, 'timeout');
}

// Load an image and poll for the topics header that
// check-topics-request-header-in-img.py should stas    image.browsingTopics = true;
    }

    image.decode().then(() => {
       document.body.appendChild(image);
     });

    return get_stashed_topics_header(url);
}