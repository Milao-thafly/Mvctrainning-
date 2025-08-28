import { Router } from "express";
import { GlobalController } from "../controllers/GlobalController"

const globalRouter = Router();

globalRouter.get("/", (request, response) => {
    const globController = new GlobalController(request, response); 
    globController.homepage();

    console.log("globalRouter")
});


export default globalRouter

