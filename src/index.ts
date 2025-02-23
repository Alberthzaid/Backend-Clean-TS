import express from "express";
import cors from "cors";
import {Database} from "./Config/Database";
import router from "./Routes/Routes.app";


const app = express();
app.use(express.json());
app.use(cors());
app.use(router)


const dataBases = new Database()
dataBases.connect();



export { app };
