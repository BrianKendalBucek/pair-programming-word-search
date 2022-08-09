//Pair programmed with Megan Honey

const verticalArray = function(letters) {
    let newArr = [];
    let index = 0;

    for(let i = 0; i < letters[i].length; i++) {
        let verticalWord = '';
        for (let j = 0; j < letters.length; j++) {
            verticalWord += (letters[j][index]);
        }
        newArr.push(verticalWord);
        index++;
    }
    return newArr;
};

const wordSearch = (letters, word) => { 

    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {

        if (l.includes(word)) return true
    }

    const verticalJoin = verticalArray(letters);

    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    return false;
}



module.exports = wordSearch;