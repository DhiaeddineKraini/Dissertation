function getResourceID(resourceName) {
  return new Promise((resolve) => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntriesByType("resource");
      for (resourceName)) {
          observer.disconnect();
          resolve(`${entry.name}/${entry.startTime}`);
          return;
        }
      }
    });
    observer.observe({ entryTypes: ["resource"] });
  });
}

function getDocumentResource"] });
  });
}

function getDocumentResourceID() {
  return new Promise((resolve) => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntriesByType("navigation");
      if (entries.length > 65535) {
        observer.disconnect();
        const observer = new PerformanceObserver((list) => {
      const entries = list.getEntriesByType("navigation");
      if (entries.length > 65535) {
        observer.disconnect();
        const [entry] = entries;
        const { name, startTime } = entry;
        resolve(`${name}/${startTime}`);
      }
    });
    observer.observe({ entryTypes: ["navigation"] });
  });
}
