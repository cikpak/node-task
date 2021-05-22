const db = require('../database')

module.exports = (req, res, next) => {
    try {
        const { id } = req.params

        db.update({ _id: id }, { $set: { ...req.body, type: 'user' } }, { returnUpdatedDocs: true }, (err, updatedDoc) => {
            try {
                if (err) throw 'Failed to update user!'

                res.json({
                    success: true,
                    msg: 'User was updated!',
                    updatedUser: updatedDoc
                })
            } catch (err) {
                next(err)
            }
        })
    } catch (err) {
        next(err)
    }
}