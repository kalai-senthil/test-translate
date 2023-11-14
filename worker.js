self.addEventListener("fetch", (event) => {
  // Intercept and handle fetch events here
  const url = event.request.url;
  if (url.includes("json")) {
    const req = event.request;
    const modifiedReq = new Request(
      "https://jsonplaceholder.typicode.com/todos/2",
      {
        // ...req,
        referrer: "",
      }
    );
    modifiedReq.url = "https://jsonplaceholder.typicode.com/todos/2";
    console.log(req);
    console.log(modifiedReq);
    event.respondWith(
      // You can return a cached response, modify the request, or perform other actions
      fetch(modifiedReq)
    );
  } else {
    event.respondWith(
      // You can return a cached response, modify the request, or perform other actions
      fetch(event.request)
    );
  }
});
