function lengthOfLongestSubstring(s) {
    //declare longest number init = 0
        let longestNum = 0;
        //loop thru string - outer
        for (let i = 0; i < s.length; i++) {
            //declare set to hold substring
            //add current element
            const subString = new Set([s[i]]);
            "a b c abcbb"
            //declare var to hold next index 
            let nextIndex = i + 1;
            //start looping from next index using while loop
            //loop while index is less than length of string and value at next is not in     substring
            while (nextIndex < s.length && !subString.has(s[nextIndex])) {
                subString.add(s[nextIndex]);
                //inside while -  add s[i] to set ; increment next index var
                nextIndex++
            }
    
            //outside while - check if longest is less than size of set - longest = size of set
            if (longestNum < subString.size) longestNum = subString.size
        }
        // ouside for loop - return longest
        return longestNum
    
    }
    