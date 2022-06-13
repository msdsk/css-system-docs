import fs from 'fs-extra'


const readFolder = (folder: string) => {
  const fileList: Array<MenuItem> = []
  fs.readdirSync(folder, { withFileTypes: true }).forEach(content => {
    if (!content.isDirectory() && !/_[^/]*\.scss$/.test(content.name)) return
    fileList.push([
      content.name,
      content.isDirectory() ? readFolder(`${folder}/${content.name}`) : null
    ])
  })
  return fileList
}

const fileList = readFolder("./node_modules/@thisisdeploy/scaffold-css")

export default fileList
