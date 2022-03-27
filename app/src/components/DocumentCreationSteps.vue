<template>
  <v-stepper
      v-model="step"
      vertical
      non-linear
  >
    <!-- Seller -->
    <v-stepper-step
        :complete="step > 1"
        step="1"
        editable
    >
      Seller
      <!--<small>Summarize if needed</small>-->
    </v-stepper-step>
    <v-stepper-content step="1">
      <form>
        <person-form v-model="document.seller"></person-form>
      </form>
      <v-btn
          color="primary"
          @click="step = 2"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <!-- Buyer -->
    <v-stepper-step
        :complete="step > 2"
        step="2"
        editable
    >
      Buyer
    </v-stepper-step>
    <v-stepper-content step="2">
      <form>
        <person-form v-model="document.buyer"></person-form>
      </form>
      <v-btn
          color="primary"
          @click="step = 3"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <!-- Lot -->
    <v-stepper-step
        :complete="step > 3"
        step="3"
        editable
    >
      Lot
    </v-stepper-step>
    <v-stepper-content step="3">
      <form>
        <lot-form v-model="document.lot"></lot-form>
      </form>
      <v-btn
          color="primary"
          @click="step = 4"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <!-- Prices -->
    <v-stepper-step step="4" :complete="step > 4" editable>
      Prices
    </v-stepper-step>
    <v-stepper-content step="4">
      <form>
        <h5>Prices</h5>
        <div v-for="(_, key) of document.prices" :key="key">
          <price-form v-model="document.prices[key]"></price-form>
        </div>
        <v-btn color="success" @click="addPrice" class="mb-2">Add a Price</v-btn>
      </form>
      <v-btn
          color="primary"
          @click="step = 5"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="5" :complete="step > 5" editable>
      Notary
    </v-stepper-step>
    <v-stepper-content step="5">
      <form>
        <notary-form v-model="document.notary"></notary-form>
      </form>
      <v-btn
          color="primary"
          @click="step = 6"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <!-- Other -->
    <v-stepper-step step="6" :complete="step > 6" editable>
      Other
    </v-stepper-step>
    <v-stepper-content step="6">
      <form>
        <v-text-field label="Contract date" type="date" v-model="document.dateContract"></v-text-field>
        <v-text-field label="Change ownership date" type="date" v-model="document.dateChangeOwnership"></v-text-field>
        <v-textarea label="SpecialConditions" v-model="document.specialConditions"></v-textarea>
      </form>
      <v-btn
          color="primary"
          @click="step = 6"
      >
        Continue
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import {cloneDeep} from "lodash"
import {DEFAULT_LOT, DEFAULT_NOTARY, DEFAULT_PERSON, DEFAULT_PRICE} from "@/util/const"
import PersonForm from "@/components/PersonForm"
import LotForm from "@/components/LotForm"
import PriceForm from "@/components/PriceForm"
import NotaryForm from "@/components/NotaryForm"


export default {
  name: 'DocumentCreationSteps',
  components: {NotaryForm, PriceForm, LotForm, PersonForm},
  data: () => ({
    step: 1,
    document: {
      seller: cloneDeep(DEFAULT_PERSON),
      buyer: cloneDeep(DEFAULT_PERSON),
      lot: cloneDeep(DEFAULT_LOT),
      prices: [cloneDeep(DEFAULT_PRICE)],
      notary: cloneDeep(DEFAULT_NOTARY),
      dateContract: "",
      dateChangeOwnership: "",
      specialConditions: ""
    }
  }),
  watch: {
    document: {
      handler(newVal) {
        console.log(newVal)
      },
      deep: true
    }
  },
  methods:{
    addPrice(){
      this.document.prices.push(cloneDeep(DEFAULT_PRICE))
    }
  }
};
</script>

<style scoped>

</style>