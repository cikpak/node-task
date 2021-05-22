const { Router } = require('express')

const router = new Router()

router.post('/user', require('./addUser'))
router.get('/user', require('./getUsers'))
router.get('/user/:id', require('./getUserById'))
router.delete('/user/:id', require('./deleteUser'))
router.patch('/user/:id', require('./patchUserById'))
router.get('/user/:id/friend', require('./getFriends.js'))
router.post('/user/:id/friend', require('./addFriend'))

router.get('/user/:id/comments', require('./getUserComments'))

module.exports = router