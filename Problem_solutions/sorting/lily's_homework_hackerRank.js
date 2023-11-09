function lilysHomework(arr) {
  // Write your code here

  //create copy of original arr
  let copyArr = [...arr];
  let copyArr2 = [...arr];
  //declare variable numOfSwaps
  let numOfSwaps = 0;
  let numOfDescSwaps = 0;
  //for loop from 0 to copy of arr length - 1
  for (let i = 0; i < copyArr.length - 1; i++) {
    //declare currentSmallestIndex = current index
    let currentSmallestIndex = i;
    //inner for loop to loop from i + 1 to end of arr
    for (let j = i; j < copyArr.length; j++) {
      // if value at currentSmallestIndex > value copyArr[j] the currentSmallestIndex = j
      if (copyArr[j] < copyArr[currentSmallestIndex]) currentSmallestIndex = j;
    }
    //outside inner loop
    //if index of outer loop !== currentSmallestIndex
    if (i !== currentSmallestIndex) {
      //then store value of outer loop to variable (valueToSwap)
      let valueToSwap = copyArr[i];
      //then at index of outer loop put in currentSmallestIndex(on copy arr)
      copyArr[i] = copyArr[currentSmallestIndex];
      //then at currentSmallestIndex in copy arr set value to valueToSwap
      copyArr[currentSmallestIndex] = valueToSwap;
      //numOfSwaps++
      numOfSwaps++;
    }
  }

  for (let i = 0; i < copyArr2.length - 1; i++) {
    let currentLargestIndex = i;
    for (let j = i; j < copyArr2.length; j++) {
      if (copyArr2[j] > copyArr2[currentLargestIndex]) currentLargestIndex = j;
    }

    if (i !== currentLargestIndex) {
      let valueToSwap = copyArr2[i];
      copyArr2[i] = copyArr2[currentLargestIndex];
      copyArr2[currentLargestIndex] = valueToSwap;
      numOfDescSwaps++;
    }
  }

  return Math.min(numOfSwaps, numOfDescSwaps);
}
