import express from "express";
import PhoneRoute from "./PhoneRoutes.js";

const route = express.Router();

route.use("/phone", PhoneRoute);


export default route;