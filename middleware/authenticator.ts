import { Context, Middleware } from '@nuxt/types'
import { LoginStore } from '../store'

const authenticateMiddleware: Middleware = ({ store, redirect }) => {
  // ユーザーが認証されていない場合はログインページへリダイレクト
  if (!LoginStore.getLoginInfo.loginFlag) {
    return redirect('/login')
  }
}
export default authenticateMiddleware
