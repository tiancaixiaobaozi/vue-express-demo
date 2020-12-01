const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads")  // 上传的文件的保存位置
  },
  // 给上传的文件重命名
  filename: (req, file, callback) => {
    let newFileName = (file.originalname).split(".");
    // 重命名,去重复名字
    callback(null, newFileName[0] + "_" + Date.now() + "." + newFileName[newFileName.length - 1])
  }
})

const upload = multer({
  storage
})

module.exports = upload
