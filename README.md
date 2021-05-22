# NodeJS task

### Installation and start

```bash
npm i
npm run start
```

### API short description

```
GET     /user                - return all users 
GET     /user/:id            - return one user by id
GET     /user/:id/friend     - get all user friends
POST    /user                - create new user
POST    /user/:id/friend     - add friend to user's friends list
PATCH   /user/:id            - update user info with new values from req.body
DELETE  /user/:id            - delete user by id
GET     /user/:id/comments   - get user's comments from remote resource (jsonplaceholder API)
```

### POST /user json body example: 

```
{
   "firstname" : 'Simion',
   "lastname" : "Gorgos",
   "gender" : "m",
   "nickname" : "cikpak",
   "email" : "test@mail.com",
}
```

### POST /user/:id/friend json body example: 

```
{
	"friendId": "S4zISmxi495a9enQ"
}
```

### PATCH /user/:id 
##### you can change any information from POST /user