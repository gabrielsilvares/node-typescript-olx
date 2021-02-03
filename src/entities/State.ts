import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ad } from "./Ad";
import { User } from "./User";

@Entity("state", { schema: "public" })
export class State {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @OneToMany(() => Ad, (ad) => ad.state)
  ads: Ad[];

  @OneToMany(() => User, (user) => user.state)
  users: User[];
}
