import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";

EntityRepository(Product)
class ProductRespositories extends Repository<Product> {
  
}

export { ProductRespositories }; 