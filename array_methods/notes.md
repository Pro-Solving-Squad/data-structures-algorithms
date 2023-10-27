# Common array methods:

## map
1. Map applies a function to each elememt of the array
2. Does not change the original array
3. Take in the following parameters. (item, index, array) **Only item is required the other 2 is optional**

## filter
1. Test each element against a condition
2. Does not change the original array
3. Take in the following parameters. (item, index, array) **Only item is required the other 2 is optional**

## forEach
1. Loops through the array
2. Does not change the original array
3. Take in the following parameters. (item, index, array) **Only item is required the other 2 is optional**

## slice
1. Returns piece of array without affection the original array
2. Does not change the original array
3. Take in the following parameters (start, end)

## splice
1. Remove or add from original array
2. Changes original array
3. Take in the following parameters (start, howMuchToDelete, itemsToAdd)

## every 
1. Returns true only if all elements meet specified condition
2. Does not change original array
3. Take in the following parameters. (item, index, array) **Only item is required the other 2 is optional**

## some 
1. Check if atleast one element meets the specified condition
2. Doesn't change original array
3. Take in the following parameters. (item, index, array) **Only item is required the other 2 is optional**

## reverse
1. reverse the array
2. Change original array

## join
1. Return array as a string
2. Does not change original array
3. Takes in the following parameters. (seperateor) **Default value is a comma**

## reduce
1. Runs a 'reducer' callback function over all elements, in ascending-index order and accumulate one value
2. Does not change the original array
3. Takes in the following parameters. (total, item, index, array) **total and item is required**