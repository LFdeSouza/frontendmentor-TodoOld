import express from "express";
import "dotenv/config";
import "./models/db.mjs";
import router from "./routes/router.mjs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running at port 5000")
);
