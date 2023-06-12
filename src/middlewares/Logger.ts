import { Request, Response } from "express"

const Logger = (req: Request, res: Response, next: any) => {
    console.log("Incoming request: ", req.method, req.path)
    next()
}

export default Logger