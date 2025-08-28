import { Request, Response} from "express";
import { skillOptions, typeOptions, salaryUnitOptions, sampleMission} from '../src/data/data'


export class GlobalController {
    protected request: Request;
    protected response: Response;

    constructor(request: Request, response: Response){
        this.request = request;
        this.response = response;
    }

    public homepage() {
        const success = this.request.query.success;
        const newerMission = sampleMission.filter(mission => mission.id === 1,2)


        this.response.render("pages/home.ejs"); {
            skillOptions: newerMission,
        }

    }
}