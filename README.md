# next-filter-values
> Filter items by values for next

## install:
```bash
npm install -S afeiship/next-filter-values --registry=https://registry.npm.taobao.org
```

## usage:
```js
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

// [{ id: 1, value: 'value1' },
//   { id: 4, value: 'value4' },
//   { id: 6, value: 'value6' },
//   { id: 3, value: 'value3' }]
```
