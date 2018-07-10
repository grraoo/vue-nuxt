<template>
  <div class="item" :key="id">
    <h1>{{name}}!</h1>
    <p><span>{{id}}:</span> {{number}}</p>
    <p v-if="bool"> blurred </p>
    <p v-else> sharp </p>
    <nuxt-link :to="(`/item/${id-1}`)"> To prev  item</nuxt-link>
    <nuxt-link :to="(`/item/${id+1}`)"> To next  item</nuxt-link>
    <nuxt-link :to="'/'"> To list</nuxt-link>
  </div>
</template>

<script>
  import MYDATA from '../data/data.json'
  export default {
    data() {
      const id = this.$route.params.id;
      const item = MYDATA.filter(item => item.id == id)[0];
      item.bool = Math.random() < 0.5;
      return item;
    },
    created() {
      console.log(`created`);
    },
    mounted() {
      console.log(`mounted`);
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
   color: purple;
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
