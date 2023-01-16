function sumMultiples (num) {
  
  let N = parseInt(num);

  let sumof3s = 0;
  let sumof5s = 0;
  let sumof15s = 0;

  for (let i = 0; i < N; i += 3) {
    sumof3s = sumof3s + i;
  }

  for (i = 0; i < N; i += 5) {
    sumof5s = sumof5s + i;
  }

  for (i = 0; i < N; i += 15) {
    sumof15s = sumof15s + i;
  }

  return (sumof3s + sumof5s - sumof15s);
}

//test input
console.log(sumMultiples(1));
console.log(sumMultiples(3));
console.log(sumMultiples(5));
console.log(sumMultiples(7));
console.log(sumMultiples(10));
console.log(sumMultiples(15));
console.log(sumMultiples(16));
console.log(sumMultiples(30));
console.log(sumMultiples(31));

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below a given number.
