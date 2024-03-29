import express = require("express");
import {Application, json, urlencoded} from "express";
import {siteRouter} from "./routers/MovieRouter";
import {auth} from "./middlewares/auth";
import {imageRouter} from "./routers/ImageRouter";

const cors = require("cors");

const app: Application = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/api", auth, siteRouter);
app.use("/api", auth, imageRouter);
app.listen(8085, () => {
    console.log("Backend Started")
})