// TODO: decorator導入により、書き方変更？
export const state = () => ({
    // TODO: 画面制御を行うときに使用予定
    loginFlag: false,
    // ログインユーザー
    nowUserId: '',
    nowUserPassword: ''
})

const getters = {
  // TODO: ログイン後の画面にて、ユーザーid取得をgetterに変更
  // loginFirstFlagState: state => state.loginFirstFlag,
};

export const mutations = {
  login(state, {id, password}: {id: string, password: string}) {
    state.loginFlag = true
    state.nowUserId = id
    state.nowUserPassword = password
  }
}
