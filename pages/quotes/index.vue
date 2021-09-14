<template>
  <div>
    <v-card
      v-for='quote in quotes'
      :key='quote.id'
      class='mx-auto mb-5'
      max-width='414'
    >
      <v-card-text>
        <div>{{ quote.author }}</div>
        <div class='text--primary'>
          {{ quote.body }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color='info'
        >
          Share Now
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    quotes() {
      return this.$store.getters.quotes
    }
  }
}
</script>

<style scoped>

</style>
