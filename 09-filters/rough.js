function count(S, m, n) {
  // use process.stdout.write("hello") to print the output
  //implement your  logic here - you dont have to return anything, print the output here
  // table[i] will be storing the number of solutions
  // for value i. We need sum+1 rows as the table is
  // constructed in bottom up manner using the base
  // case (sum = 0)
  // Initialize all table values as 0
  var table = Array(n + 1).fill(0);

  // Base case (If given value is 0)
  table[0] = 1;

  // Pick all coins one by one and update the table
  // values after the index greater than or equal to
  // the value of the picked coin
  for (i = 0; i < m; i++)
    for (j = arr[i]; j <= n; j++) table[j] += table[j - arr[i]];

  return table[n];
}
var arr = [1, 2, 3];
var m = arr.length;
var n = 4;
console.log(count(arr, m, n));
