<template>
  <v-container v-if="value">
    <v-form>
      <h5 v-if="title">{{ title }}</h5>
      <v-text-field label="Name" v-model="identity.name"></v-text-field>
      <v-text-field label="Firstname" v-model="identity.firstname"></v-text-field>
      <v-text-field label="Birthday" type="date" v-model="identity.birthday"></v-text-field>
      <v-select label="sex" :items="sexItems" v-model="identity.sex"></v-select>
      <h5>Address</h5>
      <address-fields v-model="identity.address"></address-fields>
    </v-form>
  </v-container>
</template>

<script>
import AddressFields from "@/components/AddressFields"

export default {
  name: 'IdentityForm',
  components: {AddressFields},
  props: {
    value: {type: Object, required: true},
    title: {type: String, required: false}
  },
  data: () => ({
    sexItems: ['Male', 'Female'],
  }),
  computed: {
    identity: {
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