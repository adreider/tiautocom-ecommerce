import { getCustomRepository } from "typeorm";
import { EmpresaRepository }  from "../repositories/EmpresaRepositories";

interface IEmpresaRequest {
  name: string;
  cnpj: string;
}

class CreateEmpresaService {

  async execute({name, cnpj}: IEmpresaRequest) {

    const empresaRepository = getCustomRepository(EmpresaRepository);

    if(!name) {
      throw new Error("empresa is not defined")
    }

    const empresaAlreadyExists = await empresaRepository.findOne({
      cnpj
    })

    const empresa = empresaRepository.create({ 
      name, 
      cnpj
    })

    await empresaRepository.save(empresa)

    return empresa;
  }
}

export { CreateEmpresaService }