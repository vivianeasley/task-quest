import {html} from 'uhtml';
import {store} from "../store";
import { questItem } from './quest-item';

const { getState } = store;
const state = getState().state;
const addActiveQuest = getState().addActiveQuest;

export const quests = (card, index) => {
    const handleQuestSubmit = (event) => {
        event.preventDefault();
        
        const formNode = document.querySelector("#quest-form");
        const formData = new FormData(formNode);
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        // console.log(JSON.stringify({
        //     id: state.activeQuests.length + state.completedQuests.length + state.failedQuests.length + state.wontDoQuests.length + 1,
        //     name: object.name ?? "Untitled task",
        //     difficulty: object.difficulty ?? 1,
        //     importance: object.importance ?? 1,
        //     reoccurs: object.reoccurs ?? "daily", // daily, weekly, monthly
        //     dueDateDays: object.dueDateDays ?? 1, // days from now
        //     created: Date.now()
        // }))
        addActiveQuest({
            id: state.activeQuests.length + state.completedQuests.length + state.failedQuests.length + state.wontDoQuests.length + 1,
            name: object.name ?? "Untitled task",
            difficulty: object.difficulty ?? 1,
            importance: object.importance ?? 1,
            reoccurs: object.reoccurs === true ? true : false, // daily, weekly, monthly
            dueDateDays: object.dueDateDays ?? 1, // days from now
            created: Date.now()
        })
        formNode.reset();
    }

return html`
<div class="quests-wrapper">
    <details open=${state.activeQuests.length === 0}>
    <summary><h3 style="display:inline-block">Create quest</h3></summary>
    <form id="quest-form">
        <div class="nes-field">
            <input type="text" required id="name_quest_field" name="name" class="nes-input" placeholder="quest name">
        </div>
        <div class="quest-selects">
            <div class="nes-select">
                <select id="select_difficulty" name="difficulty">
                    <option value="" disabled selected hidden>Difficulty</option>
                    <option value="1">low</option>
                    <option value="2">medium</option>
                    <option value="3">high</option>
                    <option value="4">Epic</option>
                </select>
            </div>
            <div class="nes-select">
                <select id="select_importance" name="importance">
                    <option value="" disabled selected hidden>Importance</option>
                    <option value="1">low</option>
                    <option value="2">medium</option>
                    <option value="3">high</option>
                    <option value="4">Epic</option>
                </select>
            </div>
        </div>
        <div class="quest-selects">
            <div class="nes-select">
                <select id="select_days_due" name="dueDateDays">
                    <option value="" disabled selected hidden>Days till due</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
            </div>
            <div class="nes-select">
                <label>
                    <input type="checkbox" class="nes-checkbox" name="reoccurs" />
                    <span>Reoccurs</span>
                </label>
            </div>
        </div>
        <div class="quest-submit-wrapper">
            <button type="submit" class="nes-btn is-primary quest-submit" onclick=${handleQuestSubmit}>Add Quest</button>
        </div>
    </form>
    </details>
    
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark quests active-quests">
            <p class="title">Active quests</p>
            <p>
                <!-- Sort by days until due -->
                ${state.activeQuests.map((questObj, index)=>questItem(questObj, 'activeQuests', index))}
            </p>
        </div>
    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title">Completed quests</p>
            <p>
                <!-- Sort by days until due -->
                ${state.completedQuests.map((questObj, index)=>questItem(questObj, 'completedQuests', index))}
            </p>
        </div>
    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title">Failed quests</p>
            <p>
                <!-- Sort by days until due -->
                ${state.failedQuests.map((questObj, index)=>questItem(questObj, 'failedQuests', index))}
            </p>
        </div>
    </div>
    <div class="spacer"></div>
    <div>
        <div class="nes-container with-title is-dark">
            <p class="title">Wont do quests</p>
            <p>
                <!-- Sort by days until due -->
                ${state.wontDoQuests.map((questObj, index)=>questItem(questObj, 'wontDoQuests', index))}
            </p>
        </div>
    </div>
</div>
`}
