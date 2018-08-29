var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-filter-values');

describe('next/filterValues', function () {

  it('nx.filterValues with id value', function () {
    var ids = [1, 4, 6, 3];
    var items = [
      {
        id: 1,
        value: 'value1'
      },
      {
        id: 2,
        value: 'value2'
      },
      {
        id: 3,
        value: 'value3'
      },
      {
        id: 4,
        value: 'value4'
      },
      {
        id: 5,
        value: 'value5'
      },
      {
        id: 6,
        value: 'value6'
      }
    ];

    var result = nx.filterValues(items, ids);

    assert.deepEqual(result,
      [{ id: 1, value: 'value1' },
      { id: 4, value: 'value4' },
      { id: 6, value: 'value6' },
      { id: 3, value: 'value3' }]
    );
  });


  it('nx.filterValues： use `key` and repeat value', function () {
    var ids = [1, 1, 2];
    var items = [
      {
        key: 1,
        value: 'value1'
      },
      {
        key: 2,
        value: 'value2'
      },
      {
        key: 3,
        value: 'value3'
      },
      {
        key: 4,
        value: 'value4'
      },
      {
        key: 5,
        value: 'value5'
      },
      {
        key: 6,
        value: 'value6'
      }
    ];

    var result = nx.filterValues(items, ids, 'key');

    assert.deepEqual(result,
      [{ key: 1, value: 'value1' },
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' }]
    );
  });

});
