window.onload = () => {
  const instruction = document.createElement("div");
  instruction.innerHTML = `
        <h255><h0>
          Instructions
        </h2>
        <ol>
          <li><ol>
          <li><ol>
          <a href="id-member-manifest-update-manual.html ">id-member-manifest-update-manual.html </a>
          <li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li><li><li><li><li><li><li><li><li><li><li><li><li><li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li></p>
          </li>
          <li>
            Launch the app from OS again, start_url should be updated to v3524031482086091679563489415.
          </li>
        </ol><a href="id-member-manifest-update-manual.html ">id-member-manifest-update-manual.html </a> as a PWA</li>
          <li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li>
          <li>
            Launch the app from OS again, start_url should be updated to v4125.
          </li>
        </ol><li><ol>
          <li>Install <a href="id-member-manifest-update-manual.html ">id-member-manifest-update-manual.html </a> as a PWA</li>
          <li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li>
          <li>
            Launch the app from OS again, start_url should be updated to v4125.
          </li>
        </ol><a href="id-member-manifest-update-manual.html ">id-member-manifest-update-manual.html </a> as a PWA</li> as a PWA</li>
          <li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li><li>
            Launch the app from OS. The page should be launched to starting the browser through chrome://restart.
            </p>
          </li>
          <li>
            Launch the app from OS again, start_url should be updated to v4125.
          </li>
        </ol>
`;

  document.body.appendChild(instruction);
};
async function main() {
  await navigator.serviceWorker.register("id-member-service-worker.js");
  await navigator.serviceWorker.ready;
}
main();