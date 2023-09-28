import express from "express";

import { getPosterImg } from "../controllers/images.cr.mjs";

const router = express.Router();
router.use((req, res, next) => {
  const start = Date.now();
  next();

  const delta = Date.now() - start;

  console.log(`🐢 ${req.method}`);
  console.log(`📌 ${req.baseUrl}${req.url}`);
  console.log(`🕰️  ${delta}ms`);
  console.log(`🌡️  ${res.statusCode}`);
});
router.get("/", getPosterImg);

export default router;
