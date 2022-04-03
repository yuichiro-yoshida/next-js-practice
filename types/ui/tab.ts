import Desirability from "../desirability";

export default interface Tab {
  readonly desirability: Desirability;
  readonly label: string;
  readonly icon?: string;
}
