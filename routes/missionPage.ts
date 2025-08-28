import { Router } from "express";
import { MissionPageController } from "../controllers/MissionPageController"


const missionRouter = Router();

missionRouter.get("/missionPage", (request, response) => {
    const controller = new MissionPageController(request, response);
    controller.browseMissionPage();

});

missionRouter.get("/missionPage", (request, response) => {
    const controller = new MissionPageController(request, response);
    controller.readMissionPage();

});

missionRouter.put("/missionPage", (request, response) => {
    const controller = new MissionPageController(request, response);
    controller.editMissionPage();

});

missionRouter.delete("/missionPage", (request, response) => {
    const controller = new MissionPageController(request, response);
    controller.deleteMissionPage();

});


export default missionRouter