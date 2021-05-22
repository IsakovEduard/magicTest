/*Question 2: Given a data file containing an array of strings representing a hierarchy, e.g.:

[
 "animals.dogs.poodle",
 "animals.cats.tabby",
 "animals.cats.siamese",
 "animals.dogs.labrador",
 "animals.dogs.hound",
 "plants.trees",
 "animals.birds.parrot.grey"
 ...]

Write a script in JavaScript to create a tree data structure out of it. Output the data in tree form.
*/
const fs = require("fs")

function Node(data) {
    this.data = data;
    this.children = [];
}

class TreeStructure {
    constructor() {
        this.root = null;
    }

    add(data, toNodeData) {
        const node = new Node(data);

        const parent = toNodeData ? this.findBFS(toNodeData) : null;
        if (parent)
            parent.children.push(node)
        else if (!this.root)
            this.root = node;
        else
            return "Tried to store a node at root when root already exists."
    }

    findBFS(data) {
        const queue = [this.root];
        let _node = null;

        this.traverseBFS((node) => {
            if (node.data === data)
                _node = node;
        })

        return _node;

    }

    traverseBFS(cb) {
        const queue = [this.root]

        if (cb)
            while (queue.length) {
                const node = queue.shift();

                cb(node)

                for (const child of node.children)
                    queue.push(child)
            }
    }
}

const filePath = "test2"

let text = fs.readFileSync(filePath, "utf8");
let tree = new TreeStructure();
tree.add("root");

let structureArr = text.replace(/"/g, "")
    .replace(/,/g, "")
    .split("\r\n");

structureArr = structureArr.slice(1, structureArr.length - 1)

for (const element of structureArr) {
    let tempArr = element.trim().split(".");

    for (let i = 0, parent = "root"; i < tempArr.length; i++)
        if (!tree.findBFS(tempArr[i])) {
            tree.add(tempArr[i], parent);
            parent = tempArr[i];
        } else
            parent = tempArr[i];

}
let target = "root"
tree.traverseBFS(node => {
    node.data === target && treeView(node)
})

function treeView({data, children}, level = 1) {
    data && data === target ? console.log(data) : console.log('  '.repeat(level), data);
    level++;
    for(let child of children) {
        treeView(child, level);
    }

}
