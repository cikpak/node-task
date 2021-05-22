const { join } = require('path')
const Database = require('nedb')

const db = new Database({ filename: join(__dirname, 'db.json'), autoload: true })

module.exports = db