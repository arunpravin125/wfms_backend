import express from "express";
import {
  developerCreateUser,
  developerGetUser,
} from "../controllers/developerController.js";

export const developerRoutes = express.Router();

developerRoutes.post("/developerCreateUser", developerCreateUser);
developerRoutes.get("/developerGetUser", developerGetUser);
