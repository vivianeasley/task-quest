import {html} from 'uhtml';
import {store} from "../store";
import { differenceInCalendarDays, format} from "date-fns";
import dialogPolyfill from 'dialog-polyfill'

const { getState } = store;
// const state = getState().state;
const moveQuest = getState().moveQuest;
const deleteQuest = getState().deleteQuest;


export const questItem = (questObj, location, index) => {

    // wont do => whatever okay
    // add delete for won't do
    // failed can't move
    // completed can't move
    // completed and failed add copy to active

    // when reoccuring quest completed or failed add another to active quests

return html`
    <details class="quest-details" data-key=${questObj.id}>
        <summary>${questObj.name} 
            ${
                location === "activeQuests" || location === "wontDoQuests" ?
                html`- ${questObj.dueDateDays - differenceInCalendarDays(new Date(questObj.created), Date.now())} days` :
                null
            }
        <br/> 
            ${
                location === "activeQuests" || location === "wontDoQuests" ?
                html`
                    <span>
                        <button type="button" class="nes-btn is-success is-small" onclick=${()=>{
                            const dialog = document.getElementById('dialog-complete-quest'+questObj.id);
                            dialogPolyfill.registerDialog(dialog);
                            dialog.showModal();
                        }}>
                            <span>&nbsp;<i class="nes-icon trophy is-small"></i>&nbsp;</span>
                        </button>
                        <dialog class="nes-dialog" id=${"dialog-complete-quest"+questObj.id}>
                            <form method="dialog">
                            <p class="title">Complete Quest?</p>
                            <p>Are you sure you would like to complete this quest? This action cannot be undone.</p>
                            <menu class="dialog-menu">
                                <button class="nes-btn">Nay</button>
                                <button class="nes-btn is-primary" onclick=${()=>moveQuest(location, 'completedQuests', questObj.id)}>Complete</button>
                            </menu>
                            </form>
                        </dialog>
                        <button type="button" class="nes-btn is-error is-small" onclick=${()=>{
                            const dialog = document.getElementById('dialog-fail-quest'+questObj.id);
                            dialogPolyfill.registerDialog(dialog);
                            dialog.showModal();
                        }}>
                            <span>&nbsp;<i class="nes-icon close is-small"></i>&nbsp;</span>
                        </button>
                        <dialog class="nes-dialog" id=${"dialog-fail-quest"+questObj.id}>
                        <form method="dialog">
                            <p class="title">Fail Quest?</p>
                            <p>Are you sure you would like to fail this quest? This action cannot be undone.</p>
                            <menu class="dialog-menu">
                                <button class="nes-btn">Nay</button>
                                <button class="nes-btn is-primary" onclick=${()=>moveQuest(location, 'failedQuests', questObj.id)}>Fail</button>
                            </menu>
                            </form>
                        </dialog>
                        <button type="button" class="nes-btn is-small" onclick=${()=>moveQuest(location, 'wontDoQuests', questObj.id)}>
                            <span>&nbsp;╍&nbsp;</span>
                        </button>
                    </span>
                ` :
                null

            }  

            ${location === "wontDoQuests" ? html`
            <button type="button" class="nes-btn is-small" onclick=${()=>{
                const dialog = document.getElementById('dialog-delete-quest'+questObj.id);
                dialogPolyfill.registerDialog(dialog);
                dialog.showModal();
            }}>
                <span>Delete</span>
            </button>
            ` : null}
            <dialog class="nes-dialog" id=${"dialog-delete-quest"+questObj.id}>
            <form method="dialog">
                <p class="title">Delete Quest?</p>
                <p>Are you sure you would like to delete this quest? This action cannot be undone.</p>
                <menu class="dialog-menu">
                    <button class="nes-btn">Nay</button>
                    <button class="nes-btn is-primary" onclick=${()=>deleteQuest('wontDoQuests', questObj.id)}>Delete</button>
                </menu>
                </form>
            </dialog>
        </summary>
            <div class="details-content">
                <div>Difficulty: ${questObj.difficulty}</div>
                <div>Importance: ${questObj.importance}</div>
                <div>Days left: ${questObj.dueDateDays - differenceInCalendarDays(new Date(questObj.created), Date.now())}</div>
                <div>Created at: ${questObj.created ? format(new Date(questObj.created), 'MMMM do yyyy') : null}</div>
                <div>Reoccurs: ${questObj.reoccurs}</div>
            </div>
        </div>
    </details>
`}

