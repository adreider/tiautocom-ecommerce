import { Column, Entity, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Empresa } from "./Empresa";


@Entity("department")
class Department {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  description: string;

  @Column()
  empresa_id: string;
  @JoinColumn({ name: "empresa_id"})
  @ManyToOne(() => Empresa)
  empresaId: Empresa

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export { Department };