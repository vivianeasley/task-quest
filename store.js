import { createStore } from 'zustand/vanilla';
import { differenceInCalendarDays} from "date-fns";
import dialogPolyfill from 'dialog-polyfill';
import { generateRing, effectsCommon, effectsUncommon, effectsRare } from './rings/get-rings';

import { persist, createJSONStorage } from 'zustand/middleware'

export const levels = [1, 5, 11, 20, 40, 80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800,840,880,920,960,1000,1040,1080,1120,1160,1200,1240,1280,1320,1360,1400,1440,1480,1520,1560,1600,1640,1680,1720,1760,1800,1840,1880,1920,1960,2000,2040,2080,2120,2160,2200,2240,2280,2320,2360,2400,2440,2480,2520,2560,2600,2640,2680,2720,2760,2800,2840,2880,2920,2960,3000,3040,3080,3120,3160,3200,3240,3280,3320,3360,3400,3440,3480,3520,3560,3600,3640,3680,3720,3760,3800,3840];

export const getLevel = (xp) => {
  for (let index = 0; index < levels.length; index++) {
    if (xp < levels[index]) return index;
  }
}

const effects = {...effectsCommon, ...effectsUncommon, ...effectsRare};

function generateNewRings () {
  const rarityKeys = ['common', 'common', 'uncommon', 'rare'];
  return rarityKeys.map((rarity)=>{
    return generateRing(rarity);
  })

}

const DEFAULT_STORE = {
    image: undefined,
    name: undefined,
    lvlXp: 0,
    hp: 10,
    maxHp: 10,
    xp: 0,
    gold: 0,
    xpBonus: 0,
    goldBonus: 0,
    currentView: "quests",
    rewards1: [
        {
          id: 1,
          name: "10 min of internet vegging.",
        },
        {
          id: 2,
          name: "15 min of internet vegging.",
        },
        {
          id: 3,
          name: "10 min Pet cuddle break.",
        }
    ],
    rewards2: [
        {
          id: 4,
          name: "Pizza tonight!",
        },
        {
          id: 5,
          name: "Watch an episode of your favorite show when you have free time.",
        },
    ],
    rewards3: [
        {
          id: 5,
          name: "Pizza party!",
        },
        {
          id: 6,
          name: "Get yourself something you've been meaning to get yourself.",
        },
    ],
    activeQuests: [],
    completedQuests: [],
    failedQuests: [],
    wontDoQuests: [],
    rightHand: {
      forefinger: {

      },
      middleFinger: {

      },
      ringFinger: {

      }, 
    },
    leftHand: {
      forefinger: {

      },
      middleFinger: {

      },
      ringFinger: {

      }, 
    },
    inventory: [],
    ringsInShop: generateNewRings()
  };


// export const store = createStore((set, get) => ())


export const store = createStore(
  persist(
    (set, get) => ({
      state: {...DEFAULT_STORE},
      setCurrentView: (view) => {
        const stats = get().state;
        stats.currentView = view;
        set({ state: stats });
      },
      setAvatar: (avatar) => {
        const stats = get().state;
        stats.image = avatar;
        set({ state: stats });
      },
      setName: (name) => {
        const stats = get().state;
        stats.name = name;
        set({ state: stats });
      },
      addActiveQuest: (quest) => {
        const stats = get().state;
        stats.activeQuests.push(quest);
        set({ state: stats });
      },
      moveQuest: (from, target, id) => {
        const stats = get().state;
        // console.log(from, stats[from], id)
        const index = stats[from].findIndex((quest)=>quest.id+"" === id || quest.id === id)
        const quest = stats[from].splice(index, 1);
        // console.log(index, quest)

        if (target === 'completedQuests') {
          const dueDateDays = parseInt(quest[0].dueDateDays, 10);
          const difficulty = parseInt(quest[0].difficulty, 10);
          const importance = parseInt(quest[0].importance, 10);
          const days = dueDateDays - differenceInCalendarDays(new Date(quest[0].created), Date.now());

          const lastLevel = getLevel(stats.lvlXp);

          const gainedValue = difficulty + importance*2 + days;
          stats.lvlXp += Math.floor(gainedValue/10) + stats.xpBonus;
          if (stats.lvlXp >= levels[levels.length -2]) {
            alert('You have won task quest! You have reached max level and will not be able to level again without the game exploding. Please create a new character. Honestly, I had no idea somone would play this enough to reach this level. Congratulations!');
          }

          stats.xp = stats.xp + gainedValue;
          stats.gold = stats.gold + Math.ceil(gainedValue/2) + stats.goldBonus;
          if (lastLevel < getLevel(stats.lvlXp)) {
            window.confettiBomb();
            const audio = new Audio('./lvl.mp3');
            audio.play();
            const dialog = document.getElementById('dialog-level-up');
            dialogPolyfill.registerDialog(dialog);
            dialog.showModal();
          } else {
            const audio = new Audio('./xp.mp3');
            audio.play();
          }
        }

        if (target === 'failedQuests') {
          stats.hp -= 1;
          if (stats.hp < 1) {
            alert('You have lost please reset your character');
          }
        }

        if (quest[0].reoccurs && 
          target === 'failedQuests' || 
          target === 'completedQuests') {
            stats.activeQuests.push({ ...quest[0], ...{"created": Date.now(), id: Date.now()}});
        }

        stats[target].push(quest[0]);
        set({ state: stats });
      },
      deleteQuest: (from, id) => {
        const stats = get().state;
        const index = stats[from].findIndex((quest)=>quest.id+'' === id || quest.id === id)
        stats[from].splice(index, 1);

        set({ state: stats });
      },
      addReward: (reward, target) => {
        const stats = get().state;
        stats[target].push(reward);
        set({ state: stats });
      },
      deleteReward: (from, id) => {
        const stats = get().state;
        const index = stats[from].findIndex((reward)=>reward.id+'' === id || reward.id === id)
        stats[from].splice(index, 1);
        set({ state: stats });
      },
      purchaseItem: (id, cost) => {
        const stats = get().state;
        const index = stats.ringsInShop.findIndex((item)=>item.id+'' === id || item.id === id);
        const newRing = generateRing(stats.ringsInShop[index].rarity);
        const item = stats.ringsInShop.splice(index, 1, newRing);
        stats.gold -= cost;
        stats.inventory.push(item[0]);
        set({ state: stats });
      },
      purchaseHealthPotion: () => {
        const stats = get().state;
        stats.gold -= 100;
        if (stats.hp + 10 > stats.maxHp) {
          stats.hp = stats.maxHp;
        } else {
          stats.hp += 10
        }
        set({ state: stats });
      },
      equipItem: (id, hand, finger) => {
        const stats = get().state;
        const index = stats.inventory.findIndex((item)=>item.id+'' === id || item.id === id);
        const item = stats.inventory.splice(index, 1)[0];
        if (stats[hand][finger]?.name) {
          const currentRing = {...stats[hand][finger]};
          currentRing.effects.forEach((key)=>effects[key](stats, false));
          stats.inventory.push(currentRing);
        }
        stats[hand][finger] = {...item};
        item.effects.forEach((key)=>effects[key](stats, true))

        set({ state: stats });
      },
      sellItem: (id, value) => {
        const stats = get().state;
        let leftFinger;
        let rightFinger;
        Object.keys(stats.leftHand).forEach((key)=>{
          if (stats.leftHand[key].id === id) {
            leftFinger = key;
          }
        });
        Object.keys(stats.rightHand).forEach((key)=>{
          if (stats.rightHand[key].id === id) {
            rightFinger = key;
          }
        });
        const hand = leftFinger ? 'leftHand' : 'rightHand';
        const finger = leftFinger ? leftFinger : rightFinger;

        stats[hand][finger].effects.forEach((key)=>effects[key](stats, false));
        stats.gold += value;

        stats[hand][finger] = {};
        set({ state: stats });
      },
      resetGame: () => {
        const stats = get().state;
        stats.image=undefined;
        stats.name=undefined;
        stats.lvlXp=0;
        stats.hp=10;
        stats.maxHp=10;
        stats.xp=0;
        stats.gold=500;
        stats.xpBonus=0;
        stats.goldBonus=0;
        stats.currentView="quests";
        stats.rewards1=[
            {
              id: 1,
              name: "10 min of internet vegging.",
            },
            {
              id: 2,
              name: "15 min of internet vegging.",
            },
            {
              id: 3,
              name: "10 min Pet cuddle break.",
            }
        ];
        stats.rewards2=[
            {
              id: 4,
              name: "Pizza tonight!",
            },
            {
              id: 5,
              name: "Watch an episode of your favorite show when you have free time.",
            },
        ];
        stats.rewards3=[
            {
              id: 5,
              name: "Pizza party!",
            },
            {
              id: 6,
              name: "Get yourself something you've been meaning to get yourself.",
            },
        ];
        stats.activeQuests=[];
        stats.completedQuests=[];
        stats.failedQuests=[];
        stats.wontDoQuests=[];
        stats.rightHand={
          forefinger:{},
          middleFinger:{},
          ringFinger:{}, 
        };
        stats.leftHand={
          forefinger:{},
          middleFinger:{},
          ringFinger:{}, 
        },
        stats.inventory=[];
        stats.ringsInShop=generateNewRings();

        set({ state: stats});
      },
    }),
    {
      name: 'task-quest-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
