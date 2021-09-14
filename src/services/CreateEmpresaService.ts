import { getCustomRepository } from "typeorm";
import { EmpresaRepositories } from "../repositories/EmpresaRepositories";

interface IEmpresaRequest {
  name: string;
  logo: string;
  cnpj: string;
  active: boolean;
}

class CreateEmpresaService {

  async execute({ name, cnpj, logo, active }: IEmpresaRequest) {

    const empresaRepository = getCustomRepository(EmpresaRepositories);

    if (!name) {
      throw new Error("empresa is not defined")
    }

    const empresaAlreadyExists = await empresaRepository.findOne({
      cnpj
    })

    if (empresaAlreadyExists) {
      throw new Error("empresa already exists")
    }

    const empresa = empresaRepository.create({
      name,
      logo,
      cnpj,
      active
    })

    await empresaRepository.save(empresa)

    return empresa;
  }
}

export { CreateEmpresaService }