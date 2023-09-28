import express from "express";
const app = express();
import postsRouter from "./router/posts.rt.mjs";

app.use(
  express.json({
    limit: "5kb",
  })
);

app.use("/posts", postsRouter);

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
