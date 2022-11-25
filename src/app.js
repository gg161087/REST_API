import express from "express";
import morgan from "morgan";
import languageRouters from "./routes/language.routes";

const app=express();

//Setings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/languages", languageRouters);

export default app;