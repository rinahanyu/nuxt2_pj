<script lang="ts">
  export default {
    data() {
      return{
        passwordShow: false,
      }

    },
    props: {
      label: { type: String, required: true },
      value: { type: String, required: true },
      rules: { type: Array, required: false },
    },
    methods: {
      // 入力されたら親コンポーネントに連携
      updatePassword: function(event) {
        this.$emit("input", event);
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
      @input="updatePassword"
      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
      :type="passwordShow ? 'text' : 'password'"
      @click:append="passwordShow = !passwordShow"
      ></v-text-field>
  </template>
