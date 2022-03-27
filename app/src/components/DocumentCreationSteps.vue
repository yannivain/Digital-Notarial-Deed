<template>
  <v-stepper
      v-model="step"
      vertical
  >
    <v-stepper-step
        :complete="step > 1"
        step="1"
    >
      Seller
      <!--      <small>Summarize if needed</small>-->
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
          class="mb-12"
      >
        <form>
          <identity-form v-model="document.seller.identity"></identity-form>
        </form>
      </v-card>
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

    <v-stepper-step
        :complete="step > 2"
        step="2"
    >
      Sellers
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
      ></v-card>
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
      Buyers
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
      ></v-card>
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
import IdentityForm from "@/components/IdentityForm"
import {cloneDeep} from "lodash"


const DEFAULT_ADDRESS = {
  streetName: "",
  streetNr: "",
  poBox: "",
  zip: "",
  city: "",
  country: "",
}
const DEFAULT_IDENTITY = {
  name: "",
  firstname: "",
  birthday: "",
  sex: "",
  placeResidency: cloneDeep(DEFAULT_ADDRESS)
}

export default {
  name: 'DocumentCreationSteps',
  components: {IdentityForm},
  data: () => ({
    step: 1,
    document: {
      seller: {
        identity: cloneDeep(DEFAULT_IDENTITY)
      }
    }
  }),
  watch:{
    document: {
      handler(newVal){
        console.log(newVal)
      },
      deep: true
    }
  }
};
</script>

<style scoped>

</style>