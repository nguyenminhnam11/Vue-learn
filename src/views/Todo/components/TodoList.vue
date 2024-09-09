<script setup>
import CheckBox from "@/views/Todo/components/CheckBox.vue";
import IconDelete from "@/views/Todo/components/IconDelete.vue";

const props = defineProps({
  tasks: Array,
});

const emit = defineEmits(["updateTask"]);

const updateTaskStatus = (index, newStatus) => {
  const updatedTasks = [...props.tasks];
  updatedTasks[index].completed = newStatus;
  emit("updateTask", updatedTasks);
};

const handleRemove = (index) => {
  if (confirm(`Are you sure remove ${props.tasks[index].name} ?`)) {
    const updatedTasks = [...props.tasks];
    updatedTasks.splice(index, 1);
    emit("updateTask", updatedTasks);
  }
};

</script>

<template>
  <div class="todo-list">
    <ul>
      <li v-for="(task, index) in props.tasks" :key="index">
        <div class="todo-text">
          <CheckBox
            :checked="task.completed"
            @update:checked="(newStatus) => updateTaskStatus(index, newStatus)"
          />
          <p :class="task.completed ? 'todoCompleted' : 'todoInComplete'">
            {{ task.name.length > 20 ? task.name.substring(0, 20) + '...' : task.name }}
          </p>
        </div>
        <div class="actions-btn">
          <IconDelete :indexTodo="index" @deleteTodo="handleRemove" />
          <span class="material-symbols-outlined"> info </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.todo-list {
  margin-top: 20px;
  height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid var(--dark-alt);
  padding: 10px 0;
  margin-bottom: 12px;

  .todo-text {
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: hidden;

    .todoInComplete {
      color: var(--light);
    }

    .todoCompleted {
      opacity: 0.6;
      color: var(--light);
      text-decoration: line-through;
    }
  }

  .actions-btn {
    display: flex;
    gap: 10px;
    align-items: center;

    span {
      color: var(--light);
      cursor: pointer;
    }
  }
}
</style>
