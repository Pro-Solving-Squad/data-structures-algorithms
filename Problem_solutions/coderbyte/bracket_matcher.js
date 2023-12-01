function BracketMatcher(str) { 


  // convert str to arr
  // const array = str.split("")
  //filter to find open brackets  - arr1
  // const openBrackets = array.filter(el => el === "(")
  //filter to find closing  - arr2
  // const closeBrackets = array.filter(el => el === ")")
  // check if arr1 length == arr2 length return 1 if same

  // string of brackets: 
  // remove everything that's not an opening or closing bracket
  const allBrackets = str.split("").filter(char => char === '(' || char===')');
  // openingBrackets[]; (((
    if(allBrackets.length % 2 !== 0) return 0;
    const openingBrackets = [];

  // loop through the brackets arr
  for(const bracket of allBrackets){
    // if you encounter closingBracket and opening is empty, return 0
    if(bracket === ')' ) {
      if(!openingBrackets.length) {
        return 0;
      }
    // if closing. pop the opningBracket
      openingBrackets.pop();
    }

    // if you encounter an opening bracket, push to openingBrackets
    if(bracket === '('){
      openingBrackets.push(bracket)
    }
  }

  return (!openingBrackets.length) ? 1 : 0;

}
