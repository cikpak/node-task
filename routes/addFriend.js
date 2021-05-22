const db = require('../database');

module.exports = (req, res, next) => {
    try {
        const { id } = req.params
        const { friendId } = req.body

        // YES, I KNOW
        //but i can't understand how to get new user object after update in nedb (if that's possible)
        // :(

        db.findOne({ _id: friendId }, (err, user) => {
            if (err) return next('Failed to friend user that you want to add in friends!')

            if (user) {
                db.update({ _id: id }, { $push: { friends: user._id } }, (err, data) => {
                    if (err) return next('Failed to add new friend!')

                    db.find({ _id: id }, (err, user) => {
                        if (err) return next('Failed to add new friend!')

                        db.find({ type: "user", _id: { $in: user[0].friends.map(friend => friend.friendId) } }, (err, data) => {
                            if (err) return next('Failed to add new friend!')

                            res.status(201).json({
                                success: true,
                                msg: "User was added to your friends list!",
                                newFriendList: data
                            })
                        })
                    })
                })
            } else {
                next('Invalid friend id!')
            }
        })

        // :( 
    } catch (err) {
        next(err)
    }
}