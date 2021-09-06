import { EntityRepository, Repository } from "typeorm";
import { Empresa } from "../entities/Empresa";

@EntityRepository(Empresa)
class EmpresaRepository extends Repository<Empresa> {

}

export { EmpresaRepository }