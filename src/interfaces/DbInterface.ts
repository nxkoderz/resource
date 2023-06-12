import { IsDateOptions } from './../../node_modules/express-validator/src/options.d';
export interface DbInterface {
    Item?: any;
}

export interface UserInterface {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
}