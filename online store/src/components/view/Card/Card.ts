import state from '../../../data/state';
import { Product } from '../../../types/types';
import './Card.module.scss';

export class Card {
    state: Product[];
    constructor(state: Product[]) {
        this.state = state;
    }
    createCard() {
        return `
    <div class="card">
      <img src='${state[0].thumbnail}' class="thumbnail">
    </div>
    `;
    }
}
