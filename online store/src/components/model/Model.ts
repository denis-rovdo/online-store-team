import data from '../../data/state';
import { Product } from '../../types/types';

class Model {
    data: Product[];
    filterData: Array<string>;
    state: Product[];
    constructor() {
        this.state = data;
        this.data = data;
        this.filterData = [];
    }

    filterWithParams = (params: string) => {
        this.data = this.state.filter((el) => el.brand === params);
    };
}

export default Model;
