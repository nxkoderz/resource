import express, { Request, Response, Router } from 'express'
const router: Router = express.Router()
import { body, validationResult } from 'express-validator';
import BaseController from './BaseController';
import { log } from 'console';
import ResponseUtils from '../utils/ResponseUtill';
import CustomError from '../errors/CustomError';
import { ErrorType, UserType } from '../types/UserType';
import { User } from '../entity/User';
import { IUserServices } from '../interfaces/GenericInterfaces/IUserServices';

class UserController extends BaseController {
    router = Router();
    path = "/users"

    constructor(private _userServices: IUserServices) {
        super()
        this.initRoutes()
    }

    initRoutes = () => {
        this.router.post(this.path, this.validateUser(), this.saveUser);
    }


    saveUser = async (
        req: Request,
        res: Response,
    ) => {
        const err = validationResult(req);
        if(!err.isEmpty()){
            console.error(err);
            ResponseUtils.sendBadRequestResponse(res, new CustomError(err, ErrorType.FORM_VALIDATION))
            return;
        }else {
            try {
                const user = req.body;
                await this._userServices.Create(new User(user));
                ResponseUtils.sendCreatedResponse(res, this._userServices.getUserObject(user));
            } catch (error) {
                console.error(error);
                ResponseUtils.sendCreatedResponse(res, new CustomError(error));
            }
        }
    
    }
    
    validateUser = () => {
        return [
            body('name', 'User name can not be empty').notEmpty(),
            body('phone', 'Phone number can not be empty').notEmpty(),
            body('userType', 'User type can not be empty').notEmpty(),
            body('userType', 'User type should be ADMIN or USER').isIn([UserType.ADMIN, UserType.USER])
        ]
    }
}


export default UserController;