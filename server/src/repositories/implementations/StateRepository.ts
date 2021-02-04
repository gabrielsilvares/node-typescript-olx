import { State } from "@entities/State";
import { getRepository } from "typeorm";

export class StateRepository {
  async findAll(): Promise<State[]> {
    const stateRepository = await getRepository(State);

    const states = stateRepository.find();

    return states;
  }
}