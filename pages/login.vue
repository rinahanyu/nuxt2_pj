<script lang="ts">
import Vue, { PropType } from 'vue'

export type User = {
  id: string,
  password: string
}

export type dataType = {
  users: User[],
  loginError: boolean,
  nowUserId: string,
  nowUserPassword: string
  // 追加するかも？
}

// ID・passwordの定義（どのコンポーネントからでも呼び出せるように、後でstoreに入れる?）
export default Vue.extend({
  data(): dataType {
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
      nowUserPassword: ''
    }
  },
  methods: {
    existCheck(): void {
      // 合致するユーザーが存在するか
      this.loginError = this.users.some(v => v.id === this.nowUserId && v.password === this.nowUserPassword)
      if (this.loginError) {
        // ログイン成功による画面遷移処理
        this.$router.push('/main')
      }
    }
  },
})

</script>

<template>
  <div class="login_container">
    <h1>Login Page</h1>
    <div class="login_error" v-if="!loginError">
      ユーザー情報が存在しないため、ログインできませんでした。再度入力してください。
      もしくは新規登録ボタンから登録をお願いいたします。
    </div>
    <div class="form_container">
      <div class="form_frame">
        <label for="id">ID</label>
        <input name="id" type="text" v-model="nowUserId" class="enter_form">
      </div>
      <div class="form_frame">
        <label for="password">password</label>
        <input name="password" type="text" v-model="nowUserPassword" class="enter_form">
      </div>
      <div class="button">
        <button @click="existCheck()">login</button>
      </div>
    </div>
  </div>
</template>

<style>
  .enter_form {
    outline: solid 1px gray;
  }

  .button {
    background-color: rgba(215, 145, 117, 0.588);
    border-radius: 5px;
    color: white;
    width: 80px;
  }
</style>
