<template>
  <v-card class="ma-1" elevation="4">
    <v-card-title>
      Payment #{{ id + 1 }}
    </v-card-title>
    <v-card-text>
      <div class="row">
        <div class="col-md-8">
          <v-text-field label="Price" type="number" v-model="price.amount" hide-details outlined></v-text-field>
        </div>
        <div class="col-md-4">
          <v-select label="Currency" v-model="price.currency" :items="currencyItems" hide-details outlined></v-select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <v-textarea label="Price description" v-model="price.freeText" hide-details outlined></v-textarea>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'PriceForm',
  props: {
    value: {type: Object, required: true},
    id: {type: Number, required: true}
  },
  data: () => ({
    currencyItems: ["CHF", "EURO", "USD"]
  }),
  computed: {
    price: {
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