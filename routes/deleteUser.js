const db = require('../database')


module.exports = (req, res, next) => {
    try {
        const { id } = req.params

        db.findOne({ _id: id }, (err, data) => {
            try {
                if (err) throw 'Failed to delete user from database!'

                db.remove({ _id: id }, (err, numRemoved) => {
                    try {
                        if (err) throw 'Failed to delete user from database!'
                        if (numRemoved !== 1) throw 'Failed to delete user!'

                        
                        res.status(204).end()
                    } catch (err) {
                        next(err)
                    }
                })
            } catch (err) {
                next(err)
            }
        })
    } catch (err) {
        next(err)
    }
}