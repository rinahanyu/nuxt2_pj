import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

/*---------------------------------
  型定義
  ---------------------------------*/
type User = {
  id: string
  password: string
}

type LoginInfo = {
  // 現在ログインしているかどうか
  loginFlag: boolean
  // ログインユーザー
  nowUserId: string
  nowUserPassword: string
}

@Module({
  name: 'login',
  stateFactory: true,
  namespaced: true,
})
export default class Login extends VuexModule {
  /*---------------------------------
  変数定義
  ---------------------------------*/
  // 登録されたユーザー
  private users: User[] = [
    {
      id: '1',
      password: '1234',
    },
    {
      id: '2',
      password: '4321',
    },
  ]

  // ログイン情報
  private loginInfo: LoginInfo = {
    loginFlag: false,
    nowUserId: '',
    nowUserPassword: '',
  }

  /*---------------------------------
  getter定義
  ---------------------------------*/
  public get getLoginInfo() {
    return this.loginInfo
  }

  @Mutation
  // ログイン情報を更新
  private userLogin({ id, password }: { id: string; password: string }) {
    this.loginInfo.loginFlag = true
    this.loginInfo.nowUserId = id
    this.loginInfo.nowUserPassword = password
  }

  @Mutation
  // ログイン情報を削除
  private userLoginDelete() {
    this.loginInfo.loginFlag = false
    this.loginInfo.nowUserId = ''
    this.loginInfo.nowUserPassword = ''
  }

  @Action({ rawError: true })
  // 該当のユーザーが存在するか確認
  public userCheck({ id, password }: { id: string; password: string }) {
    let result = this.users.some((v) => v.id === id && v.password === password)
    if (result) {
      this.userLogin({ id, password })
    }
    return result
  }

  @Action({ rawError: true })
  // ログアウト
  public logout() {
    this.userLoginDelete()
    return new Promise((resolve) => {
      resolve(true)
    })
  }
}
