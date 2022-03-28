<template>
  <v-card class="ma-1" elevation="4">
    <v-card-title>Special condition #{{ id + 1 }}</v-card-title>
    <v-card-text>
      <div class="row">
        <div class="col">
          <v-text-field label="Title" v-model="condition.titleCondition" hide-details outlined></v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <v-textarea label="Condition" v-model="condition.textCondition" hide-details outlined></v-textarea>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'SpecialConditionForm',
  components: {},
  props: {
    value: {type: Object, required: true},
    id: {type: Number, required: true}
  },
  data: () => ({}),
  computed: {
    condition: {
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