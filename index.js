import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDatabase } from "./connectDB.js";
import indexRoutes from "./routes/indexRoutes.js";
import cors from "cors";

const app = express();

app.use(
  bodyParser.json({
      verify: function(req, res, buf) {
          req.rawBody = buf;
      }
  })
);

app.use(bodyParser.json());
app.use(cors());

dotenv.config({ path: './.env.development' });

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;
const NAME = process.env.NAME;
connectDatabase(MONGOURL);

app.listen(PORT, () => {
    console.log(`Server listening at: ${PORT}, with Environment : ${NAME}`);
});

app.use("/api", indexRoutes);


