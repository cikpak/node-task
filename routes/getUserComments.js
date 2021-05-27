const db = require('../database')
const axios = require('axios')

module.exports = async (request) => {
    try {
        const { id } = request.params

        const user = await db.asyncFindOne({ _id: id })

        if (!user) {
            return {
                success: false,
                msg: 'Invalid user id!',
                userComments: null
            }
        }

        //get fake user comments from remote resource
        const { data } = await axios({ url: 'https://jsonplaceholder.typicode.com/posts/1/comments' })

        return {
            success: true,
            msg: 'Success!',
            userComments: data
        }

    } catch (err) {
        console.log(`err`, err)

        return {
            success: false,
            msg: 'Failed to get user comments!',
            userComments: null
        }
    }
}