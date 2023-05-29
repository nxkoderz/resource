import { Router, Request, Response } from "express";
import BaseController from "./BaseController";
import ResponseUtils from "../utils/ResponseUtill";

export default class BeepController extends BaseController{
    public path = "/ping"
    public router = Router()

    constructor(){
        super();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get(this.path, this.getPing)
    }

    getPing = (req: Request, res: Response) => {
        ResponseUtils.sendOkResponse(res, 'Pong');
    }
}