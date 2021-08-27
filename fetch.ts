const url = Deno.args[0];
// example run: deno run --allow-net fetch.ts  https://mohan-chinnappan-n2.github.io/media-app.html
// from github
//  deno run --allow-net https://raw.githubusercontent.com/mohan-chinnappan-n/deno-dev/master/fetch.ts  https://mohan-chinnappan-n2.github.io/media-app.html


console.log(url);
const res = await fetch(url);

const ab = await res.arrayBuffer();
const body = new Uint8Array(ab);
await Deno.stdout.write(body);
