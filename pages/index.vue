<template>
  <section class="container">
    <div v-for="item in items" :key="item.id">
      <item :itemdata="item" />
    </div>
    <!-- <button @click="$store.commit('increment')">add</button>
{{$store.state.counter}} -->
  </section>
</template>

<script>
import Item from './item/item';
import idVue from './item/_id.vue';
import devUtils from '../utils/devUtils';

export default {
  data() {
    return {
      name: `Ssr-Vue`,
      items: this.$store.state.items,
    }
  },
  methods: {
    reverse() {
      this.name = this.name.split(``).reverse().join(``);
    }
  },
  mounted() {
    devUtils.console(process.env.NODE_ENV);
  },
  components: {
    Item,
    idVue
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
