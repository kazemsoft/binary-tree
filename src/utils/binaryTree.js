export function binaryTree(str) {
  let arr = str.split(" ");
  let treeArr = [];

  for (let i = 0; i < arr.length; i++) {
    let node = {
      name: arr[i],
      left: null,
      right: null,
    };
    if (i === 0) {
      treeArr.push(node);
    } else {
      let parentIndex = Math.floor((i - 1) / 2);
      if (i % 2 === 0) {
        treeArr[parentIndex].right = node;
      } else {
        treeArr[parentIndex].left = node;
      }
      treeArr.push(node);
    }
  }
  return treeArr;
}
