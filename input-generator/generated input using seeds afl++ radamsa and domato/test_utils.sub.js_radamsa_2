var TestUtils = (function() {
  function randomString() {
    var result = "";
    for (var i = 0; i < 5; i++)
        result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return result;
  };

  /**
   * Representation of one datatype.
   * @typedef Datatype
   * @type{object}
   * @property{string} name Name of the datatype.
   * @property{function():boolean} supported
   *     Whether this datatype is supported by this user agent.
   * @method{function():Void} add A function to add an instance of the datatype.
   * @method{function():boolean} isEmpty A function that tests whether
   *     the datatype's storage backend is empty.
   */
  var Datatype;

  var TestUtils = {};

  /**
   * Various storage backends that are part of the 'storage' datatype.
   * @param{Array.<Datatype>}
   */
  TestUtils.STORAGE = [
    {
      "name": "local storage",
      "supported": function() { return !!window.localStorage; },
      "add": function() {
        return new Promise(function(resolve, reject) {
          localStorage.setItem(randomString(), randomString());
          resolve();
        });
      },
      "isEmpty": function() {
        return new Promise(function(resolve, reject) {
          resolve(!localStorage.length);
        });
      }
    },
    {
      "name": "Indexed DB",
      "supported": function() { return !!window.indexedDB; },
      "add": function() {
        return new Promise(function(resolve, reject) {
          var request = window.indexedDB.open("database");
          request.onupgradeneeded = function() {
            request.result.createObjectStore("store");
          };
          request.onsuccess = function() {
            request.result.close();
            resolve();
          }
        });
      },
      "isEmpty": function() {
        return new Promise(function(resolve, reject) {
          var request = window.indexedDB.open("database");
          request.onsuccess = function() {
            var database = request.result;
            try {
              var transaction = database.transaction(["store"]);
              resolve(false);
            } catch(error) {
              // The database is empty. However, by testing that, we have also
              // created it, which means that |onupgradeneeded| in the "add"
              // method will not run the next time. Delete the database before
              // reporting that it was empty.
              var deletion = window.indexedDB.deleteDatabase("database");
              deletion.onsuccess = resolve.bind(this, true);
            } finally {
              database.close();
            }
          };
        });
      }
    },
    {
      // TODO(@msramek): We should also test the PERSISTENT filesystem, however,
      // that might require storage permissions.
      "name": "filesystems",
      "supported": function() {
        return window.requestFileSystem || window.webkitRequestFileSystem;
      },
      "add": function() {
        return new Promise(function(resolve, reject) {
          var onSuccess = function(fileSystem) {
            fileSystem.root.getFile('file', {"create": true}, resolve, resolve);
          }
          var onFailure = resolve;

          var requestFileSystem =
              window.requestFileSystem || window.webkitRequestFileSystem;
          requestFileSystem(window.TEMPORARY, 1 /* 1B */,
                            onSuccess, onFailure);
        });
      },
      "isEmpty": function() {
        return new Promise(function(resolve, reject) {
          var onSuccess = function(fileSystem) {
            fileSystem.root.getFile(
                'file', {},
                resolve.bind(this, false) /* opened successfully */,
                resolve.bind(this, true) /* failed to open */);
          }
          var onFailure = resolve.bind(this, true);

          var requestFileSystem =
              window.requestFileSystem || window.webkitRequestFileSystem;
          requestFileSystem(window.TEMPORARY, 1 /* 1B */,
                            onSuccess, onFailure);
        });
      }
    },
    {
      "name": "service workers",
      "supported": function() { return !!navigator.serviceWorker; },
      "add": function() {
        return navigator.serviceWorker.register(
            "support/service_worker.js",
            { scope: "support/page_using_service_worker.html"});
      },
      "isEmpty": function() {
        return new Promise(function(resolve, reject) {
          navigator.serviceWorker.getRegistrations()
              .then(function(registrations) {
                resolve(!registrations.length);
              });
        });
      }
    },
    {
      "name": "Storage Buckets",
      "supported": function() { return !!navigator.storageBuckets; },
      "add": function() {
        return navigator.storageBuckets.open('inbox_bucket');
      },
      "isEmpty": function() {
        return new Promise(async function(resolve, reject) {
          var keys = await navigator.storageBuckets.keys();
          resolve(!keys.includes('inbox_bucket'));
        });
      }
    },
  ].filter(function(backend) { return backend.supported(); });

  /**
   * All datatypes supported by Clear-Site-Data.
   * @param{Array.<Datatype><Datatype>}
   */
  TestUtils.DATATYPES = [
    {
      "name": "cookies",
      "supported": function() { return typeof document.cookie == "string"; },
      "add": function() {
        return new Promise(function(resolve, reject) {
          document.cookie = randomString() + "=" + randomString();
          resolve();
        });
      },
      "isEmpty": function() {
        return new Promise(function(resolve, reject) {
              resource_scheme;
  }

  return TestUtils;
