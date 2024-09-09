<script setup>
import { computed, ref } from "vue";

const display = ref("0");

const appendToDisplay = (value) => {
  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
};

const calculate = () => {
  try {
    display.value = eval(display.value).toString();
  } catch (error) {
    display.value = "Error";
  }
};

// Computed property for dynamic class binding
const displayClass = computed(() => {
  return display.value.length > 12 ? "small-text" : "";
});

const clearDisplay = () => {
  display.value = "0";
};
</script>

<template>
  <main class="calculator-app">
    <div class="calculator">
      <input v-model="display" :class="displayClass" readonly />

      <div class="buttons">
        <button @click="appendToDisplay('7')">7</button>
        <button @click="appendToDisplay('8')">8</button>
        <button @click="appendToDisplay('9')">9</button>
        <button @click="appendToDisplay('/')" style="background-color: var(--dark);">/</button>

        <button @click="appendToDisplay('4')">4</button>
        <button @click="appendToDisplay('5')">5</button>
        <button @click="appendToDisplay('6')">6</button>
        <button @click="appendToDisplay('*')" style="background-color: var(--dark);">*</button>

        <button @click="appendToDisplay('1')">1</button>
        <button @click="appendToDisplay('2')">2</button>
        <button @click="appendToDisplay('3')">3</button>
        <button @click="appendToDisplay('-')" style="background-color: var(--dark);">-</button>

        <button @click="appendToDisplay('0')">0</button>
        <button @click="appendToDisplay('.')">.</button>
        <button @click="calculate" style="background-color: var(--dark);">=</button>
        <button @click="appendToDisplay('+')" style="background-color: var(--dark);">+</button>
      </div>

      <button @click="clearDisplay" class="clear-button">C</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.calculator-app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1f;

  input {
    width: 100%;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 22px;
    text-align: right;
    outline: none;
  }
}

.calculator {
  width: 480px;
  padding: 26px;
  background: #05f17f94;
  box-shadow: 0 0px 70px rgba(6, 247, 138, 0.408);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
  border: 1px solid rgba(39, 128, 88, 0.338);
  border-radius: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 10px;

  button {
    background-color: var(--dark-alt);
    aspect-ratio: 1 / 0.8;
    font-size: 22px;
    color: var(--light);
    border-radius: 5px;
    transition: 0.1s;

    &:hover {
      color: var(--primary);
    }

    &:active {
      transform: scale(0.9);
    }
  }
}

button {
  width: 100%;
  padding: 20px 10px;
  font-size: 18px;
  background: var(--dark-alt);
  color: var(--light);
  border-radius: 5px;
  transition: 0.1s;

  &:hover {
    color: var(--primary);
  }

  &:active {
    transform: scale(0.9);
  }
}

.clear-button {
  width: 100%;
  margin-top: 10px;
}

.small-text {
  font-size: 14px;
}
</style>
