import PersistenceFactory from '../daos/users/persistenceFactory.js'
import Singleton from "../daos/users/singletonPersistenceFactory.js"

export default class UsersService {
  constructor() {
      this.usersDao
    this.init()
  }
  init = async () => {
  //  this.usersDao = await PersistenceFactory.getPersistence()
  this.usersDao= await Singleton.getInstance()
  }
  getUsers = async () => {
    return await this.usersDao.getAll();
  };
  addUser = async (user) => {
    return await this.usersDao.save(user)
  }
}
