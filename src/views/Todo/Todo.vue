<script setup>
import TodoForm from "@/views/Todo/components/TodoForm.vue";
import TodoList from "@/views/Todo/components/TodoList.vue";
import { ref } from "vue";

const todoList = ref([]);

const addNewTodo = (newTask) => {
  if (newTask.trim()) {
    todoList.value.unshift({ name: newTask, completed: false });
  }
};

const updateTodoList = (updatedTasks) => {
  todoList.value = updatedTasks;
};
</script>

<template>
  <main class="todo-app">
    <div class="container">
      <div>
        <TodoForm @add-todo="addNewTodo" />
      </div>
      <TodoList :tasks="todoList" @updateTask="updateTodoList" />
    </div>
  </main>
</template>

<style scoped>
.todo-app {
  background: #1b1b1f;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 450px;
  max-height: 550px;
  background: #05f17f94;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 0px 70px rgba(6, 247, 138, 0.408);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
  border: 1px solid rgba(39, 128, 88, 0.338);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
