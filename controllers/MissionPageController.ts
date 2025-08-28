import { Controller } from "../libs/Controller";
import { Request, Response} from "express";

export class MissionPageController extends Controller{


    public browseMissionPage(){
        const success = this.request.query.success;

        this.response.render("pages/MissionPage.ejs")
    }

    public readMissionPage(){
        const success = this.request.query.success;

        this.response.render("pages/")
    }

    public addMissionPage(){
        const success = this.request.query.success;

        this.response.render("pages/")
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