import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    try {

      const { name, email, admin, password, empresa_id } = request.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({ name, email, admin, password, empresa_id });

      return response.json(user)

    } catch (err) {

      return response.status(400).end(err);

    }
  }
}

export { CreateUserController }