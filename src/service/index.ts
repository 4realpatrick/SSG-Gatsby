import express from "express";
import fs from 'fs'
import { ps } from '../utils'
const app = express();
const port: number = 3002;

app.get("/", (request, response) => {
  // console.log(`请求地址：${request.url}`);
  // console.log(`请求方法：${request.method}`);
  // console.log("请求头：", request.headers);
  // console.log("请求参数：", request.query);
  // 设置状态码
  response.statusCode = 201;
  // 等同于response.status(200).send('OK')
  // response.sendStatus(200)
  response.status(200).send("Service Index Page");
  response.end();
  // 发送数据
  // response.write('1')
  // response.write('2')
  // response.write('3')
  // 需要结束响应
  // response.end()
  // 也可以直接在结束响应时发送数据
  // response.end('response end')
  // express支持链式调用，下面为发送404状态码加响应数据，send本身会结束响应，不需要手动调用end
  // response.status(404).send('404 Can\'t find resource')
  // 设置cookie需要手动调用end，可以直接链式调用
  // response.cookie('queue','1').end()
});

app.get("/todos", (req, res) => {
  fs.readFile(`${ps}/mock/todos.json`, "utf-8", (error, data) => {
    if (error) {
      return res.status(500).json({
        Code: 500,
        Error: error.message,
      })
    }
    const db = JSON.parse(data)
    res.status(200).json(db.todos)
  });
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  console.log(`发送请求的id = ${id}`);
  res.send(`get /todos/${id}`);
});

app.post("/todos", (req, res) => {
  res.send("post /todos");
});

app.patch("/todos/:id", (req, res) => {
  const id = req.params.id;
  res.send(`patch /todos/${id}`);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  res.send(`delete /todos/${id}`);
});

// app.all("*",(req,res,next)=>{
//   //设置允许跨域的域名，*代表允许任意域名跨域
//   res.header("Access-Control-Allow-Origin","http://localhost:8000");
//   //允许的header类型
//   res.header("Access-Control-Allow-Headers","content-type");
//   //跨域允许的请求方式
//   res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
//   if (req.method.toLowerCase() == 'options')
//     res.send(200);  //让options尝试请求快速结束
//   else
//     next();
// });

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.listen(port, () => {
  console.log(`Express Server Running at http://localhost:${port}`);
});
