<template>
  <div v-if="value">
    <h5>Notary</h5>
    <v-container>
      <div class="row">
        <div class="col-md-6">
          <v-text-field label="Name" v-model="notary.name" outlined hide-details></v-text-field>
        </div>
        <div class="col-md-6">
          <v-text-field label="First Name" v-model="notary.firstname" outlined hide-details></v-text-field>
        </div>
      </div>
    </v-container>
    <h5>Office</h5>
    <v-container>
      <div class="row">
        <div class="col-md-12">
          <v-text-field label="Office Name" v-model="notary.office.name" outlined hide-details></v-text-field>
        </div>
      </div>
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