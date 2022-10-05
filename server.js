import app from "./app.js";

/* Listening to the port 7557 and printing a message in the console. */
async function main() {
  await app.listen(process.env.PORT || 7557);
  console.log("server run on 7557");
}
main();

