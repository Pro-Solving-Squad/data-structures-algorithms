var firstMissingPositive = function (nums) {
  //filter nums > 0
  const filteredNums = new Set(nums);
  //sort the num array

  //store smallest positive number
  let smallestPositive = 1;
  //while, set has smallest (+) number
  while (filteredNums.has(smallestPositive)) {
    //increment smallest positive by 1
    smallestPositive++;
  }
  //return smallest positve
  return smallestPositive;

  //#### Second Solution ####

  const sortedNums = filteredNums.sort((a, b) => {
    return a - b;
  });
  //if (sorted array is empty) or (first number in sorted array is !== 1) ;
  //return 1;

  if (sortedNums.length === 0 || sortedNums[0] !== 1) return 1;

  //loop through sorted array length -1

  for (let i = 0; i < sortedNums.length - 1; i++) {
    const currentNumber = sortedNums[i];
    //current number - sortedNumber[i+1] > 1
    //return = current number +1
    if (sortedNums[i + 1] - currentNumber > 1) return currentNumber + 1;
  }

  //return last number +1
  return sortedNums[sortedNums.length - 1] + 1;
};

