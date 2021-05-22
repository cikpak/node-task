const db = require('../database')
const axios = require('axios')


module.exports = (req, res, next) => {
    try {
        const { id } = req.params

        db.findOne({ _id: id }, async (err, user) => {
            if (err) throw 'Failed to get user comments!'

            if (user) {
                try {
                    const { statusText, data } = await axios({ url: 'https://jsonplaceholder.typicode.com/posts/1/comments' })

                    if (statusText === 'OK') {
                        res.json({
                            success: true,
                            userComments: data
                        })
                    }
                } catch (err) {
                    if (err.hasOwnProperty('response')) {
                        //axios error
                        return next('Failed to get user comments from remoute resource!')
                    }

                    next('Failed to get user comments!')
                }
            }
        })
    } catch (err) {
        next(err)
    }
}