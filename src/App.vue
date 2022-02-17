<template>
  <div id="app">
    <h1>TaschenRechner</h1>
    <div id="calcContainer">
      <Display :text="calcText"></Display>
      <ButtonPad @pressed="handleButton"></ButtonPad>
    </div>
  </div>
</template>

<script>
import ButtonPad from "./components/ButtonPad.vue";
import Display from "./components/Display.vue";

export default {
  name: "App",
  components: {
    Display,
    ButtonPad,
  },
  data: function () {
    return {
      firstNum: null,
      secondNum: null,
      operator: null,
      calcText: null,
    };
  },
  methods: {
    handleButton(symbol) {
      console.log("symbol:", symbol);
      if(isNaN(symbol)){
        this.calcText = symbol;
      }
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#calcContainer {
  padding: 20px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: darkred;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
h1{
  margin: 30px 0;
}
</style>
