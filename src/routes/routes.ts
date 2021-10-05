import { Router } from "express";
import { CreateUserController } from "../controller/CreateUserController";
import { AuthenticateUserController } from "../controller/AuthenticateUserController";
import { EnsureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateEmpresaController } from "../controller/CreateEmpresaController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createEmpresaController = new CreateEmpresaController();

router.post("/users", createUserController.handle);
router.post("/empresas", createEmpresaController.handle);
router.post("/login", authenticateUserController.handle);

export { router };