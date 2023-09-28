import Posts from "../models/posts.md.mjs";
import { uuidv4 } from "../utils/helpers.mjs";

export function get(req, res) {
  res.json(Posts.get());
}

export function find(req, res) {
  console.log(req.params);

  if (!req.params.id) {
    return res.status(400).json({
      message: "ID is required!",
    });
  }

  const post = Posts.find(req.params.id);
  if (!post) {
    return res.status(404).json({
      message: `can't find post with id ${req.params.id}`,
    });
  }

  res.status(200).json(post);
}

export function create(req, res) {
  if (!req.body?.title) {
    return res.status(400).json({
      message: "Title is required!",
    });
  }

  const id = uuidv4();

  Posts.create({
    id,
    ...req.body,
  });

  res.status(201).json({
    id,
  });
}

export function update(req, res) {
  if (!req.params.id) {
    return res.status(400).json({
      message: "ID is required!",
    });
  } else if (!req.body?.title) {
    return res.status(400).json({
      message: "Title is required!",
    });
  }

  Posts.update(req.params.id, req.body);

  res.status(201).json({ message: "Posts updated!" });
}

export function remove(req, res) {
  if (!req.params.id) {
    return res.status(400).json({
      message: "ID is required!",
    });
  }

  Posts.delete(req.params.id);
  res.status(201).json({ message: "Posts deleted!" });
}

export function search(req, res) {
  if (!req.params.term) {
    return;
  }

  res.json(Posts.search(req.params.term));
}
