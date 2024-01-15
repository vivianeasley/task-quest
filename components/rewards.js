import {html} from 'uhtml';
import {store} from "../store";
import dialogPolyfill from 'dialog-polyfill'

const { getState } = store;
const state = getState().state;
const addReward = getState().addReward;
const deleteReward = getState().deleteReward;

export const rewards = (card, index) => {
    const handleQuestSubmit = (event) => {
        event.preventDefault();
        
        const formNode = document.querySelector("#reward-form");
        const formData = new FormData(formNode);
        var object = {};
        formData.forEach((value, key) => object[key] = value);

        addReward({
            id: state.rewards1.length + state.rewards2.length + state.rewards3.length + 1,
            name: object.name ?? "Untitled reward",
        }, object.level ? 'rewards' + object.level : 'rewards1');
        formNode.reset();
    }

return html`
<div class="quests-wrapper">
    <details>
    <summary><h3 style="display:inline-block">Create reward</h3></summary>
    <form id="reward-form">
        <div class="nes-field">
            <input type="text" required id="name_reward_field" name="name" class="nes-input" placeholder="reward name">
        </div>

        <div class="nes-select">
            <select id="select_level" name="level">
                <option value="" disabled selected hidden>Quality</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
            </select>
        </div>

        <div class="quest-submit-wrapper">
            <button type="submit" class="nes-btn is-primary quest-submit" onclick=${handleQuestSubmit}>Add Quest</button>
        </div>
    </form>
    </details>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark quests">
            <p class="title"><i class="nes-icon is-small star"></i></p>
            <div>
                ${state.rewards1.map((rewardObj)=>html`<div class="reward">
                    <div class="name-reward">${rewardObj.name}</div>
                    <div class="remove-reward">
                    <button type="button" class="nes-btn is-error" onclick=${()=>{
                        const dialog = document.getElementById('dialog-delete-reward1');
                        dialogPolyfill.registerDialog(dialog);
                        dialog.showModal();
                    }} >
                        <span>&nbsp;<i class="nes-icon close is-small"></i>&nbsp;</span>
                    </button>
                    <dialog class="nes-dialog" id="dialog-delete-reward1">
                    <form method="dialog">
                        <p class="title">Delete level 1 reward?</p>
                        <p>Are you sure you would like to delete this reward? This action cannot be undone.</p>
                        <menu class="dialog-menu">
                            <button class="nes-btn">Nay</button>
                            <button class="nes-btn is-primary" onclick=${()=>deleteReward("rewards1", rewardObj.id)}>Delete</button>
                        </menu>
                        </form>
                    </dialog>
                    </div>

                <div>`)}
            </div>
        </div>

    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title"><i class="nes-icon is-small star"></i><i class="nes-icon is-small star"></i></p>
            <div>
                ${state.rewards2.map((rewardObj)=>html`<div class="reward">
                    <div class="name-reward">${rewardObj.name}</div>
                    <div class="remove-reward">
                        <button type="button" class="nes-btn is-error" onclick=${()=>{
                            const dialog = document.getElementById('dialog-delete-reward2');
                            dialogPolyfill.registerDialog(dialog);
                            dialog.showModal();
                        }} >
                            <span>&nbsp;<i class="nes-icon close is-small"></i>&nbsp;</span>
                        </button>
                        <dialog class="nes-dialog" id="dialog-delete-reward2">
                        <form method="dialog">
                            <p class="title">Delete level 2 reward?</p>
                            <p>Are you sure you would like to delete this reward? This action cannot be undone.</p>
                            <menu class="dialog-menu">
                                <button class="nes-btn">Nay</button>
                                <button class="nes-btn is-primary" onclick=${()=>deleteReward("rewards2", rewardObj.id)}>Delete</button>
                            </menu>
                            </form>
                        </dialog>
                    </div>

                <div>`)}
            </div>
        </div>

    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title"><i class="nes-icon is-small star"></i><i class="nes-icon is-small star"></i><i class="nes-icon is-small star"></i></p>
            <div>
                ${state.rewards3.map((rewardObj)=>html`<div class="reward">
                    <div class="name-reward">${rewardObj.name}</div>
                    <div class="remove-reward">
                        <button type="button" class="nes-btn is-error" onclick=${()=>{
                            const dialog = document.getElementById('dialog-delete-reward3');
                            dialogPolyfill.registerDialog(dialog);
                            dialog.showModal();
                        }} >
                            <span>&nbsp;<i class="nes-icon close is-small"></i>&nbsp;</span>
                        </button>
                        <dialog class="nes-dialog" id="dialog-delete-reward3">
                        <form method="dialog">
                            <p class="title">Delete level 3 reward?</p>
                            <p>Are you sure you would like to delete this reward? This action cannot be undone.</p>
                            <menu class="dialog-menu">
                                <button class="nes-btn">Nay</button>
                                <button class="nes-btn is-primary" onclick=${()=>deleteReward("rewards3", rewardObj.id)}>Delete</button>
                            </menu>
                            </form>
                        </dialog>
                    </div>

                <div>`)}
            </div>
        </div>

    </div>
</div>
`}
