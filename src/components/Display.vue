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
  text-align: right;
  color: white;
  margin-bottom: 10px;
  padding: 20px;
  font-size: 24px;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: #415a77;
  border-radius: 5px;
  overflow: hidden;
  white-space: pre-wrap;
}
</style>
