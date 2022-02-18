<template>
  <div id="app">
    <img src="./assets/operations.png" alt="" width="140px">
    <div id="calcContainer">
      <Display :text="calcText"></Display>
      <ButtonPad @pressed="handleButton" @clear="clearAll"></ButtonPad>
    </div>
  </div>
</template>

<script>
import ButtonPad from "./components/ButtonPad.vue";
import Display from "./components/Display.vue";
import { printText, doOperations, clearState } from "./helpers/calculate.js";

export default {
  name: "App",
  components: {
    Display,
    ButtonPad,
  },
  data: function () {
    return {
      state: {
        firstNum: '0',
        secondNum: null,
        operator: null,
      },
      calcText: printText(this.state),
    };
  },
  methods: {
    // clears the state and screen
    clearAll() {
      this.state = { ...clearState(this.state) };
      this.calcText = printText(this.state);
    },
    // triggers on button press
    handleButton(symb) {
      this.state = { ...doOperations(this.state, symb) };
      this.calcText = printText(this.state);
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
}
#app,
#calcContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
#calcContainer {
  margin-top: 20px;
  padding: 10px;
  width: 280px;
  background-color: #0d1b2a;
  border-radius: 10px;
  box-shadow: black 0px 5px 15px;
}
h1 {
  margin-bottom: 30px;
}
button{
  cursor: pointer;
}
</style>
