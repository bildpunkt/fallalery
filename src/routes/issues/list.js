const fs = require('fs')
const { join } = require('path')
const util = require('util')
const readFile = util.promisify(fs.readFile)

module.exports = ['/issues.:format', async (req, res) => {
  let file = null;

  switch(req.params.format) {
    case 'json':
      res.type('json')
      file = await readFile(join(__dirname, 'data/list.json'))
      break
    case 'xml':
      res.type('xml')
      file = await readFile(join(__dirname, 'data/list.xml'))
      break
    default:
      res.status(404).send()
      break
  }
  
  res.status(200).send(file)
}]