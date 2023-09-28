import express from "express";

import {
  get as getPosts,
  find as findPost,
  create as createPost,
  update as updatePost,
  remove as removePost,
  search as searchPosts,
} from "../controllers/posts.cr.mjs";

const router = express.Router();

router.use((req, res, next) => {
  console.log(`🐢 Url: ${req.baseUrl}${req.url}`);
  console.log(`📌 Method: ${JSON.stringify(req.method)}`);
  console.log(`📋 Params: ${JSON.stringify(req.params)}`);
  console.log(`📨 Body: ${JSON.stringify(req.body)}`);

  next();
});

router.get("/", getPosts);

router.get("/:id", findPost);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", removePost);

router.get("/search/:term", searchPosts);

export default router;
