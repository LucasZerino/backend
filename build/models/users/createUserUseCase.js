"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const AppError_1 = require("../../erros/AppError");
const client_1 = require("../../prisma/client");
class CreateUserUseCase {
    execute({ name, email, address, func, phone, pdf }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExist = yield client_1.prisma.user.findUnique({
                where: {
                    email
                }
            });
            if (userExist) {
                throw new AppError_1.AppError("O usuário já existe!");
            }
            const user = yield client_1.prisma.user.create({
                data: {
                    name, email, address, func, phone, pdf
                }
            });
            return user;
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=createUserUseCase.js.map