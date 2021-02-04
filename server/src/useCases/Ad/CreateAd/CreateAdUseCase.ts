import { IAdRepository } from '@repositories/IAdRepository';
import { ICreateAdRequestDTO } from './ICreateAdDTO';
import ISearchProvider from '@providers/ISearchProiveder';
import { Ad } from '@entities/Ad';

export class CreateAdUseCase {
  constructor(
    private adRepository: IAdRepository,
    private searchProvider: ISearchProvider,
  ) {}

  async execute({
    user_id,
    state_id,
    category_id,
    title,
    description,
    price,
    price_negociable,
    images
  }: ICreateAdRequestDTO): Promise<Ad> {

    const ad = await this.adRepository.create({
      user_id,
      state_id,
      category_id,
      title,
      description,
      price,
      price_negociable,
      views: 0,
      status: 'recente',
      images
    });

    await this.searchProvider.push('clients', 'default', `${ad.id}`, `${title} ${description}`, {
      lang: 'por'
    });

    return ad; 
  }
}