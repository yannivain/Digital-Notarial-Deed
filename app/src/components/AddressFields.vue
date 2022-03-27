<template>
  <div>
      <v-text-field label="Street Name" v-model="address.streetName"></v-text-field>
      <v-text-field label="Street Nr" v-model="address.streetNr"></v-text-field>
      <v-text-field label="PO Box" type="number" v-model="address.poBox"></v-text-field> <!-- Optional -->
      <v-text-field label="ZIP" type="number" v-model="address.zip"></v-text-field>
      <v-text-field label="City" v-model="address.city"></v-text-field>
      <v-text-field label="Country" v-model="address.country"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'AddressFields',
  components: {},
  props: {
    value: {type: Object, required: true}
  },
  data: () => ({}),
  computed: {
    address: {
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