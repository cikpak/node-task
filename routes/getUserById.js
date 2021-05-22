const db = require('../database')


module.exports = (req, res, next) => {
    try {
        const { id } = req.params

        db.find({ type: 'user', _id: id }, (err, data) => {
            try {
                if (err)   return next(`Failed to get user with id ${id}`)

                if (data.length === 0) {
                    res.status(400).json({
                        success: false,
                        user: null
                    })
                } else {
                    res.json({
                        success: true,
                        user: data
                    })
                }
            } catch (err) {
                next(err)
            }
        })
    } catch (err) {
        next(err)
    }
}