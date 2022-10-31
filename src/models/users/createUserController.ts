import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController{
    async handle(req: Request, res:Response){
        const {name, email, address, func, phone, pdf} = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({
            name, email, address, func, phone, pdf
        });

        return res.status(201).json(result);
    }
}