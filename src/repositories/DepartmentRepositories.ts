import { EntityRepository, Repository } from "typeorm";
import { Department } from "../entities/Department";

EntityRepository(Department)

class DepartmentRespositories extends Repository<Department> {

}

export { DepartmentRespositories }