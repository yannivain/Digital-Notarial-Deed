<template>
  <v-card class="ma-1" elevation="4">
    <v-card-text>
      <v-text-field label="Title" v-model="condition.titleCondition"></v-text-field>
      <v-text-field label="Condition" v-model="condition.textCondition"></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'SpecialConditionForm',
  components: {},
  props: {
    value: {type: Object, required: true},
  },
  data: () => ({}),
  computed: {
    condition: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  },
};
</script>

<style scoped>

</style>