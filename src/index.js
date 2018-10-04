module.exports = function getZerosCount(number, base) {
  // your implementation
  const factorizedPrimes = primeFactorization(base);
  const baseExponents = {};
  factorizedPrimes.forEach(prime => {
    const existingPrime = baseExponents[prime] || 0;
    baseExponents[prime] = existingPrime + 1;
  });

  let result = 0;

  for (let prime of Object.keys(baseExponents)) {
    let devider = prime;
    let tempZeroesCount = 0;
    while (devider < number) {
    tempZeroesCount += Math.floor(number / devider);
    devider = devider * prime;
    }
    const tempResult = Math.floor(tempZeroesCount / baseExponents[prime]);
    if (!result || result > tempResult) {
    result = tempResult;
    }
  }
  return result;
}

function primeFactorization(number, result) {
  var result = (result || []);
  var root = Math.sqrt(number);
  var x = 2;

  if (number % x) {
    x = 3;

    while ((number % x) && ((x = (x + 2)) < root)) {}
  }

  x = (x <= root) ? x : number;

  result.push(x);

  return (x === number) ? result : primeFactorization((number / x), result);
}
