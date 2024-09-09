<script setup>
import CheckBox from "@/views/Todo/components/CheckBox.vue";
import IconDelete from "@/views/Todo/components/IconDelete.vue";
import { ref } from "vue";

const props = defineProps({
  tasks: Array,
});

const emit = defineEmits(["updateTask"]);

const itemTodo = ref(false);
const currentTodo = ref(null);
const editedName = ref("");

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

const showInfoTodo = (infoTodo) => {
  currentTodo.value = infoTodo;
  editedName.value = infoTodo.name;
  itemTodo.value = true;
};

const closeModal = () => {
  itemTodo.value = false;
};

const saveName = () => {
  if (currentTodo.value) {
    currentTodo.value.name = editedName.value;
    itemTodo.value = false;
  }
};
</script>

<template>
  <div class="todo-list">
    <ul v-if="tasks.length > 0">
      <li v-for="(task, index) in props.tasks" :key="index">
        <div class="todo-text">
          <CheckBox
            :checked="task.completed"
            @update:checked="(newStatus) => updateTaskStatus(index, newStatus)"
          />
          <p :class="task.completed ? 'todoCompleted' : 'todoInComplete'">
            {{
              task.name.length > 20
                ? task.name.substring(0, 20) + "..."
                : task.name
            }}
          </p>
        </div>
        <div class="actions-btn">
          <IconDelete :indexTodo="index" @deleteTodo="handleRemove" />
          <span class="material-symbols-outlined" @click="showInfoTodo(task)">
            info
          </span>
        </div>
      </li>
    </ul>

    <div class="list-empty" v-else>
      <span class="material-symbols-outlined"> download_done </span>
      <p>This list doesn't have any task</p>
    </div>
  </div>

  <transition name="modal">
    <div v-if="itemTodo" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="header-modal">
          <h3>Detail todo</h3>
          <span class="material-symbols-outlined" @click="closeModal">
            close
          </span>
        </div>
        <div class="info-modal">
          <div class="edit-todo">
            <label for="todo-name"
              >Edit
              <span class="material-symbols-outlined" style="font-size: 1rem;">
                border_color
              </span></label
            ><br />
            <input id="todo-name" v-model="editedName" :disabled="currentTodo.completed ? true : false" />
            <button @click="saveName" :disabled="currentTodo.completed ? true : false">Save Changes</button>
          </div>
          <p>
            Status:
            <span :class="currentTodo?.completed ? 'done' : 'pending'">
              {{ currentTodo?.completed ? "Completed" : "Pending" }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.todo-list {
  margin-top: 20px;
  height: 400px;
  overflow-y: auto;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  .list-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #ffffff98;
    span {
      font-size: 40px;
    }
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

.modal-overlay {
  position: fixed;
  bottom: -50px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  z-index: 99;
}

.modal-content {
  background: var(--dark-alt);
  width: 100%;
  height: 80%;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .header-modal {
    display: flex;
    justify-content: space-between;
    color: var(--light);

    span {
      cursor: pointer;
    }
  }

  .info-modal {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--light);

    .edit-todo {
      display: flex;
      flex-direction: column;

      input {
        padding: 10px;
        font-size: 1rem;
        background-color: var(--dark);
        border: none;
        outline: none;
        color: var(--light);
        border-radius: 10px;
      }

      button {
        background: var(--primary);
        border-radius: 16px;
        padding: 8px;
        margin: 0 auto;
        margin-top: 20px;
        width: 60%;
        font-size: 1rem;
        font-weight: 500;
        color: var(--dark-alt);
        transition: 0.2s;

        &:hover {
          transform: scale(1.03)
        }

        &:disabled {
          opacity: 0.5;
        }
      }
    }
    p {
      font-size: 1rem;
      text-align: right;

      .done {
        color: var(--primary);
        font-weight: 500;
      }

      .pending {
        color: yellow;
        font-weight: 500;
      }
    }
  }
}

.modal-enter-active {
  animation: showModal 0.3s forwards;
}

/* Modal close animation */
.modal-leave-active {
  animation: closeModal 0.3s forwards;
}

@keyframes showModal {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes closeModal {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-50%);
  }
}
</style>
