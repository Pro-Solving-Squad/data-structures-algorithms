function twoPluses(grid) {
    // Write your code here

    //Declare maxArea variable
    let maxArea = 0

    //Outer for loop
    for (let i = 0; i < grid.length; i++) {
        //Inner loop
        for (let j = 0; j < grid[i].length; j++) {
            //Create copy of Grid
            const gridCopy = grid.map((row) => row.split(""))
            //if cell === G
            if (gridCopy[i][j] === "G") {
                //Change G to V
                gridCopy[i][j] = "V"
                //Declare variable move = 1
                let move = 1
                //Declare sizeOne = 1
                let sizeOne = 1
                //while (up + move === G && down + move === G && right + move === G && left + move === G) 
                while (i - move >= 0 && i + move < grid.length && j + move < grid[i].length && j - move >= 0 && gridCopy[i - move][j] === "G" && gridCopy[i + move][j] === "G" && gridCopy[i][j + move] === "G" && gridCopy[i][j - move] === "G") {
                    //Change all cells from G to V on grid copy
                    gridCopy[i - move][j] = "V"
                    gridCopy[i + move][j] = "V"
                    gridCopy[i][j + move] = "V"
                    gridCopy[i][j - move] = "V"
                    //move += 1
                    move += 1
                    //sizeOne += 4
                    sizeOne += 4
                }

                //outside while loop

                //Inner outer loop
                for (let m = 0; m < grid.length; m++) {
                    //Inner inner loop
                    for (let n = 0; n < grid[m].length; n++) {
                        //if cell === G
                        if (grid[m][n] === "G") {
                            //Declare variable move = 1
                            let moveTwo = 1
                            //Declare sizeTwo = 1
                            let sizeTwo = 1
                            //while (up + move === G && down + move === G && right + move === G && left + move === G) 
                            while (m - moveTwo >= 0 && m + moveTwo < grid.length && n + moveTwo < grid[m].length && n - moveTwo >= 0 && gridCopy[m - moveTwo][n] === "G" && gridCopy[m + moveTwo][n] === "G" && gridCopy[m][n + moveTwo] === "G" && gridCopy[m][n - moveTwo] === "G") {
                                //move += 1
                                moveTwo += 1
                                //sizeTwo += 4
                                sizeTwo += 4
                                //outside while loop
                            }
                            // area = sizeOne * sizeTwo
                            const area = sizeOne * sizeTwo
                            // If area > maxArea maxArea = area
                            if (area > maxArea) maxArea = area
                            
                            moveTwo += 1
                            
                            //check if possible to form a bigger plus
                            if (m - moveTwo >= 0 && m + moveTwo < grid.length && n + moveTwo < grid[m].length && n - moveTwo >= 0 && ((gridCopy[m - moveTwo][n] == "G" || gridCopy[m - moveTwo][n] == "V") && (gridCopy[m + moveTwo][n] == "G" || gridCopy[m + moveTwo][n] == "V") && (gridCopy[m][n + moveTwo] == "G" || gridCopy[m][n + moveTwo] == "V") && (gridCopy[m][n - moveTwo] == "G" || gridCopy[m][n - moveTwo] == "V"))) {
                                //transfer 4 blocks from first grid to second grid
                                let secondSizeOne = sizeOne - 4
                                let secondSizeTwo = sizeTwo + 4
                                
                                //find newArea with transfered blocks
                                const newArea = secondSizeOne * secondSizeTwo
                                
                                //check if bigger than maxArea
                                if (maxArea < newArea) {
                                    maxArea = newArea
                                }

                            }

                        }
                    }
                    //
                }
                //
            }
            //
        }
        //
    }
    
    return maxArea
}
