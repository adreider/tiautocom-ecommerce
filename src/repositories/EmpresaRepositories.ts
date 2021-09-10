import { EntityRepository, Repository } from "typeorm";
import { Empresa } from "../entities/Empresa";

@EntityRepository(Empresa)
class EmpresaRepositories extends Repository<Empresa> {

}

export { EmpresaRepositories }