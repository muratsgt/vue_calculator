<template>
  <div id="buttonPad">
    <button v-on:click="buttonPressed(7)">7</button>
    <button v-on:click="buttonPressed(8)">8</button>
    <button v-on:click="buttonPressed(9)">9</button>
    <button v-on:click="buttonPressed('+')">+</button>
    <button v-on:click="buttonPressed(4)">4</button>
    <button v-on:click="buttonPressed(5)">5</button>
    <button v-on:click="buttonPressed(6)">6</button>
    <button v-on:click="buttonPressed('-')">-</button>
    <button v-on:click="buttonPressed(1)">1</button>
    <button v-on:click="buttonPressed(2)">2</button>
    <button v-on:click="buttonPressed(3)">3</button>
    <button v-on:click="buttonPressed('*')">*</button>
    <button v-on:click="buttonPressed('.')">,</button>
    <button v-on:click="buttonPressed(0)">0</button>
    <button v-on:click="buttonPressed('=')">=</button>
    <button v-on:click="buttonPressed('/')">/</button>
  </div>
</template>

<script>
export default {
  name: "ButtonPad",
  methods: {
    buttonPressed(symb) {
      this.$emit("pressed", symb);
    },
  },
};
</script>

<style scoped>
#buttonPad {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px;
}
button {
  font-size: 25px;
  font-weight: bold;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
button:active{
  background-color: #bbb;
  transform: scale(0.9);
}
</style>
