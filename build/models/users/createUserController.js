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
exports.CreateUserController = void 0;
const createUserUseCase_1 = require("./createUserUseCase");
class CreateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, address, func, phone, pdf } = req.body;
            const createUserUseCase = new createUserUseCase_1.CreateUserUseCase();
            const result = yield createUserUseCase.execute({
                name, email, address, func, phone, pdf
            });
            return res.status(201).json(result);
        });
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=createUserController.js.map