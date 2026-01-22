import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import askJijiRoute from "./routes/askJiji.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/ask-jiji", askJijiRoute);

app.get("/", (req, res) => {
  res.send("Jiji Backend is running 🚀");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
