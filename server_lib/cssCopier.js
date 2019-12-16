const fs = require("fs-extra")
const RecursiveRename = require('recursive-rename')
const watch = require('node-watch')

module.exports = async (modulePath, dest) => {
  fs.removeSync(dest)
  fs.copySync(modulePath, dest)
  const recursiveRename = new RecursiveRename({
    src: 'scss',
    dest: 'scss-doc',
    path: dest
  })
  await recursiveRename.dive()
  if (process.env.NODE_ENV === 'production') return

  watch(modulePath, { recursive: true, filter: /\.scss$/ }, (e, name) => {
    const fileDestination = name.replace(modulePath, dest)
    fs.copySync(name, fileDestination)
    fs.renameSync(fileDestination, fileDestination.replace(/\.scss$/, '.scss-doc'))
  })
}
