<template>
  <div class="item" :key="id">
    <h1>{{name}}!</h1>
    <p><span>{{id}} / {{total}}:</span> {{number}}</p>
    <button @click="$store.commit('increment')">{{ $store.state.counter }}++</button>
    <button @click="$store.commit('decrement')">{{ $store.state.counter }}--</button>
    <nuxt-link :to="(`/item/${prev()}`)"> To prev  item</nuxt-link>
    <nuxt-link :to="(`/item/${next()}`)"> To next  item</nuxt-link>
    <nuxt-link :to="'/'"> To list</nuxt-link>
  </div>
</template>

<script>
import Item from "./item.vue";
import devUtils from '../../utils/devUtils'

export default {
  data() {
    const id = this.$route.params.id;
    const item = this.$store.state.items.filter(item => item.id == id)[0];
    item.total = this.$store.state.total;
    // devUtils.console(this);
    devUtils.console(process.env.NODE_ENV);
    devUtils.console({browser: process.browser});
    // devUtils.console(process.uptime());

    return item;
  },
  components: {
    Item
  },
  methods: {
    next() {
      const newId = (this.id + 1) % this.total;
      return newId ? newId : this.total;
    },
    prev() {
      const newId = (this.id + this.total - 1) % this.total;
      return newId ? newId : this.total;
    }
  },
  created() {
    console.log(`created`);
  },
  mounted() {
    console.log(`mounted`);
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.id}: ${this.name} - ${this.number}`
        }
      ]
    };
  }
};
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
    color: black;
  }
}
p {
  text-align: center;
}
</style>
