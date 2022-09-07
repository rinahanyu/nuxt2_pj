<template>
  <v-text-field
  :label="label"
  :value="nowUserId"
  :rules="rules"
  hide-details="auto"
  @input="updateId"
  ></v-text-field>
</template>

<script lang="ts">
import {Component, Prop, PropSync, Vue} from "vue-property-decorator";

@Component
export default class textInputForm extends Vue{
  /*---------------------------------
  変数定義
  ---------------------------------*/
  // 見出し
  @Prop({ type: String, required: true })
  label!: string

  // ルール（バリデーションなど）
  @Prop({ type: Array, required: true })
  rules!: []

  // 入力値（子コンポーネントでの値変更を親へ渡す設定）
  @PropSync('parentNowUserId', { type: String })
  nowUserId!: string

  /*---------------------------------
  関数定義
  ---------------------------------*/
  // 子コンポーネント内で値の変更
  updateId(event: string) {
    this.nowUserId = event
  }
};
</script>
