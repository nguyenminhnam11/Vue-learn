<script setup>
import { ref } from 'vue';

const emits = defineEmits(['add-todo'])
const todoValue = ref('')


const handleAdd = () => {
    emits('add-todo', todoValue.value)
    todoValue.value = ''
}
</script>


<template>
  <h1>Todo app</h1>
  <div class="input-todo">
    <input type="text" v-model="todoValue" placeholder="Add your task" @keyup.enter="handleAdd" />
    <button @click="handleAdd">Add</button>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--dark);
  text-align: center;
  margin-bottom: 1rem;
}

.input-todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  input {
    flex: 1;
    border: none;
    outline: none;
    background-color: var(--light);
    padding: 14px 130px 14px 20px;
    border-radius: 40px;
    font-size: 1rem;
  }

  button {
    position: absolute;
    right: -1px;
    color: var(--light);
    background: var(--dark-alt);
    padding: 14px 42px;
    border-radius: 40px;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
        color: var(--primary);
    }

    &:active {
        transform: scale(0.95);
    }
  }
}
</style>
