const fs = require("fs-extra")

module.exports = (rootPath) => {
  function readDirRecursive(path, flatFileList = []) {
    let readResult = fs.readdirSync(path)
    // finding files
    let fileList = { files: readResult.filter(item => /\.scss$/.exec(item)) }
    flatFileList = flatFileList.concat(fileList.files.map(item => `${path.replace(rootPath, '')}/${item.replace(/\.scss$/, '')}`))

    // reading directories
    readResult.filter(item => !/\./.exec(item)).forEach((item) => {
      let directory = readDirRecursive(`${path}/${item}`, flatFileList)
      fileList[item] = directory[0]
      flatFileList = directory[1]
    })
    return [fileList, flatFileList]
  }
  return readDirRecursive(rootPath, [])
}
