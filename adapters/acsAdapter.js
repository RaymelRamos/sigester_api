const _ = require('lodash');


//list string from json concatenated parent and childs
const listAllParams = (arrayItem) => {
    let list = [];
    _.forEach(arrayItem, (item) => {
        console.log(typeof item)
        if (typeof item != 'object') {
            list.push(item);
        }
        if (typeof item == 'object') {
            list.push(...listAllParams(item._value == undefined ? item : item._value));
        }
    }
    );

    return list;
}

// Example : 
// Input: {parent: {child1 : "test", child2 : "test2"}}}} 
// output: ["parent.child1", "parent.child2"]

const getParams = (arrayItem) => {
    let list = [];
    let val = _.keysIn(arrayItem);
    _.forEach(val, (item) => {
        if (typeof arrayItem[item] != 'object') {
            list.push(item); //...getParams(arrayItem[item])
        } //else {
        //     list.push(item);
        // }
    });
    //console.log(list)
    return list;

}

function recursive(list, item, prefix) {
    if (typeof item != 'object') {
        list.push(prefix + item);
    } else {
        _.forEach(item, (value, key) => {
            recursive(list, value, prefix + key + '.');
        }
        );
    }
    return list;
}

const adaptKeyValue = (arrayItem) =>
(
    {
        key: arrayItem.includes('_value') ? arrayItem.split('_value')[0].slice(0, -1) : '',// arrayItem.includes('_object') ? arrayItem.split('_object')[0].slice(0, -1) : '',
        value: arrayItem.includes('_value') ? arrayItem.split('_value')[1].slice(1) : '' // arrayItem.includes('_object') ? '_object' : ''
    }
)


const concatAllParams = (arrayItem) => {
    let list = [];
    console.log(arrayItem)
    if(arrayItem.length == 0)
        return []
    recursive(list, arrayItem[0], '');
    return _.uniqBy(list.filter(x => x.includes('_value')).map(adaptKeyValue), 'key'); //
}

module.exports = { concatAllParams }