// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    n = input.split("\n")
    n.shift()
    process.stdout.write(findMex(n[0].split(" ")));       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here

function findMex(array) {
    let smallest = 0;
    let mexArr = [];
    let included = new Set()

    for (let i = 0; i < array.length; i++) {
        included.add(array[i])

        while (included.has(smallest.toString())) {
            smallest++
        }

        mexArr.push(smallest)
    }

    return mexArr.join(" ")
}
