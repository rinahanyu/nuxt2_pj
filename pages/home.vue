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
import { ComponentOptions } from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    // This adds the `middleware` property to the existing `vue/types/options/ComponentOptions` type
    middleware?: string | string[];
  }
}

@Component({
  middleware: 'authenticator'
})
export default class login extends Vue{
  nowUserId: string = LoginStore.getLoginInfo.nowUserId
}
</script>
