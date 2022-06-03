import express from "express";

const router = express.Router();

import { getData } from "../Controller/dataController.js";

router.post("/bfl-api-challenge/submit", getData);

export default router;
