import { State } from "@entities/State";
import { IStateRepository } from "@repositories/IStateRepository";

export class ListStateUseCase {
  constructor(
    private stateRepository: IStateRepository,
  ) {}

  async execute(): Promise<State[]> {
    const states = this.stateRepository.findAll();

    return states;
  }
}