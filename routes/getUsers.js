const db = require('../database')

//get all users
module.exports = async (request, reply) => {
    try {
        const users = await db.asyncFind({ type: 'user' })

        return {
            success: true,
            msg: 'Success!',
            users
        }
    } catch (err) {
        console.log(`err`, err)

        return {
            success: false,
            msg: 'Failed to get all users!',
            users: null
        }
    }
}