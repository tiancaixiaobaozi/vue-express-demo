const upload = {
  fileUpload(req, resp) {
    let file = req.file
    if (file) {
      resp.set({ 'content-type': 'application/json; charset=utf-8' })
      resp.send("success")
    } else {
      resp.send("error")
    }
  }
}

module.exports = upload