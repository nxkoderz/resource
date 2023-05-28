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
        throw new Error("Method not implemented.");
    }

    getPing = (req: Request, res: Response) => {
        ResponseUtils.sendOkResponse(res, 'Pong');
    }
}