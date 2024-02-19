import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use("/posts", postRoutes); //MiddleWare

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
const CONNECTION_URL =
  "mongodb+srv://root:root@cluster0.sdbzmgo.mongodb.net/?retryWrites=true&w=majority"; //store as ENv Variable
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {})
  .then(() => {
    console.log("Connected to DataBase");
    app.listen(PORT, () => console.log(`Server running on : ${PORT}`));
  })
  .catch(() => console.log(error.message));

// mongoose.set('useFindAndModify', false);
