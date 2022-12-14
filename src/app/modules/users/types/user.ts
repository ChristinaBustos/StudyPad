import { Entity } from "../../../types/entity";
export type User = Entity<number> & {
  username: string;
};
