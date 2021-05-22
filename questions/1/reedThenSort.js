/*
Question 1: You have text file containing an array of items where some items can be marked as "expired", e.g.
[
  {name: "item1", isExpired: false},
  {name: "item2", isExpired: true},
  {name: "item3", isExpired: true},
  {name: "item4", isExpired: false},
  {name: "item5", isExpired: false},
  ...
]
Write a script in JavaScript to read in the data and output a list with all expired items at the bottom.
 */

const fs = require("fs")

const filePath = "test1"

const sortByExpiration = (array) => {
    if ((Array.isArray(array)) && (!!array.length)) {
        array.sort(function (firstItem, secondItem) {
            return firstItem.isExpired - secondItem.isExpired;
        });
        return array;
    }
    return [];
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;

    data = data.replace(/name/g, "\"name\"")
        .replace(/isExpired/g, "\"isExpired\"");

    const json = JSON.parse(data);
    console.log(sortByExpiration(json));

})
