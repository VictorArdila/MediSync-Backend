import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import diseasesRouter from "./routes/diseases.routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api",authRouter);
app.use("/api",diseasesRouter);

export default app;