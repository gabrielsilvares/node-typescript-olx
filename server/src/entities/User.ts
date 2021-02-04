import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Ad } from "./Ad";
import { State } from "./State";

@Index("UQ_e12875dfb3b1d92d7d7c5377e22", ["email"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "email", unique: true })
  email: string;

  @Column("character varying", { name: "password" })
  password: string;

  @Column("boolean", { name: "active", default: () => "true" })
  active: boolean;

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

  @ManyToOne(() => State, (state) => state.users, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn([{ name: "state_id", referencedColumnName: "id" }])
  state: State;

  @OneToMany(() => Ad, (ad) => ad.user)
  ads: Ad[];
  
}
