import { Pizza } from "./exercise6";
import { Common } from "./flavorTypes";

export interface PizzaCommon extends Pizza {
  flavor: Common
}
