const fs = require("fs-extra")
const RecursiveRename = require('recursive-rename')

module.exports = async (modulePath) => {
  const dest = modulePath.replace('node_modules', 'dev/css_module_copy')
  fs.removeSync(dest)
  fs.copySync(modulePath, dest)
  const recursiveRename = new RecursiveRename({
    src: 'scss',
    dest: 'scss-doc',
    path: dest
  })
  await recursiveRename.dive()
}
