import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { State } from "./State";
import { Image } from "./Image";
import { User } from "./User";

@Entity("ad", { schema: "public" })
export class Ad {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("character varying", { name: "title" })
  title: string;

  @Column("character varying", { name: "description" })
  description: string;

  @Column("numeric", { name: "price", precision: 65, scale: 30 })
  price: number;

  @Column("boolean", { name: "price_negociable" })
  price_negociable: boolean;

  @Column("integer", { name: "views" })
  views: number;

  @Column("character varying", { name: "status" })
  status: string;

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

  @ManyToOne(() => User, (user) => user.ads, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;

  @ManyToOne(() => State, (state) => state.ads, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn([{ name: "state_id", referencedColumnName: "id" }])
  state: State;
  
  @ManyToOne(() => Category, (category) => category.ads, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category: Category;

  @OneToMany(() => Image, (image) => image.ad, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'ad_id' })
  images: Image[];
}
