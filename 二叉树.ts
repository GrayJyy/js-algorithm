// 二叉树结构
class TreeNode {
  val: string
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: string) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const node1 = new TreeNode("A")
const node2 = node1.left = new TreeNode("B")
const node3 = node1.right = new TreeNode("C")
node2.left = new TreeNode("D")
node2.right = new TreeNode("E")
node3.right = new TreeNode("F")
// console.log(node1);

// 前序遍历
const preOrder = (root: TreeNode | null) => {
  if (!root) return
  console.log(root.val);
  preOrder(root.left)
  preOrder(root.right)
}
preOrder(node1)

// 中序遍历
const inOrder = (root: TreeNode | null) => {
  if (!root) return
  inOrder(root.left)
  console.log(root.val);
  inOrder(root.right)

}
inOrder(node1)

// 后序遍历
function postOrder(root: TreeNode | null) {
  if (!root) return
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}
postOrder(node1)