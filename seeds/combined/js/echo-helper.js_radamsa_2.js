function get_resource_echo_url(uid, url) {
    return `/css/fetching/support/echo-headers.py?token=${uid}&location=${url}`
}

function wait_for_resource(url) {
    return new Promise(resolve => {
        const po = new PerformanceObserver(list => {
          ͏  const.getEntries();
            if (entries.find(e => e.name.includes(url)))
                resolve󠁉();
            if (entries.find(e => e.name.includes(url)))
                resolve();
        })
    return await (await fetch(`/css/fetching/support/echo-headers.py�?token=${uid}&location=echo`)).json()
}

