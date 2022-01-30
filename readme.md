
 ## Output of file index.js using path module

 1- C:\Users\Satya Prakash Mall\Desktop\Backend\Node-2-Assignment\Node-path\index.js

2- C:\Users\Satya Prakash Mall\Desktop\Backend\Node-2-Assignment\Node-path

3- index.js

4- .js

5- C:\Users\Satya Prakash Mall\Desktop\Backend\Node-2-Assignment\Node-path\index.js

6- {
  root: 'C:\\',
  dir: 'C:\\Users\\Satya Prakash Mall\\Desktop\\Backend\\Node-2-Assignment\\Node-path',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}

7- C:\Users\Satya Prakash Mall\Desktop\Backend\Node-2-Assignment\Node-path

## 8- path.formate(__filename): 
node:internal/validators:163
      throw new ERR_INVALID_ARG_TYPE(name, 'Object', value);
      ^

TypeError [ERR_INVALID_ARG_TYPE]: The "pathObject" argument must be of type object. Received type string ('C:\\Users\\Satya Prakash...)
    at _format (node:path:142:3)
    at Object.<anonymous> (C:\Users\Satya Prakash Mall\Desktop\Backend\Node-2-Assignment\Node-path\index.js:29:18)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'ERR_INVALID_ARG_TYPE'
}
[nodemon] app crashed - waiting for file changes before starting...