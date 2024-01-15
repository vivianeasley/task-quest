import {store, getLevel} from "../store";
import {html} from 'uhtml';
import {quests} from './quests';
import {rewards} from './rewards';
import {character} from './character';
import {shop} from './shop';
import dialogPolyfill from 'dialog-polyfill'

const avatars = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg"]

const { getState } = store;
const state = getState().state;
const setCurrentView = getState().setCurrentView;
const setAvatar = getState().setAvatar;
const setName = getState().setName;

export const app = () => {
    const startDialog = document.getElementById('dialog-start-game');
    if (state.name === undefined && startDialog.getAttribute('open') === null) {
        dialogPolyfill.registerDialog(startDialog);
        startDialog.showModal();
    }
        

return html`
    <div class="game-wrapper">
        <header>
            <button type="button" class="nes-btn is-primary" onclick=${()=>setCurrentView("character")}>
                <span class="button-text">Character</span>
                <img class="button-icon" src="./icons/3d-meeple.svg">
            </button>
            <button type="button" class="nes-btn is-error" onclick=${()=>setCurrentView("quests")}>
                <span class="button-text">Quests</span>
                <img class="button-icon" src="./icons/check-mark.svg">
            </button>
            <button type="button" class="nes-btn is-warning" onclick=${()=>setCurrentView("rewards")}>
                <span class="button-text">Rewards</span>
                <img class="button-icon" src="./icons/holy-grail.svg">
            </button>
            <button type="button" class="nes-btn is-success" onclick=${()=>setCurrentView("shop")}>
                <span class="button-text">Store</span>
                <img class="button-icon" src="./icons/two-coins.svg">
            </button>
        </header>
        <div class="stats-wrapper">
            <div class="stats">
                <span><i class="nes-icon is-small star"></i> LVL:${getLevel(state.lvlXp)}</span>
                <span><i class="nes-icon heart is-small"></i> HP:${state.hp}</span>
                <span><i class="nes-icon trophy is-small"></i></i> XP:${state.lvlXp}</span>
                <span><i class="nes-icon coin is-small"></i> COIN:${state.gold}</span>
            </div>
        </div>
        <main>
            ${
                {
                    character: html`${character()}`,
                    quests: html`${quests()}`,
                    rewards: html`${rewards()}`,
                    shop: html`${shop()}`,
                }[state.currentView ?? "character"]
            }
        </main>
        <dialog class="nes-dialog" id="dialog-level-up">
            <form method="dialog">
            <p class="title">You leveled up!</p>
            <p>Your are now level ${state.lvl}. Congratulations!</p>
            <menu class="dialog-menu">
                <button class="nes-btn is-primary">Yay</button>
            </menu>
            </form>
        </dialog>

        <dialog class="nes-dialog" id="dialog-start-game">
            <form method="dialog">
            <p class="title">You leveled up!</p>
            <div>Choose a name and an avatar:</div>
            <div class="nes-field">
                <input type="text" required id="name_character_field" name="character-name" class="nes-input" placeholder="quest name">
            </div>
            <div>
                ${
                    avatars.map((imgString)=>{

                        return html`
                            <img src=${"./characters/"+imgString} onclick=${()=>setAvatar(imgString)} class=${imgString === state.image ? "avatars selected" : "avatars" } />
                        `;
                    })
                }
            </div>
            <menu class="dialog-menu">
                <button class="nes-btn is-primary" onclick=${()=>{
                    const inputNode = document.querySelector('#name_character_field');
                    setName(inputNode.value);
                }} >Begin Quest!</button>
            </menu>
            </form>
        </dialog>
    </div>
`}