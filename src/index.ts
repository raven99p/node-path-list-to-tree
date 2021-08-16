export interface TreeNode {
  label: string;
  children: TreeNode[]
}

function createNode(path: string[], tree: TreeNode[]) : void {
  const label = path.shift();
  const idx = tree.findIndex((e: TreeNode) => {
    return e.label == label;
  });
  if(idx < 0){
    tree.push({
      label: label,
      children: []
    });
    if(path.length !== 0) {
      createNode(path, tree[tree.length -1].children)
    }
  } else {
    createNode(path, tree[idx].children)
  }
}

export default function parse(data: string[]) : TreeNode[] {
  const tree : TreeNode[] = [];
  for(let i = 0; i < data.length; i++){
    const path : string = data[i];
    const split : string[] = path.split('/');
    createNode(split, tree);
  }
  return tree;
}
