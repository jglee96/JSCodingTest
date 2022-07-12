function solution(expression) {
  var answer = 0;

  const list = [];
  let num = "";
  for (let i = 0; i < expression.length; i += 1) {
    const ch = expression[i];
    const n = Number(ch);
    if (Number.isNaN(n) === false) num += ch;
    else {
      list.push({
        number: Number(num),
        op: ch,
      });
      num = "";
    }
  }
  // 마지막 숫자
  list.push({
    number: Number(num),
    op: "",
  });

  let max = 0;
  const op_list = ["*", "-", "+"];
  op_list.forEach((op, index) => {
    const arr = op_list.filter((value) => value !== op);
    const result1 = calc_order(list, [op, ...arr])[0].number;
    const result2 = calc_order(list, [op, ...arr.reverse()])[0].number;
    max = Math.max(max, Math.abs(result1), Math.abs(result2));
  });

  answer = max;
  return answer;
}

function calc_order(list, order) {
  const list0 = calc(list, order[0]);
  const list1 = calc(list0, order[1]);
  const list2 = calc(list1, order[2]);
  return list2;
}

function calc(list, op) {
  const newlist = [];
  for (let i = 0; i < list.length; i += 1) {
    let element = list[i];
    while (element.op === op) {
      element = {
        number: operation(element.number, list[i + 1].number, element.op),
        op: list[i + 1].op,
      };
      i += 1;
    }
    newlist.push(element);
  }
  return newlist;
}

function operation(a, b, op) {
  switch (op) {
    case "+": {
      return a + b;
    }
    case "-": {
      return a - b;
    }
    case "*": {
      return a * b;
    }
  }
}
