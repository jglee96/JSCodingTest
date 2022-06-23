const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const x = input[0].substr(0, 1).charCodeAt(0) - 96;
    const y = parseInt(input[0].substr(1, 1));

    const twoset = [2, -2]
    const oneset = [1, -1];

    let count = 0;
    twoset.forEach(two => {
        oneset.forEach(one => {
            const ax = x + two;
            const ay = y + one;
            if (ax > 0 && ay > 0) count += 1;

            const bx = x + one;
            const by = y + two;
            if (bx > 0 && by > 0) count += 1;
        });
    })
    console.log(count);
    process.exit();
});