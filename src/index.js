const NUMBERS = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable (number) {
    function handleTens(ten) {
        if (ten <= 20) {
            return NUMBERS[ten];
        }
        const tail = ten % 10; 

        if (tail) {
            return NUMBERS[ten - tail] + ' ' + NUMBERS[tail];
        }

        return NUMBERS[ten - tail];
    }

    if (number >= 100) {
        const stringNumber = (number).toString();
        const hundreds = +stringNumber[0]; 
        const ten = +stringNumber.substring(1);
        const tenString = handleTens(ten); 

        if (ten === 0) {
            return NUMBERS[hundreds] + ' hundred';
        }

        return NUMBERS[hundreds] + ' hundred ' + tenString;
    } 

    return handleTens(number);
}
