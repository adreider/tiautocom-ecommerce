import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity("client")
class Client {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

}

export { Client }
