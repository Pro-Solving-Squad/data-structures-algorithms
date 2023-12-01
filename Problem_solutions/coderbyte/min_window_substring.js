function MinWindowSubstring(strArr) {

  // ["aabdccdbcacd", "aad"]

  //keeping track of the SMALLEST SUBSTRING found so far.
  let smallestSubstring = null;

  //extract N and K
  let [N, K] = strArr;
  //loop through N

  for (let i = 0; i < N.length; i++) {

    //if current letter in N included in K
    if (K.includes(N[i])) {
      //declear variable for substring
      let subString = '';
      //re declear check subarray K
      let subK = K;
      //loop from current letter index in N
      for (let k = i; k < N.length; k++) {
        //if subarray K is empty, stop
        if (subK.length === 0) break;
        //if subarray includes current letter
        if (subK.includes(N[k])) {
          //then remove current letter from subarray K
          subK = subK.replace(N[k], '');
          subString += N[k];
          continue;
        }
        subString += N[k];
      }

//compare current substring length with smallest substring
      if (smallestSubstring === null || subString.length < smallestSubstring.length && subK.length === 0) {
        smallestSubstring = subString;
      }
    }
  }
  return smallestSubstring;
}
