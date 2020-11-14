const { readFile } = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const readFileP = promisify(readFile)

module.exports = ['/issues.:format', async (req, res) => {
  let file = null;

  switch(req.params.format) {
    case 'json':
      res.type('json')
      file = await readFileP(join(__dirname, 'data/list.json'))
      break
    case 'xml':
      res.type('xml')
      file = await readFileP(join(__dirname, 'data/list.xml'))
      break
    default:
      res.status(406).send()
      return
  }
  
  res.status(200).send(file)
}]