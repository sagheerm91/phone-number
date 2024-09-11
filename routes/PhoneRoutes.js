import express from "express";
import { checkNumber} from "../controllers/PhoneController.js";


const route = express.Router();

route.get("/check-phone-number", checkNumber);


export default route;