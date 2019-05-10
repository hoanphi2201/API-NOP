module.exports = class UserServer {
    constructor() {
        this.users = [];
    }
    addUser(id, user_id, name, username, avatar) {
        let user = this.getUserByUserId(user_id);
        if(!user) {
            let user = {id, user_id, name, username, avatar};
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
    getUserByUserId(user_id) {
        return this.users.filter((user) => user.user_id === user_id)[0];
    }
    getListUsers() {
        return this.users;
    }
}