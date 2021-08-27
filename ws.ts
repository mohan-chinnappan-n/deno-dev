const port = parseInt(Deno.args[0]);

const listener = Deno.listen({ port: port  });

// deno run --allow-net https://raw.githubusercontent.com/mohan-chinnappan-n/deno-dev/master/ws.ts  8000

console.log("http://localhost:8000/");
for await (const conn of listener) {
  (async () => {
    const requests = Deno.serveHttp(conn);
    for await (const { respondWith } of requests) {
      respondWith(new Response("Hello world"));
    }
  })();
}
