import { Request, Response } from "express";
import { CreateEmpresaService } from "../services/CreateEmpresaService";

class CreateEmpresaController {

  async handle(request: Request, response: Response) {

    try {
      const { name, cnpj } = request.body;

      const createEmpresaService = new CreateEmpresaService();

      const empresa = await createEmpresaService.execute({
        name, cnpj
      })

      return response.json(empresa);
    } catch (err) {

      return response.status(400).json({ error: err.message });

    }

  }
}

export { CreateEmpresaController }