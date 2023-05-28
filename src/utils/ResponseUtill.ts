import { Response } from "express";

export default class ResponseUtils {
    static sendBadRequestResponse = (res: Response, err: any) => res.status(400).send(err);
    static sendOkResponse = (res: Response, err: any) => res.status(200).send(err);
    static sendBadServerResponse = (res: Response, err: any) => res.status(500).send(err);
}