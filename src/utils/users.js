const users = []

//add User, remove User, get User, get user in room

const addUser = ({username, room, id}) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room) {
        return {
            error: 'Username and room is required!'
        }
    }
    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if(existingUser){
        return {
            error: 'Username in using!'
        }
    }

    // store user

    const user = {id, username, room}
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id )
    if(index != -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
  return users.find((user) => user.id === id)

}

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}