const db = require('../database');

module.exports = (req, res, next) => {
    try {
        console.log(`req.params`, req.params)
        const { id } = req.params

        db.find({ _id: id }, (err, user) => {
            try {
                if (err) throw 'Failed to get user friends!'

                db.find({ _id: { $in: user[0].friends.map(friend => friend.friendId) } }, (err, friends) => {
                    if (err) throw 'Cand get user friends!'

                    res.json({
                        success: true,
                        friends
                    })
                })
            } catch (err) {
                next(err)
            }
        })
    } catch (err) {
        next(err)
    }
}