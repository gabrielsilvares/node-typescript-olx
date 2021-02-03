import { Ad } from "@entities/Ad";
import { ICreateAdRequestDTO } from "@useCases/Ad/CreateAd/ICreateAdDTO";

export interface IAdRepository {
  save(ad: Ad): Promise<Ad>;
  create({
    user_id,
    state_id,
    category_id,
    title,
    description,
    price,
    price_negociable,
    views,
    status,
    images 
  }: ICreateAdRequestDTO);
}