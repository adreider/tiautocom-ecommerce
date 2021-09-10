import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Department } from "./Department";
import { v4 as uuid } from "uuid";

@Entity("product")
class Product {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  custo: string;

  @Column()
  department_id: string;
  @JoinColumn({ name: 'department_id' })
  @ManyToOne(() => Department)
  departmentId: Department

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Product }