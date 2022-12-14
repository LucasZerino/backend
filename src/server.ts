import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from './erros/AppError';
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes)
app.get("/", (req, res) => {
    return res.json({ message: "Api funcionando!" })
})
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})
app.listen(3333, () => console.log('Server is running!'));