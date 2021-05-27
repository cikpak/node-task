const db = require('../database')


module.exports = async (request, h) => {
    try {
        const { id } = request.params


        const user = await db.asyncFindOne({ _id: id })

        if (!user) throw new Error()

        const numRemoved = await db.asyncRemove({ _id: id })

        if (numRemoved === 1) {
            return h.response().code(209)
        }
    } catch (err) {
        console.log(`err`, err)

        return {
            success: false,
            msg: 'Failed to delete user!'
        }
    }
}