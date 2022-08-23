export default class UserDaoArray {
  constructor() {
    this.users = []
  }
  getAll = async () => {
    return this.users;
  };
  save = async (user) => {
    let id = 0

    if (this.users.length > 0) {
      //obtener el ultimo Id          
      id = Math.max(...this.users.map(p => p.id))
    }
    id++
    user.id = id
    this.users.push(user)
    return user
  }
}
