import { Router } from "express";
import { CreateUserController } from "../models/users/createUserController";

const createUserController = new CreateUserController

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

export { userRoutes };