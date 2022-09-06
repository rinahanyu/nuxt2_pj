<script lang="ts">
  export default {
    props: {
      errorMessage: { type: String, required: true },
    },
  };
</script>

<template>
  <v-alert
    dense
    outlined
    type="error"
  >
    {{ errorMessage }}
  </v-alert>
</template>
