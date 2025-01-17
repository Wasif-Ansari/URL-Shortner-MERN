import express from "express";
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../Controllers/shortUrl";


const router = express.Router();


router.post("/shortUrl", createUrl)
router.get("/shortUrl", getAllUrl)
router.get("/shortUrl/:shortUrl", getUrl)
router.delete("/shortUrl/:id", deleteUrl)

export default router