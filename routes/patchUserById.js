const db = require('../database')

module.exports = async (request, h) => {
    try {
        const { id } = request.params

        const updatedNumber = await db.asyncUpdate({ _id: id }, { $set: { ...request.payload, type: 'user' } })

        if (updatedNumber === 1) {
            const user = await db.asyncFindOne({ _id: id })
            return {
                success: true,
                msg: 'User was updated!',
                newUser: user
            }
        } else {
            return {
                success: false,
                msg: 'Invalid user id!',
                newUser: null
            }
        }

    } catch (err) {
        console.log(`err`, err)

        return {
            success: false,
            msg: 'Failed to update user data!',
            newUser: null
        }
    }
}