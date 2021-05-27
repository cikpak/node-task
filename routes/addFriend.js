const db = require('../database');

module.exports = async (request, h) => {
    try {
        const { friendId } = request.payload
        const { id } = request.params

        // YES, I KNOW
        //but i can't understand how to get new user object after update in nedb (if that's possible)
        // :(

        const user = await db.asyncFindOne({ _id: friendId })

        if (!user) {
            return {
                success: false,
                msg: 'Invalid user id!',
                newFriendsList: null
            }
        }

        await db.asyncUpdate({ _id: user._id }, { $push: { friends: { friendId: user._id } } })

        const updatedUser = await db.asyncFindOne({ _id: id })

        //get friends based on new user's friends list
        const newFriendsList = await db.asyncFind({ type: "user", _id: { $in: updatedUser.friends.map(friend => friend.friendId ) } })
        
        // :( 

        return {
            success: true,
            msg: 'User was added to your friends list!',
            newFriendsList
        }
    } catch (err) {
        console.log(`err`, err)

        return {
            success: false,
            msg: 'Failed to add new friend!',
            newFriendsList: null
        }
    }
}