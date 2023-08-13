const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function transform(str) {

	const arr = str.split('');
	const arr1 = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '.') {
			arr1.push('10');
		}
		if (arr[i] === '-') {
			arr1.push('11');
		}
	}
	let newStr = arr1.join('');
	let zeroStr = '0000000000';
	let result = zeroStr.substring(0, (10 - newStr.length)) + newStr;
	return result;
}

const CODE_TABLE = Object.fromEntries(
	Object.entries(MORSE_TABLE).map(([key, value]) => [transform(key), value])
);

CODE_TABLE['**********'] = ' ';


function decode(expr) {
	const arrSubstr = (str) => {
		let result = [];
		for (let i = 0; i < expr.length; i = i + 10) {
			result.push(`${str[i]}${str[i + 1]}${str[i + 2]}${str[i + 3]}${str[i + 4]}${str[i + 5]}${str[i + 6]}${str[i + 7]}${str[i + 8]}${str[i + 9]}`);
		}
		return result;
	}

	const substrings = arrSubstr(expr);

	let resArr = [];
	for (let i = 0; i < substrings.length; i++) {
		for (let key in CODE_TABLE) {
			if (substrings[i] === key) {
				resArr.push(CODE_TABLE[key])
			}
		}
	}

	return resArr.join('');

}

module.exports = {
	decode
}