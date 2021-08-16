# path-list-to-tree

Converts a list of file paths into a tree structure.

This is a forked npm package from here https://www.npmjs.com/package/path-list-to-tree.
I modified it, so the output tree has "label" instead of "name". 

## Example

```javascript
import pathListToTree from 'path-list-to-tree';

const filePaths = [
  '.gitignore',
  'README.md',
  'package.json',
  'src/index.ts',
  'tsconfig.json',
  'yarn-error.log',
  'yarn.lock'
];

console.log(pathListToTree(filePaths))
```
```json
[
   {
      "name":".gitignore",
      "children":[

      ]
   },
   {
      "name":"README.md",
      "children":[

      ]
   },
   {
      "name":"package.json",
      "children":[

      ]
   },
   {
      "name":"src",
      "children":[
         {
            "name":"index.ts",
            "children":[

            ]
         }
      ]
   },
   {
      "name":"tsconfig.json",
      "children":[

      ]
   },
   {
      "name":"yarn-error.log",
      "children":[

      ]
   },
   {
      "name":"yarn.lock",
      "children":[

      ]
   }
```
