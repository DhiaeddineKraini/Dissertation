const url = new URL(self.location).searchParams.get("url");
const worker = new Worker(url);

});
