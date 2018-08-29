(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_KEY = 'id';

  nx.filterValues = function (inArray, inValues, inKey) {
    var result = [];
    var key = inKey || DEFAULT_KEY;
    inValues.forEach(function (id) {
      inArray.forEach(function (item) {
        if (id === item[key]) {
          result.push(item);
        }
      });
    });
    return result;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filterValues;
  }

}());
