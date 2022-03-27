<template>
  <div>
    <h5>Company Details</h5>
    <v-container>
      <v-text-field label="Name" v-model="seller.name"></v-text-field>
      <v-text-field label="Seat" v-model="seller.seat"></v-text-field>
      <v-text-field label="UID" v-model="seller.uid"></v-text-field>
    </v-container>
    <identity-form v-model="seller.representative" title="Company Representative"></identity-form>
  </div>
</template>

<script>
import IdentityForm from "@/components/IdentityForm"

export default {
  name: 'LegalPersonForm',
  components: {IdentityForm},
  props: {
    value: {type: Object, required: true},
    title: {type: String, required: false}
  },
  data: () => ({}),
  computed: {
    seller: {
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