import express from 'express';
import usersController from '../controllers/usersController.js';
import validation from "../middlewares/validationMiddlewares.js"
import userSchema from "../validations/userValidation.js"
const router = express.Router();

router.get('/', usersController.getUsers);
router.post('/',validation(userSchema), usersController.saveUser);

export default router;
