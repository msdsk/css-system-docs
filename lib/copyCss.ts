import fs from 'fs-extra'
import chokidar from 'chokidar'
import klawSync from 'klaw-sync'
import path from 'path'

const targetFolder = "/css"
let inputFolder = ""

function copyCss(input: string) {
  const relativeInput = path.relative(__dirname, input)
  const target = path.join(__dirname, relativeInput.replace(inputFolder, targetFolder))
  return fs.copySync(input, target)
}

function watchCss(input: string) {
  console.info("Watching css files")
  chokidar.watch(`${input}/**/*.scss`, { ignoreInitial: true })
    .on("all", (_operation, filePath) => copyCss(filePath))
}

function initialCopy() {
  return klawSync(inputFolder, { nodir: true })
    .filter(file => file.path.endsWith(".scss"))
    .forEach(file => copyCss(file.path))
}

export default (input: cssInputFolder) => {
  fs.removeSync(targetFolder)
  inputFolder = input.path
  initialCopy()
  input.local && watchCss(input.path)
}
