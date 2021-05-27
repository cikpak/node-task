require('dotenv').config()
const PORT = process.env.PORT

const Hapi = require('@hapi/hapi')
const routes = require('./routes/index')

const start = async () => {
    const server = Hapi.server({
        port: PORT,
        host: 'localhost'
    })

    routes(server)

    await server.start()

    console.log(`Server started on: ${server.info.uri}`)
}

//starting server
start()