const klaw = require("klaw-sync")

export default function(req, res, next) {
  const scssFiles = klaw('./node_modules/@thisisdeploy/css-system', { nodir: true })
  res.scssList = scssFiles
  next()
}
