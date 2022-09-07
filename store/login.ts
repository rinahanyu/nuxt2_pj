import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

type User = {
  id: string,
  password: string
}

type LoginInfo = {
  // 現在ログインしているかどうか
  loginFlag: boolean,
  // ログインユーザー
  nowUserId: string,
  nowUserPassword: string
}

@Module({
  name: 'login',
  stateFactory: true,
  namespaced: true
})

export default class Login extends VuexModule {
  private users: User[] =[
    {
      id: '1',
      password: '1234'
    },
    {
      id: '2',
      password: '4321'
    }
  ]

  private loginInfo: LoginInfo = {
    loginFlag: false,
    nowUserId: '',
    nowUserPassword: ''
  }

  public get getLoginInfo() {
    return this.loginInfo
  }

  @Mutation
  private userLogin({id, password}: {id: string, password: string}) {
    this.loginInfo.loginFlag = true
    this.loginInfo.nowUserId = id
    this.loginInfo.nowUserPassword = password
  }

  @Action({ rawError: true })
  public userCheck({id, password}: {id: string, password: string}) {
    let result = this.users.some(v => v.id === id && v.password === password)
    if (result) {
      this.userLogin({id, password})
    }
    return result
  }
}
