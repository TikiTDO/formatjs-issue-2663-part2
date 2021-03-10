Reproduce second issue from https://github.com/formatjs/formatjs/issues/2663.

# Steps

1. Run `npm install`
2. Run `npm run build`

# Symptoms

Results should be as follows:

```
└> npm run build

> formatjs-issue-2663-part2@1.0.0 build .../formatjs-issue-2663-part2
> babel src -d lib

SyntaxError: .../formatjs-issue-2663-part2/src/test.js: NodePath has been removed so is read-only.
    at File.buildCodeFrameError (.../formatjs-issue-2663-part2/node_modules/@babel/core/lib/transformation/file/file.js:250:12)
    at NodePath.buildCodeFrameError (.../formatjs-issue-2663-part2/node_modules/@babel/traverse/lib/path/index.js:138:21)
    at NodePath._assertUnremoved (.../formatjs-issue-2663-part2/node_modules/@babel/traverse/lib/path/removal.js:75:16)
    at NodePath.insertBefore (.../formatjs-issue-2663-part2/node_modules/@babel/traverse/lib/path/modification.js:32:8)
    at PluginPass.visitor (.../formatjs-issue-2663-part2/node_modules/babel-plugin-formatjs/visitors/jsx-opening-element.js:81:32)
    at newFn (.../formatjs-issue-2663-part2/node_modules/@babel/traverse/lib/visitors.js:175:21)
    at NodePath._call (.../formatjs-issue-2663-part2/node_modules/@babel/traverse/lib/path/context.js:55:20)
    at NodePath.call (.../formatjs-issue-2663-part2/node_modules/@babel/traverse/lib/path/context.js:42:17)
    at NodePath.visit (.../formatjs-issue-2663-part2/node_modules/@babel/traverse/lib/path/context.js:92:31)
    at TraversalContext.visitQueue (.../formatjs-issue-2663-part2/node_modules/@babel/traverse/lib/context.js:116:16) {
  code: 'BABEL_TRANSFORM_ERROR'
```

# Workaround

Edit `babel.config.json` and set `"removeDefaultMessage": false`.