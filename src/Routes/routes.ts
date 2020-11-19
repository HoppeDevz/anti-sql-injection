import express, { Request, Response } from 'express';
import UserController from '../controllers/UsersControllers';

const routes = express.Router();

routes.get("/", (req: Request, res: Response) => {
    res.render('index.html');
});

routes.post("/login", UserController.Login, (req: Request, res: Response) => {
    res.status(req.body.status).send({
        auth: req.body.auth
    });
})


export default routes;