import { Column, Entity, OneToMany } from "typeorm";
import { Ad } from "./Ad";

@Entity("category", { schema: "public" })
export class Category {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "slug" })
  slug: string;

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

  @OneToMany(() => Ad, (ad) => ad.category)
  ads: Ad[];
}
