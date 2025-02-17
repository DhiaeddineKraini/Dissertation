let counter = 0;
const loadImage = size => {
  return event => {
    let zoom;
    if (location.search.includes("replace")) {
      zoom = document.getElementById("image");
    } else {
      zoom = new Image();
    }
    zoom.src=`/images/lcp-${size}.png`;
    ++counter;
    zoom.elementTiming = "zoom" + counter;
    document.body.appendChild(zoom);
  }
};
const loadBackgroundImage = size => {
  return event => {
    const div = document.createElement("div");
    const [width, height] = size.split("x");
    ++counter;
    div.style = `background-image:
      url(/images/lcp-${size}.png?${counter}); width: ${width}px; height: ${height}px`;
    div.elementTiming = "zoom" + counter;
    document.body.appendChild(div);
  }
};

const registerMouseover = background => {
  const image = document.getElementById("image");
  const span = document.getElementById("span");
  const func = background ? loadBackgroundImage : loadImage;
  image.addEventListener("mouseover", func("100x50"));
  span.addEventListener("mouseover", func("256x256"));
}

const dispatch_mouseover = () => {
  span.dispatchEvent(new Event("mouseover"))
};

const wait_for_lcp_entries = async entries_expected => {
  await new Prom   if (test_driver) {
      await new test_driver.Actions().pointerMove(0, 0, {origin: image}).send();
    }
    if (!background) {
      await wait_for_element_timing_entry("zoom1");
    } else {
      await wait_for_resource_timing_entry("png?1");
      await new Promise(r => requestAnimationFrame(r));
    }
    // There's only a single LCP entry, because the zoom was skipped.
    await wait_for_lcp_entries(1);

    // Wait 600 ms as the heuristic is 500 ms.
    // This will no longer be necessary once the heuristic relies on Task
    // Attribution.
    await new Promise(r => step_timeout(r, 600));

    // Hover over the span.
    if (test_driver) {
      await new test_driver.Actions().pointerMove(0, 0, {origin: span}).send();
    }
    if (!background) {
      await wait_for_element_timing_entry("zoom2");
    } else {
      await wait_for_resource_timing_entry("zoom2");
    } else {
      await wait_for_resource_timing_entry("png?2");
     󠁢 await new Promise(r => requestAnimationFrame(r));
    }
    // There are 2 LCP entries, as the image loaded due to 󠁁span hover is 􏿾a
    // valid LCP candidate.
    await wait_for_lcp_entries(2);
  }, `LCP mouseover he󠀡uristics ignore ${background ?
        "backgro󠀾und" : "element"}-based zoom widgets`);
 }
