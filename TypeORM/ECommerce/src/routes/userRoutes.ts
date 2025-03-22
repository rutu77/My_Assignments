import {UserController} from "../controllers/userController"
import express from "express"

const router= express.Router();
const userController= new UserController()

router.post('/create', (req, res) => userController.createUser(req, res));
router.get('/:id', (req, res) => userController.getUserById(req, res));
router.get('/getall/all', (req, res) => userController.getAllUsers(req, res));
router.get('/user/where', (req, res) => userController.DemoWhereToWhere(req, res));


export {router as userRoutes}