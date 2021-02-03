import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Ad } from "./Ad";

@Entity("image", { schema: "public" })
export class Image {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "path" })
  path: string;

  @ManyToOne(() => Ad, (ad) => ad.images, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ad_id", referencedColumnName: "id" }])
  ad: Ad;
}
