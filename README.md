## fis-preprocessor-js-hash
js中获取js文件的hash

```js
var hash = '__filehash';

js.src = '//m.baidu.com/?t='+hash;
```

### 使用

```bash
npm install -g fis-preprocessor-js-hash
```

```js
fis.merge.config({
    modules: {
        preprocessor: {
            js: "js-hash"
        }
    },
    ....
});
```
