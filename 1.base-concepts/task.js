"use strict"
function solveEquation(a, b, c) {
  let arr=[];
  let d=(b**2)-(4 * a * c); 
let x, x1;
  if (d > 0) {
x=(-b + Math.sqrt(d) )/(2*a);
x1=(-b - Math.sqrt(d) )/(2*a);
arr.push(+x.toFixed(0));
arr.push(+x1.toFixed(0));
      console.log (arr)
    return arr
}
else if (d === 0) {
x=-b/(2*a);
arr.push(+x.toFixed(0));
  console.log (arr)
  return arr
}
else {
    console.log (arr)
  return arr;
}
};
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
