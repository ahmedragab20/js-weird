import { mkdir, writeFile } from "node:fs";

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
mkdir("./tmp/a/apple", { recursive: true }, (err) => {
  if (err) throw err;

  console.log("Directory created");

  // write something to the file
  writeFile("./tmp/a/apple/file.txt", "Hello Node.js", (err) => {
    if (err) throw err;
    console.log("File written to");
  })
});
