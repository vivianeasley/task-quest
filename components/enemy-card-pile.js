import {html} from 'uhtml';
import {hand} from './hand';

export const enemyCardPile = (card, index) => {
    const xOffset = 8;
    const yOffset = index%2 === 0 ? -8 : 8;

return html`
    <div class="card-backs-pile" style=${'transform: translate(-'+xOffset*(index+1)+'px,'+yOffset+'px)'} data-id="1">
        ${hand(card, index)}
    </div>
`}
