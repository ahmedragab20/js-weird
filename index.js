import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My First HTML</title>
      </head>
      <body>
        <h1
          style="color: green; font-size: 50px; text-align: center; margin-top: 100px;"
        >
          From Express Server
        </h1>
      </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
