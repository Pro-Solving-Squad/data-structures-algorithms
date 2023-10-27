// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {

    //Split input into an array split be new line
    const arr = stdin_input.split("\n");
    //Store value of first index into a variable called tests as a integer
    const testCases = parseInt(arr[0]);
    //Slice from index 1 to remove number of testcases
    let arrOfCases = arr.slice(1);
    //Create empty array called borders
    const borders = []
    //Declare iterator i to 1
    let i = 1
    //Loop while i <= tests
    while (i <= testCases) {
        //extract first number from the array testsCases and convert to integer
        let rows = parseInt(arrOfCases[0].split(" ")[0])
        //push testCases.slice(1, firstNumber + 1) into the borders array
        borders.push(arrOfCases.slice(1, rows + 1))
        //change testCases array to be testCases.slice(firstNum + 1)
        arrOfCases = arrOfCases.slice(rows + 1)
        //increment i by 1 
        i++
    }

    //borders Structure: [[".....####......", ".....#........."], [], []]
    main(borders);
});

function main(input) {
    maximumBorder(input)

    //process.stdout.write(maximumBorder(input) + "\n");
    // Writing output to STDOUT

}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here

function maximumBorder(input) {
    //Loop through inputs
    input.forEach((item) => {
        //Inside Loop
        //Create a variable that have joined the input together
        const wall = item.join(",")
        //Declare variable counter
        let counter = 0
        //Declare variable longest
        let longest = 0
        //Loop through the joined string
        for (let cell of wall) {
            //Inside loop
            //if value is '#' then counter += 1
            if (cell === "#") {
                counter += 1
            } else {
                //else check if counter > longest
                if (counter > longest) {
                    //if counter > longest then longest = counter
                    longest = counter
                }
                counter = 0
            }
        }
        console.log(longest)
    })
}
