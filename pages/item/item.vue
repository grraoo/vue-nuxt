<template>
  <div class="item">
    <nuxt-link :to="(`/item/${id}`)">
      <h1>{{name}}</h1>
    </nuxt-link>
    <p>: {{number}}</p>
    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>

  </div>
</template>

<script>
export default {
  props: {
    itemdata: {
      type: Object
    }
  },
  data() {
    return {
      name: this.itemdata.name,
      number: this.itemdata.number,
      id: this.itemdata.id
    };
  }
};
</script>

<style scoped lang="scss">
.item {
  padding: 2em;
  margin: 2em;
  border: 2px solid aqua;
  &:hover {
    box-shadow: 0 0 5px aqua;
  }
}
.blur {
  filter: blur(5px);
  transition-duration: 0.2s;
  &:hover {
    filter: none;
  }
}
</style>
