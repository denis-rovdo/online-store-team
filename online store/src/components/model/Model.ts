import data from "../../data/state"
import { Product } from "../../types/types";

class Model {
  data: Product[]
  filterData: Array<string>
  constructor() {
    this.data = data;
    this.filterData = [];
  }

}

export default Model;