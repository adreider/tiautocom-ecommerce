import { getCustomRepository } from "typeorm";
import { UsersRepositories } from '../repositories/UsersRepositories';

class ListEmpresaSevice {
  
  async execute(empresa_id: string) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const empresa = await usersRepository.find({ 
      where: {
        empresaId: empresa_id,
      }
    })
    
    return empresa;
  };

}


export { ListEmpresaSevice }