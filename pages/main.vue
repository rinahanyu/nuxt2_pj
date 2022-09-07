<template>
  <div>
    <h1>Home</h1>
    <div>
      <h4>ログインユーザーID: {{ nowUserId }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LoginStore } from '../store'
@Component
export default class login extends Vue{
  nowUserId: string = LoginStore.getLoginInfo.nowUserId
}
</script>
