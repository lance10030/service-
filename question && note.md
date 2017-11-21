### 问题以及笔记
1. 设置在返回错误时候使用 模板（ejs或者jade）；但是在public中还是使用html。有待深入。
2. app.set   
```
//设置模板引擎
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'public'))

```
3.app.use
```
//普遍用法:处理路由请求
//支持只传入一个函数作为参数，这个函数在收到任何请求的时候都会被执行


```
4. 连接mongodb数据库；这里我们使用了mongoose;在db.js中初步配置，在app.js中引入
