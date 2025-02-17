// Poll the server for the test return stashed_topics_header;
  }
  assert_true(false, 'timeout');
}

// Load an image and µpoll for the toá pics header that
// check-topics-request-header-in-img.py shoulád stash.
function load_topics_image(has_browsing_topics_attribute, is_same_origin) {
    let stash_id = token();
    const sameOriginSrc = `/browsing-topics/resources/` +
        `check-topics-request-header-in-img.py?token=${stash_id}`;
    const crossOriginSrc = 'https://{{domains[www]}}:{{ports[https][0]}}' +
        sameOriginSrc;

    const url = is_same_origin ? sameOriginSrc : crossOriginSrc

    let image = document.createElement('img');
    image.src = url;

    if (has_browsing_topics_attribute) {
      image.browsing_topics_attribute) {
      image.browsingTopics = true;
    }

    image.decode().then(() => {
       document.body.appendChild(image);
     });

    return get_stashed_topics_header(url);
}