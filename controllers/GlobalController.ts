import { Request, Response} from "express";
import { skillOptions, typeOptions, salaryUnitOptions, sampleMissions} from '../src/data/data'



export class GlobalController {
    protected request: Request;
    protected response: Response;

    constructor(request: Request, response: Response){
        this.request = request;
        this.response = response;
    }

    public homepage() {
        const success = this.request.query.success;
        
        


        this.response.render("pages/home.ejs", {
            sampleMissions
        }); 
    }
}