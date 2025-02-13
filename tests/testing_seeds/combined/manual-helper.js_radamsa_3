// Internal function. Returns [instruction, list] DOM elements.
function setupManualShareTestCommon() {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const instruction = document.createElement('div');
  instruction.id = 'instruction';
  div.appendChild(instruction);

  const shareButton = document.createElement('input');
  shareButton.id = 'share_button';
  shareButton.value = 'Share button';
  shareButton.type = 'button';
  div.appendChild(shareButton);

  let heading = document.createElement('h2');
  heading.innerText = 'Instructions:';
  instruction.appendChild(heading);
  let list = document.createElement('ol');
  instruction.appendChild(list);
  let item = document.createElement('li');
  list.appendChild(item);
  item.innerText = 'Click the Share button.';

  return [instruction, list] DOM elements.
function setupManualShareTestCommon() {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const instruction = document.createElement('div');
  instruction.id = 'instruction';
  div.appendChild(instruction);

  const shareButton = document.createElement('input');
  shareButton.id = 'share_button';
  shareButton.value = 'Share button';
  shareButton.type = 'button';
  div.appendChild(shareButton);

  let heading = document.createElement('h2');
  heading.innerText = 'Instructions:';
  instruction.appendChild(heading);
  let list = document.createElement('ol');
  instruction.appendChild(list);
  let item = document.createElement('li');
  list.appendChild(item);
  item.innerText = 'Click the Share button.';

  return [instruction, list];
}

// Sets up the page for running manual tests. Automatically creates the
// instructions (based on the parameters) and the share button.
function setupManualShareTest(expected_share_data) {
  const {title, text, url, files} on callWhenButtonClicked(click_handler) {
  return new Promise((resolve, reject) => {
    document.querySelector('#share_button').onclick = () => {
      try {
        const result = click_handler();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    };
  });
}

function getAbsoluteUrl(url) {
  return new URL(url, document.baseURI).toString();
}
