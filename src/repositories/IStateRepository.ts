import { State } from "@entities/State";

export interface IStateRepository {
  findAll(): Promise<State[]>;
}