<template>
  <div>
   
    <v-main>
      <Card />
    </v-main>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'App',

  components: {
    Card,
  },

  data: () => ({
    //
  }),
};
</script>
