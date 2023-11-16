var letterCombinations = function (digits) {
  const numbersMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits.length === 0 || !digits) return [];
  else if (digits.length === 1) return numbersMap[digits].split("");

  const charArr = digits.split("").map((digit) => numbersMap[digit]);
  // digitArr => [2, 3] => ["abc", "def"]

  function findCombinations(charArr) {
    //["ad","ae","af"]
    //["bd","be","bf"]
    //["cd","ce","cf"]

    if (charArr.length === 0) return [[]];

    let combinationsArr = [];

    for (let i = 0; i < charArr[0].length; i++) {
      let remainingCombination = findCombinations(charArr.slice(1));
      consolr.log(r);
      combinationsArr.push(
        ...remainingCombination.map((combination) =>
          [charArr[0][i], ...combination].join("")
        )
      );
    }
    return combinationsArr;
  }

  return findCombinations(charArr);
};
