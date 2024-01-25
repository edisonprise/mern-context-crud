import { Router } from "express";
const router = Router();
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
} from "../controllers/post.controllers.js";

router.get("/posts", getPosts);

router.post("/posts", createPost);

router.put("/posts/:id", updatePost);

router.delete("/posts/:id", deletePost);

router.get("/posts/:id", getPost);

export default router;
