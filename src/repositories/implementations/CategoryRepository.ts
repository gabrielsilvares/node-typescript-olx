import { Category } from "@entities/Category";
import { getRepository } from "typeorm";

export class CategoryRepository {
  async findAll(): Promise<Category[]> {
    const stateRepository = await getRepository(Category);

    const categories = stateRepository.find();

    return categories;
  }
}