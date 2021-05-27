module.exports = (server) => {

    //add new user
    server.route({
        method: 'POST',
        path: '/user',
        handler: require('./addUser')
    })


    //get all users
    server.route({
        method: 'GET',
        path: '/user',
        handler: require('./getUsers')
    })


    // get one user by id
    server.route({
        method: 'GET',
        path: '/user/{id}',
        handler: require('./getUserById')
    })


    // delete user by id
    server.route({
        method: 'DELETE',
        path: '/user/{id}',
        handler: require('./deleteUser')
    })


    // change user data
    server.route({
        method: 'PATCH',
        path: '/user/{id}',
        handler: require('./patchUserById')
    })


    // add new friend
    server.route({
        method: 'POST',
        path: '/user/{id}/friend',
        handler: require('./addFriend')
    })


    // get user's friends 
    server.route({
        method: 'GET',
        path: '/user/{id}/friend',
        handler: require('./getFriends')
    })


    //get user comments
    server.route({
        method: 'GET',
        path: '/user/{id}/comments',
        handler: require('./getUserComments')
    })

}