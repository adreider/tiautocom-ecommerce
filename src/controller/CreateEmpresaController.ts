import { Request, Response } from "express";
import { CreateEmpresaService } from "../services/CreateEmpresaService";

class CreateEmpresaController {

  async handle(request: Request, response: Response) {

    try {
      const { name, cnpj, logo, active } = request.body;

      const createEmpresaService = new CreateEmpresaService();

      const empresa = await createEmpresaService.execute({ name, cnpj, logo, active});

      return response.json(empresa);
    } catch (err) {

      return response.status(400).end(err);

    }

  }
}

export { CreateEmpresaController }