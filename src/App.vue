<template>
  <div id="app">
    <h1>TaschenRechner</h1>
    <div id="calcContainer">
      <Display :text="calcText"></Display>
      <ButtonPad @pressed="handleButton"></ButtonPad>
      <button v-on:click="clearAll" class="clear">clear</button>
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
    clearAll() {
      this.state = { ...clearState(this.state) };
      this.calcText = printText(this.state);
    },
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
  padding: 20px;
  max-width: 400px;
  background-color: darkred;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
h1 {
  margin: 30px 0;
}
.clear {
  margin-top: 20px;
  margin-right: 20px;
  height: 50px;
  width: 100px;
  align-self: flex-end;
  font-size: 25px;
  background-color: aquamarine;
  font-weight: bold;
  border-radius: 5px;
}
</style>
