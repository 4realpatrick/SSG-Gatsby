import express from "express";
import fs from "fs";
import path from 'path'

const app = express();
const port: number = 3002;

app.get("/", (request, response) => {
  console.log(`请求地址：${request.url}`);
  console.log(`请求方法：${request.method}`);
  console.log("请求头：", request.headers);
  console.log("请求参数：", request.query);
  // 设置状态码
  response.statusCode = 201;
  // 等同于response.status(200).send('OK')
  // response.sendStatus(200)
  response.status(200).send("default get request");
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
/* 
  test 实现对任务清单的CRUD（增删改查）接口服务
  查询任务列表
    GET /todos
  根据id查询单个任务
    GET /todos/:id
  添加任务
    POST /todos
  修改任务
    PATCH /todos
  删除任务
    DELETE /todos/:id
*/

app.get("/todos", (req, res) => {
  // 为啥直接调用__dirname报错：__dirname is not defined
  const __dirname = path.resolve()
  fs.readFile(path.join(__dirname,"/src/service/mock/todos.json"), "utf-8", (error, data) => {
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
  console.log(`id = ${id}`);

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
  res.send("delete /todos/:id");
});
app.listen(port, () => {
  console.log(`Express Server Running at http://localhost:${port}`);
});
