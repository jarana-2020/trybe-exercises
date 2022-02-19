import { Pizza } from "./exercise6";
import { Sugar } from "./flavorTypes";

export interface PizzaSugar extends Pizza {
  flavor: Sugar,
  slices: 4
}