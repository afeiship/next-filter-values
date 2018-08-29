(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.filterValues = function (inArray, inValues, inKey) {
    var result = [];
    var key = inKey || 'id';
    inValues.forEach(function (id) {
      inArray.forEach(function (item) {
        if (id === item[key]){
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
