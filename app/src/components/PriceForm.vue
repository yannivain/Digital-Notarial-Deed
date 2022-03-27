<template>
  <div v-if="value">
    <v-container>
      <v-text-field label="Price" type="number" v-model="price.amount"></v-text-field>
      <v-select label="Currency" v-model="price.currency" :items="currencyItems"></v-select>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'PriceForm',
  props: {
    value: {type: Object, required: true}
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