module.exports = function check(str, bracketsConfig) {
  	var bracketsMap = new Map(bracketsConfig);
	var brackets = [];

	for (let i = 0; i < str.length; i++) {
          str[i] === bracketsMap.get(brackets[brackets.length - 1]) ? brackets.pop() : brackets.push(str[i]);
	}
	return brackets.length === 0;
}
