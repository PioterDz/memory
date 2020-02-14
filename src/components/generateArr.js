
const generateArr = (level) => {
    let arr = [];
    if(level === 'easy') {
        looper(arr, 10);
    } else if(level === 'medium') {
        looper(arr, 20);
    } else if(level === 'hard') {
        looper(arr, 30);
    }
    return arr;
}

const looper = (array, arrSize) => {
    for(let i=0; i<arrSize ; i++) {
        const number = arrSize / 2;
        checkNumberInArr(array, generateNumber(number), number);
    }
}

const generateNumber = (nb) => {
    return Math.ceil(Math.random() * nb);
}

const checkNumberInArr = (arr, nb, genNb) => {
    const checked = arr.filter(el => el === nb);
    if(checked.length < 2) {
        return arr.push(nb);
    }
    else {
        checkNumberInArr(arr, generateNumber(genNb), genNb);
    };
}

export { generateArr };