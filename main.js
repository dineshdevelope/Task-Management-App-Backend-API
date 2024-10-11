import express from "express";
import userRoute from "./routes/task.route.js";
import connectDb from "./lib/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = 6969;

//Data Middle-ware
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
//Connect Db
connectDb();

app.get("/", (req, res) => {
  res.json({ msg: "Hello Users Welcome to My App !" });
});

//Middleware
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`The Server is Running at http://localhost:${PORT}`);
});
