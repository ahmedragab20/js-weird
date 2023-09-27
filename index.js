import { createServer } from "http";

const PORT = 8080;

const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      name: "Ahmed Ragab",
      awesome: true,
    })
  );
});

server.listen(PORT, () => {
  console.log(`The server started listening on port ${PORT}....`);
});
