import express from "express";
const app = express();
import postsRouter from "./router/posts.rt.mjs";
import imagesRouter from "./router/images.rt.mjs";

app.use(express.static(`${process.cwd()}/public`));

app.use(
  express.json({
    limit: "5kb",
  })
);

app.use("/posts", postsRouter);
app.use("/images", imagesRouter);

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
