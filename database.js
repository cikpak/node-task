const { join } = require('path')
const { AsyncNedb } = require('nedb-async')

const db = new AsyncNedb({ filename: join(__dirname, 'db.json'), autoload: true })

module.exports = db