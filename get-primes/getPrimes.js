var app = {
  getPrimes: function(n) {
    var arr = [];
    for (var i = 2; i <= n; i++) {

      var notPrime = false;
      for (var j = 2; j <= i; j++) {
        if (i % j === 0 && j !== i) {
          notPrime = true;
        }
      }
      if (notPrime === false) {

        arr.push(i);
      }
    }
    return arr
  }
}
module.exports = app
