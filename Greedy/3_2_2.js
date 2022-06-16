const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const cond_string = input[0];
    const list_string = input[1];

    const N = parseInt(cond_string.substr(0, 1));
    const M = parseInt(cond_string.substr(2, 1));
    const K = parseInt(cond_string.substr(4, 1));

    const list = [];
    for(let i=0; i < list_string.length; i+=1) {
        if (i % 2 === 0) list.push(parseInt(list_string.substr(i, 1)));
    }

    list.sort((a, b) => b - a);
    
    let result = 0;
    let count = 0;
    count += parseInt(M / (K + 1)) * K;
    count += M % (K + 1);

    result += count * list[0];
    result += (M - count) * list[1];

    console.log(result);
    process.exit();
});