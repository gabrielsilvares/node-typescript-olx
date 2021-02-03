import { Category } from "@entities/Category";
import { ICategoryRepository } from "@repositories/ICategoryRepository";

export class ListCategoriesUseCase {
  constructor(
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = this.categoryRepository.findAll();

    return categories;
  }
}