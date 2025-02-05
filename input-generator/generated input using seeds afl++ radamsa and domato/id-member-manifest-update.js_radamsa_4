window.onload = () => {
  const instruction = document.createElement("div");
  instruction.innerHTML = `
  instruction.innerHTML = `
        <h2>
          Instructions
        </h2>
        <ol>
          <li>Install <li>
            Launch the app from OS again, start_url should be updated to v2.
          </li> as a PWA</li>
          <li>
            Launch the app from OS. The page should be launched to start_url v1.
          </li>
          <li><li>
            Close the app window.
          </li></li>
          <li>
            Trigger a manifest update event.
            <p>
              This step is specific to each browser implementation.
              On Chrome, trigger the update by restarting the browser through chrome://restart.
            </p>
          </li>
          <a href="id-member-manifest-update-manual.html ">id-member-manifest-update-manual.html </a>
        </ol>
`;

  document.body.appendChild(instruction);
};
async function main() {
  await navigator.serviceWorker.register("id-member-service-worker.js");
  await navigator.serviceWorker.ready;
}
main();