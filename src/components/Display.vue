<template>
  <div class="calcDisplay">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Display",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.calcDisplay {
  margin: 20px 0;
  padding: 10px;
  font-size: 26px;
  font-weight: bold;
  width: 300px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
}
</style>
