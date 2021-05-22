
const db = require('../database')

module.exports = async (req, res, next) => {
    try {
        const { firstname, lastname, nickname, email, gender } = req.body

        db.findOne({ nickname }, (err, data) => {
            try {
                if (err) throw 'Erorr while creating user!'

                if (data) throw `User with ${data.nickname} nickname already exists!`

                db.insert({
                    firstname, lastname, nickname, email, gender, type: 'user', friends: []
                }, (err, data) => {
                    if (err) next('Error while creating user!')

                    res.status(201).json({
                        success: true,
                        msg: `User ${firstname} ${lastname} was created!`,
                        user: data,
                    })
                })
            } catch (err) {
                return next(err)
            }
        })
    } catch (err) {
        next(err)
    }
}