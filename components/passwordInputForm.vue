<template>
  <v-text-field
    :label="label"
    :value="nowUserPassword"
    :rules="rules"
    hide-details="auto"
    @input="updatePassword"
    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
    :type="passwordShow ? 'text' : 'password'"
    @click:append="passwordShow = !passwordShow"
    ></v-text-field>
</template>

<script lang="ts">
  import {Component, Prop, PropSync, Vue} from "vue-property-decorator";

  @Component
  export default class passwordInputForm extends Vue{
  /*---------------------------------
  変数定義
  ---------------------------------*/
  // パスワードの表示非表示
  passwordShow: boolean = false

  // 見出し
  @Prop({ type: String, required: true })
  label!: string

  // ルール（バリデーションなど）
  @Prop({ type: Array, required: true })
  rules!: []

  // 入力値（子コンポーネントでの値変更を親へ渡す設定）
  @PropSync('parentNowUserPassword', { type: String })
  nowUserPassword!: string

  /*---------------------------------
  関数定義
  ---------------------------------*/
  // 子コンポーネント内で値の変更
  updatePassword(event: string) {
    this.nowUserPassword = event
  }
}
</script>
