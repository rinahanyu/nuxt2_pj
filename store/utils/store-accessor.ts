import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Login from '../login'

let LoginStore: Login
const initialiseStores = (store: Store<any>): void => {
  LoginStore = getModule(Login, store)
}

export { initialiseStores, LoginStore }
