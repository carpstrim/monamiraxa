<template>
  <div class="card">
    <h2><slot name="heading" /></h2>
    <div><slot name="txt" /></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  border-radius: $border-radius;
  border: 1px solid #e4e4e4;
}
</style>
