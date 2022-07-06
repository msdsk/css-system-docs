import fs from 'fs-extra'
import chokidar from 'chokidar'

const targetFolder = "./public/css"

function copyCss(input: string, target: string = targetFolder) {
  console.info(`Copying ${input}`)
  fs.removeSync(target)
  fs.copySync(input, target)
}

function watchCss(cssPath: string) {
  console.info("Watching css files")
  copyCss(cssPath)
  chokidar.watch(`${cssPath}/**/*.scss`, { ignoreInitial: true })
    .on("all", (_operation, filePath) => copyCss(filePath, filePath.replace(cssPath, targetFolder)))
  debugger
}

export default (inputFolder: cssInputFolder) => {
  fs.removeSync(targetFolder)
  inputFolder.local ? watchCss(inputFolder.path) : copyCss(inputFolder.path)
}
