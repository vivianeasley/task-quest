import {html} from 'uhtml';
import {store, getLevel, levels} from "../store";
import { snakeToString } from '../rings/get-rings';
import dialogPolyfill from 'dialog-polyfill';


const { getState } = store;
const state = getState().state;
const equipItem = getState().equipItem;
const sellItem = getState().sellItem;
const resetGame = getState().resetGame;


let currentRing;

export const character = () => {
  const currentIndex = getLevel(state.lvlXp);

  const getValue= (rarity) => {
    if (rarity === 'common') return 50;
    if (rarity === 'uncommon') return 150;
    return 500;
}

  return html`
<div>
  <div class="nes-container is-dark">
  <div class="character-stats-wrapper">
    <img src=${"./characters/"+state.image} />
    <div>
      <h3>${state.name}</h3>
      <div>HP: ${state.hp} <progress class="nes-progress is-error hp-progress" value=${state.hp} max=${state.maxHp}></progress></div>
      <div>XP: ${state.lvlXp} <progress class="nes-progress is-warning hp-progress" value=${state.lvlXp } max=${levels[currentIndex]}></progress></div>
      <div>Gold: ${state.gold}</div>
    </div>
  </div>
  </div>
  <div class="nes-container is-dark with-title">
    <p class="title">Left Hand</p>
    <div>
      ${
        Object.keys(state.leftHand).map((finger)=>{
          return html`
          <div class="nes-container is-dark with-title">
            <p class="title">${snakeToString(finger)}</p>
            <div class="nes-select">
                <select id=${"rings-leftHand-"+finger} class=${state.leftHand[finger].name === undefined ? 'hidden' : ''} name=${"rings-leftHand-"+finger} onchange=${(event)=>equipItem(event.target.value, 'leftHand', finger)}>
                    <option value="" disabled selected=${state.leftHand[finger].name === undefined} hidden>Rings to equip</option>
                    ${state.inventory.map((ringObj)=>{
                      return html`<option value=${ringObj.id} selected=${ringObj.id === state.leftHand[finger].id}>${ringObj.name}</option>`
                    })}
                </select>
            </div>
            ${state.leftHand[finger]?.name !== undefined ? html`
            <div>${state.leftHand[finger]?.name}</div>
            ${
              state.leftHand[finger].effects.map((key)=>{
                return html`${snakeToString(key)}`
              })
            } 
            <div><button type="button" class="nes-btn is-error" onclick=${()=>{
              currentRing = state.leftHand[finger];
              const dialog = document.getElementById('dialog-sell');
              dialogPolyfill.registerDialog(dialog);
              dialog.showModal();
            }
            }>Sell</button>`: "No ring equipped"}</div>
          </div>
          `
        })
      }
    </div>
  </div>
  <div class="nes-container is-dark with-title">
    <p class="title">Right Hand</p>
    <div>
      ${
        Object.keys(state.rightHand).map((finger)=>{
          return html`
          <div class="nes-container is-dark with-title">
            <p class="title">${snakeToString(finger)}</p>
            <div class="nes-select">
                <select id=${"rings-rightHand-"+finger}  class=${state.rightHand[finger].name === undefined ? 'hidden' : ''} name=${"rings-rightHand-"+finger} onchange=${(event)=>equipItem(event.target.value, 'rightHand', finger)}>
                    <option value="" disabled selected hidden>Rings to equip</option>
                    ${state.inventory.map((ringObj)=>{
                      return html`<option value="1">${ringObj.name}</option>`
                    })}
                </select>
            </div>
            ${state.rightHand[finger]?.name !== undefined ? html`
            <div>${state.rightHand[finger]?.name}</div>
            ${
              state.rightHand[finger].effects.map((key)=>{
                return html`${snakeToString(key)}`
              })
            } <div><button type="button" class="nes-btn is-error">Sell</button>`: "No ring equipped"}</div>
          </div>
          `
        })
      }
    </div>
  </div>
  <dialog class="nes-dialog" id="dialog-sell">
    <form method="dialog">
        <p class="title">Sell ring?</p>
        <p>Are you sure you would like to sell this ring for ${getValue(currentRing?.rarity)} gold? This action cannot be undone.</p>
        <menu class="dialog-menu">
            <button class="nes-btn is-primary">Nay</button>
            <button class="nes-btn is-primary" onclick=${()=>sellItem(currentRing?.id, getValue(currentRing?.rarity))}>Sell</button>
        </menu>
    </form>
</dialog>
  <div>
  <button type="button" class="nes-btn is-error" style="margin-top: 16px; float: right" onclick=${()=>{
    const dialog = document.getElementById('dialog-delete-data');
    dialogPolyfill.registerDialog(dialog);
    dialog.showModal();
  }
  }>Delete Data</button>
  <dialog class="nes-dialog" id="dialog-delete-data">
  <form method="dialog">
      <p class="title">Sell ring?</p>
      <p>Are you sure you would like to delete this character and start over? This action cannot be undone.</p>
      <menu class="dialog-menu">
          <button class="nes-btn is-primary">Nay</button>
          <button class="nes-btn is-primary" onclick=${resetGame}>Delete Character</button>
      </menu>
  </form>
</dialog>
</div>

`}