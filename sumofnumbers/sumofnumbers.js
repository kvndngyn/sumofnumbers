let test = [1, 2, 3];

function sumFor(lists) {
  let total = 0;
  for (const list of lists) {
    total += list;
  }
  return total;
}

console.log(sumFor(test));

function sumWhile(lists) {
  let total = 0;
  let i = 0;
  while (i < lists.length) {
    total += lists[i];
    i++;
  }
  return total;
}

console.log(sumWhile(test));

function sumRecursion(lists) {
  if (lists.length === 0) {
    return 0;
  } else {
    return lists[0] + sumRecursion(lists.slice(1, lists.length));
  }
}

console.log(sumRecursion(test));

function sumTheSimpleWay(lists) {
  return _.reduce(lists, (memo, num) => memo + num);
}

console.log(sumTheSimpleWay(test));