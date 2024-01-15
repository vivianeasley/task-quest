import {html} from 'uhtml';
import {hand} from './hand';

export const characterCardPile = (card, index) => {
    const xOffset = 8;

return html`
    <div class="card-backs-pile" style=${'transform: translate(-'+xOffset*(index+1)+'px,0px)'}>
        ${hand(card, index)}
    </div>
`}
