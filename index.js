

function writeCards(obj, event) {
    const newObj = [];
    for (let i = 0; i < obj.length; i++) {
        newObj.push(`Thank you, ${obj[i]}, for the wonderful ${event} gift!`);
    }

    return newObj;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}