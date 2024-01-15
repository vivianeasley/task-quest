import {html} from 'uhtml';
import {store} from "../store";
import { getRingImage } from '../rings/get-ring-image';
import { snakeToString } from '../rings/get-rings';
import dialogPolyfill from 'dialog-polyfill';

const { getState } = store;
const state = getState().state;
const purchaseItem = getState().purchaseItem;
const purchaseHealthPotion = getState().purchaseHealthPotion;

let currentRing;

export const shop = () => {

const getCost = (rarity) => {
    if (rarity === 'common') return 200;
    if (rarity === 'uncommon') return 500;
    return 1500;
}

return html`
    <div class="shop-wrapper">
        <div class="nes-container is-dark is-rounded mechant-wrapper">
            <img src="./merchants/merchant3.jpg" />
            <div>
            <div class="nes-balloon from-left is-dark">
                <p>My wares are top notch! Rings can be equipped for bonuses in the character menu.</p>
            </div>
            </div>
        </div>
        <div class="nes-container is-dark with-title">
            <p class="title">Health Potion</p>
            <div class="ring-content-wrapper"><div class="ring-image-wrapper">
                <img src="./remedy.svg">
            </div> 
                <div>Add 10 to health lost after failed quests.</div>
            </div>
            <div class="ring-buy-button">
                <div>100 gold</div> <button type="button" onclick=${()=>{
                    if (state.gold >= 100) {
                        const dialog = document.getElementById("dialog-purchase-potion");
                        dialogPolyfill.registerDialog(dialog);
                        dialog.showModal();
                    } else {
                        const dialog = document.getElementById('dialog-no-money');
                        dialogPolyfill.registerDialog(dialog);
                        dialog.showModal();
                    }
                }} class="nes-btn is-success">Buy</button>
            </div>
        </div>
        ${state.ringsInShop.map((ringData, index)=>{
            return html`
            <div class="nes-container is-dark with-title" data-id=${ringData.id}>
                <p class="title">${ringData.name}</p>
                <div class="ring-content-wrapper"><div class="ring-image-wrapper">${getRingImage(ringData.colors, ringData.rarity==='rare' || ringData.rarity==='uncommon', index)}</div> <div>${ringData.rarity} - ${ringData.effects.map((key)=>{
                    return html`${snakeToString(key)}`
                })}</div>
                </div>
                <div class="ring-buy-button" onclick=${()=>{
                    if ( state.gold <= getCost(ringData.rarity)) {
                        const dialog = document.getElementById('dialog-no-money');
                        dialogPolyfill.registerDialog(dialog);
                        dialog.showModal();
                    } else {
                        currentRing = ringData;
                        const dialog = document.getElementById("dialog-purchase");
                        dialogPolyfill.registerDialog(dialog);
                        dialog.showModal();
                    }
                    
                }}>
                   <div>${getCost(ringData.rarity)} gold</div> <button type="button" class="nes-btn is-success">Buy</button>
                </div>

            </div>
            `
        })}
        <dialog class="nes-dialog" id="dialog-purchase">
            <form method="dialog">
                <p class="title">Purchase ring?</p>
                <p>Are you sure you would like to purchase this ring for ${getCost(currentRing?.rarity)} gold? This action cannot be undone.</p>
                <menu class="dialog-menu">
                    <button class="nes-btn is-primary">Nay</button>
                    <button class="nes-btn is-primary" onclick=${()=>purchaseItem(currentRing?.id, getCost(currentRing?.rarity))}>Purchase</button>
                </menu>
            </form>
        </dialog>
        <dialog class="nes-dialog" id="dialog-no-money">
            <form method="dialog">
                <p class="title">Not enough gold</p>
                <p>You do not have enough gold to purchase this item. Complete more tasks!</p>
                <menu class="dialog-menu">
                    <button class="nes-btn is-primary">Got it</button>
                </menu>
            </form>
        </dialog>

        <dialog class="nes-dialog" id="dialog-purchase-potion">
            <form method="dialog">
                <p class="title">Purchase health potion?</p>
                <p>Are you sure you would like to purchase a health potion for 100 gold? This action cannot be undone.</p>
                <menu class="dialog-menu">
                    <button class="nes-btn is-primary">Nay</button>
                    <button class="nes-btn is-primary" onclick=${()=>purchaseHealthPotion()}>Purchase</button>
                </menu>
            </form>
        </dialog>


    </div>

`}
// TODO: buy random reward and restock shop