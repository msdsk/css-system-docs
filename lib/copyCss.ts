import fs from 'fs-extra'

export default () => {
  fs.removeSync("./public/css")
  fs.copySync("./node_modules/@thisisdeploy/scaffold-css", "./public/css")
}
