<template>
  <div>
    <v-select label="Person" :items="personItems" v-model="person.type_" item-value="value" item-text="text"></v-select>
    <identity-form v-if="person.type_ === PERSON_TYPES.NATURAL" v-model="person" title="Identity"></identity-form>
    <legal-person-form v-if="person.type_ ===  PERSON_TYPES.LEGAL" v-model="person"></legal-person-form>
  </div>
</template>

<script>
import IdentityForm from "@/components/IdentityForm"
import {cloneDeep} from "lodash"
import {DEFAULT_LEGAL, DEFAULT_NATURAL, PERSON_TYPES} from "@/util/const"
import LegalPersonForm from "@/components/LegalPersonForm"

export default {
  name: 'PersonForm',
  components: {LegalPersonForm, IdentityForm},
  props: {
    value: {type: Object, required: true},
    title: {type: String, required: false}
  },
  data: () => ({
    personItems: [
      {
        value: PERSON_TYPES.NATURAL,
        text: "Natural Person"
      }, {
        value: PERSON_TYPES.LEGAL,
        text: "Legal Person"
      },
    ],
    PERSON_TYPES
  }),
  watch: {
    "person.type_"(newVal) {
      if (newVal === PERSON_TYPES.NATURAL) {
        this.person = cloneDeep(DEFAULT_NATURAL)
      } else if (newVal === PERSON_TYPES.LEGAL) {
        this.person = cloneDeep(DEFAULT_LEGAL)
      }
    }
  },
  computed: {
    person: {
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
