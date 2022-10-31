"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const createUserController_1 = require("../models/users/createUserController");
const createUserController = new createUserController_1.CreateUserController;
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("/", createUserController.handle);
//# sourceMappingURL=user.routes.js.map