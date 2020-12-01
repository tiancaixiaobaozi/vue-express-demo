const express = require("express")
const router = express.Router()
const fileController = require("../controller/uploadController")
const upload = require("../config/upload")

router.get("/test", (req, res) => {
  res.send({
    code: 200,
    status: 'success',
    message: 'ok',
    data: [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
      { id: 3, name: '王五' },
      { id: 4, name: '赵六' }
    ]
  })
})

router.post("/login.do", (req, res, next) => {
  const user = req.body
})

router.post("/upload.do", upload.single('file'), fileController.fileUpload)

module.exports = router
