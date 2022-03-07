<template>
  <div class="right-inner-addon input-container">
    <i
      class="material-icons"
      style="font-size: 25px; color: #757575; padding-right: 15px"
    >
      search
    </i>
    <input
      type="text"
      class="form-control"
      placeholder="e.g. Hilton, Ibis ..."
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-container {
  padding-bottom: 1em;
}

.right-inner-addon {
  position: relative;
}
.right-inner-addon input {
  padding-right: 35px !important;
}
.right-inner-addon i {
  position: absolute;
  right: 0px;
  padding: 12px 12px;
  pointer-events: none;
}

input {
  width: 100%;
  padding: 1em !important;
  margin: 0em !important;
  box-sizing: border-box;
  border-radius: 3px !important;
  border: 1px solid #dddddd !important;
}
</style>
