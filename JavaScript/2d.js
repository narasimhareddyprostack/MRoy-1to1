//WAP - sum of 2d array 
var array_2d = [
  [10, 20],
  [30, 40],
  [50, 60],
];
var sum = 0;
//console.log(array_2d.length);
for (var i = 0; i < array_2d.length; i++) {
  for (var j = 0; j < array_2d[i].length; j++) {
    // console.log(array_2d[i][j]);
    sum = sum + array_2d[i][j];
  }
}
console.log(sum);
