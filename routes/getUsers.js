const db = require('../database')

//get all users
module.exports = async (req, res, next) => {
    try {
        db.find({ type: 'user' }, (err, data) => {
            if (err) throw 'Failed to get users!'

            res.json({
                success: true,
                users: data,
            })
        })
    } catch (err) {
        next('Error while geting users!')
    }
}