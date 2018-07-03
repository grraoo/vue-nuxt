<template>
  <div class="item">
    <h1>{{name}}!</h1>
    <p><span>{{id}}:</span> {{number}}</p>
    <p v-if="bool"> blurred </p>
    <p v-else> sharp </p>
    <nuxt-link :to="'/'"> To list</nuxt-link>
    <!-- <a href="/"> To list back</a> -->
  </div>
</template>

<script>
  import MYDATA from '../data/data.json'
  export default {
    async asyncData({params}) {
      const item = MYDATA.filter(item => item.id == params.id)[0];
      item.bool = !Math.ceil(Math.random() - 0.5);
      return item;
    },
    head () {
    return {
      title: this.name,
      meta: [
        { hid: 'description', name: 'description', content: `${this.id}: ${this.name} - ${this.number}` }
      ]
    }
  }
  }
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
 h1 {
   color: violet;
   text-align: center;
   text-transform: uppercase;
 }
 a {
   align-self: flex-end;
   text-align: right;
   color: black;

   &:visited {
   color: black
   }
 }
 p {
   text-align: center;
 }
</style>
