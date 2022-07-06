import fs from 'fs-extra'
import path from 'path'

let cssInputFolder: cssInputFolder = {
  path: './node_modules/@thisisdeploy/scaffold-css',
  local: false
}

if (process.env.NODE_ENV !== 'production') {
  try {
    cssInputFolder = {
      path: fs.readJSONSync(path.join(__dirname, "../local-override.json")),
      local: true
    }
    console.info("loading local overide")
  } catch { }
}

export default cssInputFolder
