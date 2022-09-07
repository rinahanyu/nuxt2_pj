<template>
  <v-alert
  dense
  outlined
  type="error"
  >
    {{ errorMessage }}
  </v-alert>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class errorMessage extends Vue{
  @Prop({ type: String, required: true })
  errorMessage!: string
}
</script>
