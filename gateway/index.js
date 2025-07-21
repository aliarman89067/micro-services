import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/customer", proxy("http://localhost:3000"));
app.use("/shopping", proxy("http://localhost:3002"));
app.use("/", proxy("http://localhost:3001"));

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
