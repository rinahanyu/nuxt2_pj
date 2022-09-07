<template>
  <div></div>
</template>

<script>
  import { LoginStore } from '../store'
  export default {
    async middleware ({ store, redirect }) {
      // vuex処理の前に画面遷移が走らせない
      await LoginStore.logout()
      return redirect('/login')
    }
  }
  </script>

