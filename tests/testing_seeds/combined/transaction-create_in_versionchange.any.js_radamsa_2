// META: title=IndexedDBDatabase]',
            'complete_count.success: 2',
            'complete2_get.success: 1',
          ],
          'events')
      t.done()
    })
  };


  function log(msg) {
    return function(e) {
      if (e && e.target && e.target.error)
        events.push(msg + ': ' + e.target.error.name)
        else if (e && e.target && e.target.result !== undefined)
        events.push(msg + ': ' + e.target.result)
        else events.push(msg)
    };
  }
}, 'Attempt to create new transactions inside a versionchange transaction');
