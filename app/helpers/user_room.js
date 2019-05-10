module.exports = class UserRoom {
    constructor() {
        this.users = [];
    }
    addUser(id, user_id, name, username, avatar, room) {
        let user = this.getUserByUserId(user_id, room);
        if(!user) {
            let user = {id, user_id, name, username, avatar, room};
            this.users.push(user);
        }
        return this.users;
        
    }
    removeUser(id) {
        let user = this.getUser(id);
        if(user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }
    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }
    getUserByUserId(user_id, room) {
        return this.users.filter((user) => user.user_id === user_id && user.room === room)[0];
    }
    getListUsers(room) {
        let users = this.users.filter((user) => user.room === room);
        let listUsername = users.map((user) => {
            return user
        });
        return listUsername;
    }
}