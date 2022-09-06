<script lang="ts">
import Vue from 'vue'
import errorMessage from '../components/errorMessage.vue'
import textInputForm from '../components/textInputForm.vue'
import passwordInputForm from '../components/passwordInputForm.vue'
import loginButton from '../components/loginButton.vue'

export type User = {
  id: string,
  password: string
}

// TODO: decoratorに書き直し
export type dataType = {
  // 登録ユーザー
  users: User[],
  // ログインエラー有無
  loginError: boolean,
  // 入力値
  nowUserId: string,
  nowUserPassword: string,
  // 入力フォーム関連
  passwordShow: boolean,
  idRules: [],
  passwordRules: [],
  errorMessage: string
}

// TODO: ID・passwordの定義（どのコンポーネントからでも呼び出せるように、後でstoreに入れる?）
export default Vue.extend({
  data() {
    return {
      users: [
        {
          id: '1',
          password: '1234'
        },
        {
          id: '2',
          password: '4321'
        }
      ],
      loginError: false,
      nowUserId: '',
      nowUserPassword: '',
      passwordShow: false,
      idRules: [
        value => !!value || 'Required.',
      ],
      passwordRules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 4) || 'Min 4 characters',
      ],
      errorMessage: 'ユーザー情報が存在しないため、ログインできませんでした。再度入力してください。'
    }
  },
  methods: {
    existCheck(): void {
      // 合致するユーザーが存在するか
      this.loginError = !this.users.some(v => v.id === this.nowUserId && v.password === this.nowUserPassword)
      this.$store.commit('login', { id: this.nowUserId, password: this.nowUserPassword })
      console.log(this.nowUserId, this.nowUserPassword)
      if (!this.loginError) {
        // ログイン成功による画面遷移処理
        this.$router.push('/main')
      }
    },
  },
})
</script>

<template>
  <div class="login_container">
    <h1 class="mb-5">Login Page</h1>
    <div v-if="loginError">
      <errorMessage :errorMessage="errorMessage"></errorMessage>
    </div>
    <div class="form_container">
      <textInputForm
        v-model="nowUserId"
        :rules="idRules"
        label="id"
      ></textInputForm>
      <passwordInputForm
        v-model="nowUserPassword"
        :rules="passwordRules"
        label="password"
      ></passwordInputForm>
      <loginButton
        @existCheck="existCheck()"
      ></loginButton>
    </div>
  </div>
</template>
