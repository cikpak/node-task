const db = require('../database');


module.exports = async (request, h) => {
    try {
        const { id } = request.params

        const user = await db.asyncFindOne({ _id: id })

        if (!user) {
            return {
                success: false,
                msg: 'Invalid user id!',
                userFriends: null
            }
        }

        const userFriends = await db.asyncFind({ _id: { $in: user.friends.map(friend => friend.friendId) } })

        return {
            success: true,
            msg: 'Success!',
            userFriends
        }

    } catch (err) {
        console.log(`err`, err)
        
        return {
            success: false,
            msg: 'Failed to get user friends!',
            userFriends: null
        }
    }
}