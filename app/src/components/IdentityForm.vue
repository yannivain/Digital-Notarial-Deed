<template>
  <div v-if="value">
    <h5 v-if="title">{{ title }}</h5>
    <v-container>
      <div class="row">
        <div class="col-md-6">
          <v-text-field label="Name" v-model="identity.name" hide-details outlined></v-text-field>
        </div>
        <div class="col-md-6">
          <v-text-field label="Firstname" v-model="identity.firstname" hide-details outlined></v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <v-text-field label="Birthday" type="date" v-model="identity.birthday" hide-details outlined></v-text-field>
        </div>
        <div class="col-md-6">
          <v-select label="sex" :items="sexItems" v-model="identity.sex" hide-details outlined></v-select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <v-text-field label="Place of origin" v-model="identity.placeOrigin" hide-details outlined></v-text-field>
        </div>
      </div>
    </v-container>
    <h5>Address</h5>
    <v-container>
      <address-fields v-model="identity.placeResidency"></address-fields>
    </v-container>
  </div>
</template>

<script>
import AddressFields from "@/components/AddressFields"

export default {
  name: 'IdentityForm',
  components: {AddressFields},
  props: {
    value: {type: Object, required: true},
    title: {type: String, required: false}
  },
  data: () => ({
    sexItems: ['Male', 'Female'],
  }),
  computed: {
    identity: {
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