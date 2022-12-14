import express from "express";
import User from "../models/userModel.js";
import Auth from '../Waremodel/auth.js';

import { register, signIn, insertMany, updateAge, deleteUser } from "../controll/user.js";

const router = express.Router();

router.post( '/register', register );

router.post( '/signIn', signIn );

router.post( '/insertMany', Auth, insertMany );

router.post( '/updateAge', Auth, updateAge );

router.post( '/deleteUser', Auth, deleteUser );

export default router;
