import {Request, Response} from "express";
import {CreateUserInput} from "../types/CreateUserInput";
import {UserModel} from "../models/UserModel";

const userModel = new UserModel();

export const createUser = async (req: Request, res: Response) => {
    try {
        const createUserInput: CreateUserInput = req.body;
        await userModel.createUser(createUserInput);
        res.send({
            message: "Success"
        })
    } catch (e) {
        res.status(403).send({
            message: "Create not successful"
        })
    }
}