const fs = require("fs-extra")

module.exports = (rootPath) => {
  function readDirRecursive(path, flatFileList = []) {
    let readResult = fs.readdirSync(path),
      relativePath = path.replace(rootPath, ''),
      files = readResult
      .filter(item => /\.scss$/.exec(item) && item !== 'index.scss')
      .map(item => `${relativePath}/${item.replace(/_{0,1}([^\/]*)\.scss$/g, '$1')}`)

    // finding files
    let fileList = { files, directories: {} }
    flatFileList = flatFileList.concat(files)

    // reading directories
    readResult.filter(item => !/\./.exec(item)).forEach((item) => {
      let directory = readDirRecursive(`${path}/${item}`, flatFileList)
      fileList.directories[item] = directory[0]
      flatFileList = directory[1]
    })
    return [fileList, flatFileList]
  }
  return readDirRecursive(rootPath, [])
}
