<template>
  <v-stepper
      v-model="step"
      vertical
  >
    <!-- Seller -->
    <v-stepper-step
        :complete="step > 1"
        step="1"
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
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <!-- Buyer -->
    <v-stepper-step
        :complete="step > 2"
        step="2"
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
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
        :complete="step > 3"
        step="3"
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
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      Deed
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
      ></v-card>
      <v-btn
          color="primary"
          @click="step = 5"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="5">
      Other
    </v-stepper-step>
    <v-stepper-content step="5">
      <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
      ></v-card>
      <v-btn
          color="primary"
          @click="step = 1"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import {cloneDeep} from "lodash"
import {DEFAULT_LOT, DEFAULT_PERSON} from "@/util/const"
import PersonForm from "@/components/PersonForm"
import LotForm from "@/components/LotForm"


export default {
  name: 'DocumentCreationSteps',
  components: {LotForm, PersonForm},
  data: () => ({
    step: 1,
    document: {
      seller: cloneDeep(DEFAULT_PERSON),
      buyer: cloneDeep(DEFAULT_PERSON),
      lot: cloneDeep(DEFAULT_LOT)
    }
  }),
  watch: {
    document: {
      handler(newVal) {
        console.log(newVal)
      },
      deep: true
    }
  }
};
</script>

<style scoped>

</style>