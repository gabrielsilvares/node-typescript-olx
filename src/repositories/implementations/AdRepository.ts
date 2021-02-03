import { Ad } from "@entities/Ad";
import { ICreateAdRequestDTO } from "@useCases/Ad/CreateAd/ICreateAdDTO";
import { getRepository } from "typeorm";

export class AdRepository {
  async save(ad: Ad): Promise<Ad> {
    const adRepository = await getRepository(Ad);

    return adRepository.save(ad);
  }

  async create({
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
  }: ICreateAdRequestDTO): Promise<Ad> {
    const adRepository = await getRepository(Ad);

    const ad = adRepository.create({
      user: {
        id: user_id
      },
      state: {
        id: state_id
      },
      category: {
        id: category_id
      },
      title,
      description,
      price,
      price_negociable,
      views,
      status,
      images
    });

    adRepository.save(ad);

    return ad;
  }
}