import {observable, action} from 'mobx'

export default class UserStore {
  @observable userName = ''

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action updateUserName(name) {
    this.userName = name
  }

  @action resetData() {
    this.userName = ''
  }
}
