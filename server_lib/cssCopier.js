const fs = require("fs-extra")
const RecursiveRename = require('recursive-rename')

module.exports = async (modulePath, dest) => {
  fs.removeSync(dest)
  fs.copySync(modulePath, dest)
  const recursiveRename = new RecursiveRename({
    src: 'scss',
    dest: 'scss-doc',
    path: dest
  })
  await recursiveRename.dive()
}
