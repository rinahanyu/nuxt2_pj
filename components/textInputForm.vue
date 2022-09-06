<script lang="ts">
  export default {
    props: {
      label: { type: String, required: true },
      value: { type: String, required: true },
      rules: { type: Array, required: false },
    },
    methods: {
      // 入力されたら親コンポーネントに連携
      updateId: function(event) {
        this.$emit("input", event)
      }
    }
  };
</script>

<template>
  <v-text-field
    :label="label"
    :value="value"
    :rules="rules"
    hide-details="auto"
    @input="updateId"
  ></v-text-field>
</template>
