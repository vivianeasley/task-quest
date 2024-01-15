import {animalNames} from './animal-names';
import {animalNamesPart1Array} from './animal-last-names';
import {animalNamesPart2Array} from './animal-last-names';
import {animalNamesPart3Array} from './animal-last-names';

import {monsterFirstNamesArray} from './monster-first-names';
import {monsterNamesArray} from './monster-last-names';

export const snakeToString = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}

export const effectsCommon = {
    addOneToMaxHealth: (stats, isEntering)=> {
        if (isEntering) {
            stats.maxHp+=1;
        } else {
            stats.maxHp-=1;
        }
    },
    addTwoToMaxHealth: (stats, isEntering)=> {
        if (isEntering) {
            stats.maxHp+=2;
        } else {
            stats.maxHp-=2;
        }
    },
    addOneToGoldWhenGained: (stats, isEntering)=> {
        if (isEntering) {
            stats.goldBonus+=1;
        } else {
            stats.goldBonus-=1;
        }
    },
    addTwoToGoldWhenGained: (stats, isEntering)=> {
        if (isEntering) {
            stats.goldBonus+=2;
        } else {
            stats.goldBonus-=2;
        }
    },
    addOneToExperienceWhenGained: (stats, isEntering)=> {
        if (isEntering) {
            stats.xpBonus+=1;
        } else {
            stats.xpBonus-=1;
        }
    },
}

export const effectsUncommon = {
    addThreeToMaxHealth: (stats, isEntering)=> {
        if (isEntering) {
            stats.maxHp+=3;
        } else {
            stats.maxHp-=3;
        }
    },
    addFourToMaxHealth: (stats, isEntering)=> {
        if (isEntering) {
            stats.maxHp+=4;
        } else {
            stats.maxHp-=4;
        }
    },
    addThreeToGoldWhenGained: (stats, isEntering)=> {
        if (isEntering) {
            stats.goldBonus+=3;
        } else {
            stats.goldBonus-=3;
        }
    }
}

export const effectsRare = {
    addTwoToExperienceWhenGained: (stats, isEntering)=> {
        if (isEntering) {
            stats.xpBonus+=2;
        } else {
            stats.xpBonus-=2;
        }
    },
    addThreeToExperienceWhenGained: (stats, isEntering)=> {
        if (isEntering) {
            stats.xpBonus+=3;
        } else {
            stats.xpBonus-=3;
        }
    },
    addFourToExperienceWhenGained: (stats, isEntering)=> {
        if (isEntering) {
            stats.xpBonus+=4;
        } else {
            stats.xpBonus-=4;
        }
    },
    addFourToGoldWhenGained: (stats, isEntering)=> {
        if (isEntering) {
            stats.goldBonus+=4;
        } else {
            stats.goldBonus-=4;
        }
    }
}


export function generateRing (rarity) {
    const isThumb = Math.random() < 0.10 ? true : false;
    let name;
    if (Math.random() > 0.20) {
      name = "The " + getRand(animalNamesPart1Array) + " " + getRand(animalNamesPart2Array) + " of " + getRand(animalNamesPart3Array);
    } else {
      name = getRand(monsterFirstNamesArray) + " the " + getRand(monsterNamesArray);
    }
    const color1 = "#"+Math.floor(Math.random()*16777215).toString(16);
    const color2 = "#"+Math.floor(Math.random()*16777215).toString(16);

    const effects = [];
    const common = Object.keys(effectsCommon);
    const uncommon = Object.keys(effectsUncommon);
    const rare = Object.keys(effectsRare);
    if (rarity === 'common') {
        effects.push(getRand(common))
    } else if (rarity === 'uncommon') {
        effects.push(getRand(uncommon))
        //TODO: or 2 common
    } else {
        effects.push(getRand(rare))
        //TODO: or 1 common & 1 uncommon
        //TODO: or 3 common
    }
  
    return {
        id: Date.now(),
        name,
        effects,
        colors: [color1, color2],
        isThumb,
        rarity: rarity
    }
  }
  
  function getRand (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }