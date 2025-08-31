import { Controller } from "../libs/Controller";
import { Request, Response} from "express";
import { skillOptions, typeOptions, salaryUnitOptions, sampleMissions} from '../src/data/data'


export class MissionPageController extends Controller{


    public browseMissionPage(){
        const success = this.request.query.success;
        const browseMission = sampleMissions.filter(mission => mission.id )
        this.response.render("pages/browseMission.ejs", {
            browseMission
        })
    }

    public readMissionPage(){
            const requestedId = this.request.params.id;
           
            const readMission = sampleMissions.find((mission) => {
            return mission.id == parseInt(requestedId);
        });



        this.response.render("pages/missionPage.ejs", {
            readMission
        })
    }

    public addMissionPage(){
        const success = this.request.query.success;

        this.response.render("pages/missionForm.ejs")
    }

    public editMissionPage(){
        const success = this.request.query.success;

        this.response.render("pages/")
    }


    public deleteMissionPage(){
        const success = this.request.query.success;

        this.response.render("pages/")
    }
}