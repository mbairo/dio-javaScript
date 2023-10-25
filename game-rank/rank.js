let victories = calcWinAndLose(103, 0);
let ranking = calcRanking(victories);

console.log(`The Hero has ${victories} victories and is at level: ${ranking}`);

// Functions --- 
function calcWinAndLose(win, lose) {
    let result = win - lose;
    return result;
}

function calcRanking(victories) {
    let rank;
    if (victories <= 10) {
        rank = 'Iron';
    } else if (victories >= 11 && victories <= 20) {
        rank = 'Bronze';
    } else if (victories >= 21 && victories <= 50) {
        rank = 'Silver';
    } else if (victories >= 51 && victories <= 80) {
        rank = 'Gold';
    } else if (victories >= 81 && victories <= 90) {
        rank = 'Diamond';
    } else if (victories >= 91 && victories <= 100) {
        rank = 'Legendary';
    } else if (victories >= 100) {
        rank = 'Immortal';
    }
    return rank;
}
