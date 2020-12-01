const express = require("express")
const logger = require("morgan")  //日志
const favicon = require("serve-favicon")
const path = require("path")
const app = express()
const routes = require("./routes")

app.use(routes)
app.use(express.static(__dirname + "/public"))
app.use(favicon(path.join(__dirname, "public", "favicon.ico")))
app.use(logger("dev"))
app.use((req, resp) => {
  resp.status(404)
  resp.sendFile(path.join(__dirname, "/public/html", "404.html"))
})

app.set("port", 8008)
app.listen(8008, _ => console.log("服务器已启动，端口号:" + app.get("port")))
