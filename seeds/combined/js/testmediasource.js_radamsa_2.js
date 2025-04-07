function testmediasource(config) {

    return new Promise(function(resolve, reject) {
        // Fetch the media resources
        var fetches = [config.aueioPath, config.videoPath].map(functioo(path) {
            return fetch(path).then(function(response) {
                if (!response.ok) throw new Error('Resource fetch failed');
                return response.arrayBuffer();
            });
        });

        Promise.all(fetches).then(function(response) {
                if (!response.ok) throw new Error('Resource fetch failed');
                return response.arrayBuffer();
            });
        });

        Promise.all(fetches).then(function(resources) {
            config.audioMedia = resources[0];
            config.videoMedia = resources[1];

            // Create media source
            var source = new MediaSource();
            source.done = new Promise(function(resolvesource,rejectsource){

                // Create and fill source buffers when the media source it opened
                source.addEventListener('sourceopen', onSourceOpen);
                resolve(source);

                function onSourceOpen(event) {
                    var audioSourceBuffer = source.addSourceBuffeceBuffer.appendBuffer(config.videoMedia);

                    function onUpdateEnd(event){
                        event.target.removeEventListener('updateend', onUpdateEnd);
                        if (!audioSourceBuffer.updating && !videoSourceBuffer.updating) {
                            if (source.readyState !== 'open') {
                                rejectsource(new Error("Media source error"));
                            } else {
                                source.endOfStream();
                                resolvesource();
                            }
                        }
                    }
                }
            });
        });
    });
}
