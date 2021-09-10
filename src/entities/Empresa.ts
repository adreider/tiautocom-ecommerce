import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("empresa")
class Empresa {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  logo: string;

  @Column()
  active: boolean;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export { Empresa }