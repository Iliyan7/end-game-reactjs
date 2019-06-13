import { observable, computed } from "mobx";
import { UserModel } from "../models/UserModels";

class UserStore {
  @observable public loggedUser: UserModel= {
    email: '',
    firstName: '',
    lastName: '',
    role: '',
  }

  @computed get email() {
    return this.loggedUser.email;
  }

  @computed get firstName() {
    return this.loggedUser.firstName;
  }

  @computed get lastName() {
    return this.loggedUser.lastName;
  }
}

export default UserStore;