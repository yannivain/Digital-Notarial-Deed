<template>
  <div v-if="value">
    <h5>Lot</h5>
    <v-container>
      <v-text-field label="egrid" v-model="lot.egrid"></v-text-field>
    </v-container>
    <h5>Register</h5>
    <v-container>
      <v-text-field label="name" v-model="lot.name"></v-text-field>
      <v-text-field label="Lot ID" v-model="lot.id"></v-text-field>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'LotForm',
  props: {
    value: {type: Object, required: true},
    title: {type: String, required: false}
  },
  data: () => ({}),
  computed: {
    lot: {
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