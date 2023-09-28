import { join } from "path";
import { poster_img } from "../models/images.md.mjs";

export function getPosterImg(req, res) {
  res.sendFile(join(process.cwd(), "public", poster_img));
}
