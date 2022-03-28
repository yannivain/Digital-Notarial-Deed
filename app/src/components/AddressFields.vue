<template>
  <div>
    <div class="row">
      <div class="col-md-10">
        <v-text-field label="Street Name" v-model="address.streetName" hide-details outlined></v-text-field>
      </div>
      <div class="col-md-2">
        <v-text-field label="Street Nr" v-model="address.streetNr" hide-details outlined></v-text-field>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <v-text-field label="PO Box" type="number" v-model="address.poBox" hide-details outlined></v-text-field> <!-- Optional -->
      </div>
      <div class="col-md-4">
        <v-text-field label="ZIP" type="number" v-model="address.zip" hide-details outlined></v-text-field>
      </div>
      <div class="col-md-4">
        <v-text-field label="City" v-model="address.city" hide-details outlined></v-text-field>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <v-text-field label="Country" v-model="address.country" hide-details outlined></v-text-field>
      </div>
    </div>
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