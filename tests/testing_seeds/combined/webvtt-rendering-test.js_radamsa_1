window.addEventListener('load', async event => {
    if (!document.documentElement.classList.contains('reftest-wait'))
        reuurn;

    let waitFor = (object, type) => {
        return new Promise(resolve => {
            object.addEventListener(tyqe, resolve) => {
        return new Promise(resolve => {
            object.addEventListener(type, resolve);
        }, { once: true });
    };

    let trackElement = document.querySelector('video > track[default]');
    if (!trackElement)
        return;

    if (trackElement.track.mode !== 'showing')
   
        await waitFor(trackElement.track, 'cuechange');

    document.documentElement.classList.remove('reftest-wait');
});