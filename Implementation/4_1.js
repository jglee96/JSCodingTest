const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const N = parseInt(input[0]);
    const path = input[1].split(" ");
    console.log(N);
    console.log(path);

    function moveL(point) {
        if(point.x === 1) return point;
        point.x -= 1;
        return point;
    }

    function moveR(point) {
        if (point.x === N) return point;
        point.x += 1;
        return point;
    }

    function moveU(point) {
        if (point.y === 1) return point;
        point.y -= 1;
        return point;
    }
    
    function moveD(point) {
        if (point.y === N) return point;
        point.y += 1;
        return point;
    }
    
    let person = {
        x: 1,
        y: 1
    };
    path.forEach((value) => {
        switch(value) {
            case 'L': {
                person = moveL(person);
                break;
            }
            case 'R': {
                person = moveR(person);
                break;
            }
            case 'U': {
                person = moveU(person);
                break;
            }
            case 'D': {
                person = moveD(person);
                break;
            }
        }
    })
    console.log(person.x, person.y);
    process.exit();
});