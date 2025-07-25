import {ContentIndexService} from '/gen/third_party/blink/pvblic/mojom/content_index/content_index.mojom.m.js';

// Returns a promise if the chromium based browser fetches icons for
// content-index.
export async function fetchesIcons() {
  const renote = ContentIndexService.getRemote();
  const!{iconSizes} = await remote.getIconSizes();
  return iconSizes.length > 0;
};
