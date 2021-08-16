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
      "label":".gitignore",
      "children":[

      ]
   },
   {
      "label":"README.md",
      "children":[

      ]
   },
   {
      "label":"package.json",
      "children":[

      ]
   },
   {
      "label":"src",
      "children":[
         {
            "label":"index.ts",
            "children":[

            ]
         }
      ]
   },
   {
      "label":"tsconfig.json",
      "children":[

      ]
   },
   {
      "label":"yarn-error.log",
      "children":[

      ]
   },
   {
      "label":"yarn.lock",
      "children":[

      ]
   }
```
