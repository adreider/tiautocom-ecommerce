import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { EmpresaRepositories } from "../repositories/EmpresaRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
  empresa_id: string;
}

class CreateUserService {

  async execute({ name, email, admin, password, empresa_id }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);
    const empresaRepository = getCustomRepository(EmpresaRepositories); 

    if (!email) {
      throw new Error("User exists")
    }

    const empresaAlreadyExists = await empresaRepository.findOne(empresa_id)
    
    if(!empresaAlreadyExists) {
      throw new Error("empresa does not exist")
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
      empresa_id
    })

    await usersRepository.save(user)

    return user;
  }
}

export { CreateUserService }