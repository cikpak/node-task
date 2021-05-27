const db = require('../database')

module.exports = async (request) => {
    try {
        const { id } = request.params

        const user = await db.asyncFindOne({ type: 'user', _id: id })

        console.log(`user`, user)

        if (!user) throw new Error()

        return {
            success: true,
            msg: 'Success!',
            user
        }
    } catch (err) {
        console.log(`err`, err)
        
        return {
            success: false,
            msg: 'Failed to get user by id!',
            user: null
        }
    }
}