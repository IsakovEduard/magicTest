/*Question 3: Write a JavaScript program to identify all
occurrences of a pattern in a tree. Discuss time and space
complexity of your solution. Feel free to use your own data structure.*/

class Node {
    data;
    left;
    right;

    get left() {
        return this.left;
    }

    get right() {
        return this.right;
    }

    set left(data) {
        this.left = new Node(data);
    }

    set right(data) {
        this.right = new Node(data);
    }

    constructor(data) {
        this.data = data;
    }
}

class BinaryTree {

    root1;
    root2;

    areIdentical(root1, root2) {
        if (root1 === undefined && root2 === undefined)
            return true;


        if (root1 === undefined || root2 === undefined)
            return false;

        return (root1.data === root2.data
            && this.areIdentical(root1.left, root2.left)
            && this.areIdentical(root1.right, root2.right));
    }

    isSubtree(treeNode, patternNode) {

        if (patternNode === undefined)
            return true;


        if (treeNode === undefined)
            return false;

        if (this.areIdentical(treeNode, patternNode))
            return true;

        return this.isSubtree(treeNode.left, patternNode)
            || this.isSubtree(treeNode.right, patternNode);
    }

}

tree = new BinaryTree();

tree.root1 = new Node(1);
tree.root1.right = new Node(2);
tree.root1.right.right = new Node(3);
tree.root1.left = new Node(4);
tree.root1.left.left = new Node(5);
tree.root1.left.left.right = new Node(6);
tree.root1.left.right = new Node(7);

tree.root2 = new Node(4);
tree.root2.left = new Node(5);
tree.root2.left.right = new Node(6);
tree.root2.right = new Node(7);

console.log(tree.isSubtree(tree.root1, tree.root2));







