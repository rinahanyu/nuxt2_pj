<template>
  <div class="login_container">
    <h1 class="mb-5">Login Page</h1>
    <div v-if="loginError">
      <errorMessage :errorMessage="errorMessage"></errorMessage>
    </div>
    <div class="form_container">
      <textInputForm
        :parentNowUserId.sync="nowUserId"
        :rules="idRules"
        label="id"
        ></textInputForm>
      <passwordInputForm
      :parentNowUserPassword.sync="nowUserPassword"
      :rules="passwordRules"
      label="password"
      ></passwordInputForm>
      <loginButton
      @exitCheck="userCheck()"
      ></loginButton>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import { LoginStore } from '../store'
import errorMessage from '../components/errorMessage.vue'
import textInputForm from '../components/textInputForm.vue'
import passwordInputForm from '../components/passwordInputForm.vue'
import loginButton from '../components/loginButton.vue'

@Component({
  components: { errorMessage, textInputForm, passwordInputForm, loginButton },
})
export default class login extends Vue{
  /*---------------------------------
  変数定義
  ---------------------------------*/
  // ログインエラーメッセージ
  errorMessage: string = 'ユーザー情報が存在しないため、ログインできませんでした。再度入力してください。'

  // ログインエラー有無
  loginError: boolean = false
  // 入力値
  nowUserId: string = ''
  nowUserPassword: string = ''
  // 入力フォーム関連
  passwordShow: boolean = false
  idRules: any = [
    value => !!value || 'Required.',
  ]
  passwordRules: any = [
    value => !!value || 'Required.',
    value => (value && value.length >= 4) || 'Min 4 characters',
  ]

  /*---------------------------------
  関数定義
  ---------------------------------*/
  // 登録ユーザーに存在するか
  userCheck(): void {
    this.loginError = !LoginStore.userCheck({id: this.nowUserId, password: this.nowUserPassword})
    console.log(this.nowUserId, this.nowUserPassword)
    if (!this.loginError) {
      // ログイン成功による画面遷移処理
      this.$router.push('/main')
    }
  }
}
</script>
