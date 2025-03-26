import { Router } from "express";
import { loginController, logoutController, registerUserController, userDetails } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js';

const userRouter=Router()

userRouter.post('/register',registerUserController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
userRouter.get('/user-details',auth,userDetails)


export default userRouter