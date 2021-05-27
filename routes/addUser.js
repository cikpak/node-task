const db = require('../database')


module.exports = async (request) => {
    try {
        const { firstname, lastname, nickname, email, gender } = request.payload
        
        const alreadyExists = await db.asyncFindOne({ nickname })

        if (alreadyExists) {
            return {
                success: false,
                msg: `User with nickname ${nickname} already exists!`,
                user: null
            }
        }

        const newUser = await db.asyncInsert({
            firstname, lastname, nickname, email, gender, type: 'user', friends: []
        })

        return {
            success: true,
            msg: `User ${firstname} ${lastname} was created!`,
            user: newUser,
        }

    } catch (err) {
        console.log(`err`, err)

        return {
            success: false,
            msg: 'Failed to add new user!',
            user: null
        }
    }
}