<template>
  <div class="button pt-5">
    <v-btn
      @click="$emit('exitCheck')"
      class="ma-2"
      outlined
      color="indigo"
    >
    login
    </v-btn>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class loginButton extends Vue{
}
</script>
