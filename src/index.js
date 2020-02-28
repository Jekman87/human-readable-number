module.exports = function toReadable (number) {
  
    const UNITS = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    const SECOND_TEN = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const TENS = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    const HUNDRED = 'hundred';

    const numberArray = String(number).split('');
    let resultArray = [];

    function addTensToResult(position) {
        if (numberArray[position] === '1') {
            resultArray.push(SECOND_TEN[numberArray[position] + numberArray[position + 1]]);
        } else {
            if (numberArray[position] !== '0') {
                resultArray.push(TENS[numberArray[position]]);
            }
            
            if (numberArray[position + 1] !== '0') {
                resultArray.push(UNITS[numberArray[position + 1]]);
            }
        }
    }

    if (numberArray.length === 1) {
        resultArray.push(UNITS[numberArray[0]]);
    } else if (numberArray.length === 2) {
        addTensToResult(0);
    } else if (numberArray.length === 3) {
        resultArray.push(UNITS[numberArray[0]], HUNDRED);

        addTensToResult(1);
    } else {
        return 'The number is greater than 999 :('
    }

    return resultArray.join(' ');
}
