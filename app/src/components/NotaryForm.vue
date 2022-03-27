<template>
  <div v-if="value">
    <h5>Notary</h5>
    <v-container>
      <v-text-field label="Name" v-model="notary.name"></v-text-field>
      <v-text-field label="First Name" v-model="notary.firstname"></v-text-field>
    </v-container>
    <h5>Office</h5>
    <v-container>
      <v-text-field label="Office Name" v-model="notary.office.name"></v-text-field>
      <address-fields v-model="notary.office"></address-fields>
    </v-container>
  </div>
</template>

<script>

import AddressFields from "@/components/AddressFields"

export default {
  name: 'NotaryForm',
  components: {AddressFields},
  props: {
    value: {type: Object, required: true},
  },
  data: () => ({}),
  computed: {
    notary: {
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