<template>
<nuxt-link :to="'/item/' + id">
  <div class="item" :class="{blur : bool}">
    <h1>{{name}}</h1>
    <p>: {{number}}</p>
  </div>
</nuxt-link>
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
        bool: Math.random() < 0.5,
        id: this.itemdata.id
      }
    }
  }
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
  filter:blur(5px);
  transition-duration: .2s;
  &:hover {
    filter: none;
  }
}
</style>
