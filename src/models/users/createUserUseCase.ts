import { AppError } from "../../erros/AppError";
import { prisma } from "../../prisma/client";
import { CreateUserDTO } from "./dtosUser";

export class CreateUserUseCase{
    async execute({name, email, address, func, phone, pdf}: CreateUserDTO){
        const userExist = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(userExist){
            throw new AppError("O usuário já existe!")
        }
        const user = await prisma.user.create({
            data: {
                name, email, address, func, phone, pdf
            }
        })
        return user;
    }
}