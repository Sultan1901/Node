// function findSumOrEven(num) {
//   let odd = [];
//   let even = [];
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     if (i % 2 == 0) {
//       even.push(i);
//     } else odd.push(i);
//   }

const { stringify } = require("querystring");

//   let oddSum = odd.reduce((a, b) => a + b)
//   let evenSum = even.reduce((a, b) => a + b);
//   console.log(oddSum);
//   console.log(evenSum);
//   if (oddSum > evenSum) {
//     result = "odd";
//   } else if (oddSum < evenSum) {
//     result = "even";
//   } else result = "equal";
//   return result;
// }
// console.log(60*60);
// console.log(findSumOrEven(9));
// function date_format(date) {
//   let res = "";
//   let arr = date.split("/");
//   console.log(arr);

//   res = date +" "+ "|" +" "+ arr[0] + "-" + arr[1] + "-" + arr[2]+" "+"|"+" "+ arr[1] + "/" + arr[2] + "/" + arr[0]
//   return "'"+ res+"'"
// }
// console.log(date_format('2010/10/30'));
// code war password = 3,Y%H}m2yp"@N5v
// function past(h, m, s) {
//   return s * 1000 + m * 60000 + h * 3600000;
// }
// console.log(past(1, 1, 1));
// function sumArray(array) {
//   return array
//     ? array
//         .sort((x, s) => x - s)
//         .slice(1, -1)
//         .reduce((a, b) => a + b, 0)
//     : 0;
// }
// console.log(sumArray([1, 3]));
// function incrementString(strng) {
//   const body = strng.slice(0, -1);
//   const lastDigit = strng.slice(-1).match(/[0-9]/);
//   return lastDigit == null
//     ? strng + "1"
//     : lastDigit != 9
//     ? body + (+lastDigit + 1)
//     : incrementString(body) + "0";
// }
// console.log(incrementString("foobar999"));
// const stringToNumber = function (str) {
//   return Number(str);
// };
// console.log(stringToNumber("123"));
function shortcut(string) {
  return string.replace(/[ioaeu]/g, "");
}
console.log(shortcut("string"));
