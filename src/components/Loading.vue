<template>
  <div>
    <div class="loading">
      <div class="spinner-grow text-center" style="width: 5rem; height: 5rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;
}
</style>