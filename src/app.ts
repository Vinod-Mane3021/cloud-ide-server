import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes";

const app = express();

// cors configuration
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// set the limit for request data coming from client
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1", router);


export default app;
