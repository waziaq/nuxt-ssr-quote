<template>
  <div>
    <div class='my-5 mb-8'>
      <h2 class='text-center mx-3'>Spoil you Loved one with a random quote!</h2>
    </div>
    <div>
      <v-img
        class='rounded-lg'
        contain
        lazy-src='https://i.guim.co.uk/img/media/bdf23d7b1bbb200cf72ae0c22f051bf926445b20/1_0_5075_3046/master/5075.jpg?width=1300&quality=85&auto=format&fit=max&s=4dc466a613c618911a2641c32dcedbcd'
        max-height='300'
        max-width='500'
        src='https://i.guim.co.uk/img/media/bdf23d7b1bbb200cf72ae0c22f051bf926445b20/1_0_5075_3046/master/5075.jpg?width=1300&quality=85&auto=format&fit=max&s=4dc466a613c618911a2641c32dcedbcd'
      ></v-img>
    </div>
    <div class='mx-auto text-center'>
      <v-btn class='mt-n5' max-width='100%' width='50vw' color='accent' dark to='/quotes'>
        Get Random Quote
      </v-btn>
    </div>
  </div>
</template>
