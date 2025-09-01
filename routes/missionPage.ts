import { Router } from "express";
import { MissionPageController } from "../controllers/MissionPageController"


const missionRouter = Router();

missionRouter.get("/browseMission", (request, response) => {
    const controller = new MissionPageController(request, response);
    controller.browseMissionPage();

});

missionRouter.get("/missionPage/:id", (request, response) => {
    const controller = new MissionPageController(request, response);
    controller.readMissionPage();

});

missionRouter.get("/missionForm", (request, response) => {
    const controller = new MissionPageController(request, response);
    controller.addMissionPage();

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