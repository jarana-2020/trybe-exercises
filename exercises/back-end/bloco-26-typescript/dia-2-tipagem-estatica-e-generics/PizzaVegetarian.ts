import { Pizza } from "./exercise6";
import { Vegetarian } from "./flavorTypes";

export interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}