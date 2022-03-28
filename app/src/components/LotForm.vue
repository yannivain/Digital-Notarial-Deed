<template>
  <div v-if="value">
    <h5>Lot</h5>
    <v-container>
      <div class="row">
        <div class="col-md-12">
          <v-text-field label="EGRID" v-model="lot.egrid" outlined hide-details></v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
      <v-text-field label="Name in Registry" v-model="lot.register.name" outlined hide-details></v-text-field>
        </div>
        <div class="col-md-6">
      <v-text-field label="Lot ID in Registry" v-model="lot.register.id" outlined hide-details></v-text-field>
        </div>
      </div>
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
