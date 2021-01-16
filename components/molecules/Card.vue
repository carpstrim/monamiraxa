<template>
  <div class="card" :style="`background-color:${color}`">
    <h2>
      <slot name="heading" />
    </h2>
    <div>
      <slot name="txt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  //border-radius: $border-radius;
}
</style>
