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
    <button id="zeroB" v-on:click="buttonPressed(0)">0</button>
    <button v-on:click="buttonPressed('.')">,</button>
    <button v-on:click="buttonPressed('/')">/</button>
    <button id="clearB" v-on:click="clearButton()">clear</button>
    <button id="equalB" v-on:click="buttonPressed('=')">=</button>
  </div>
</template>

<script>
export default {
  name: "ButtonPad",
  methods: {
    buttonPressed(symb) {
      this.$emit("pressed", symb);
    },
    clearButton() {
      this.$emit("clear");
    },
  },
};
</script>

<style scoped>
#buttonPad {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 6px;
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
  background-color: #222f49;
  color: white;
}
button:hover {
  background-color: #415a77;
}
button:active {
  background-color: #bbb;
  transform: scale(0.9);
}
#zeroB {
  grid-column: 1 / 3;
  width: 100%;
}
#equalB {
  grid-column: 3 / 5;
  width: 100%;
  background-color: #006d77;
}
#equalB:hover{
  background-color: #0094a1;
}
#clearB {
  grid-column: 1 / 3;
  width: 100%;
  background-color: #ac5901;
}
#clearB:hover{
  background-color: #df8106;
}
</style>
