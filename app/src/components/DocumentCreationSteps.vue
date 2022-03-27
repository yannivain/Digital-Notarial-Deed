<template>
  <v-stepper
      v-model="step"
      vertical
  >
    <v-stepper-step
        :complete="step > 1"
        step="1"
    >
      Notary
<!--      <small>Summarize if needed</small>-->
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
      ></v-card>
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

    <v-stepper-step step="4">
      Other
    </v-stepper-step>
    <v-stepper-content step="4">
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
export default {
  name: 'DocumentCreationSteps',
  components: {},
  data: () => ({
    step: 1
  })
};
</script>

<style scoped>

</style>