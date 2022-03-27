<template>
  <v-container>
    <document-creation-steps></document-creation-steps>
  </v-container>
</template>

<script>

import DocumentCreationSteps from "@/components/DocumentCreationSteps"

export default {
  name: 'HomeView',
  components: {DocumentCreationSteps},
  data: () => ({
    step: 1
  })
};
</script>

<style scoped>

</style>