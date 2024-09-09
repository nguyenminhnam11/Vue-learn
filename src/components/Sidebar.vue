<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/logo.svg" alt="vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-symbols-outlined"> double_arrow </span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <RouterLink class="button" to="/">
        <span class="material-symbols-outlined">Checklist</span>
        <span class="text">Todo</span>
      </RouterLink>
      <RouterLink class="button" to="/weather">
        <span class="material-symbols-outlined">Cloud</span>
        <span class="text">Weather</span>
      </RouterLink>
      <RouterLink class="button" to="/calculator">
        <span class="material-symbols-outlined">Calculate</span>
        <span class="text">Calculator</span>
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(false);
const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  background-color: var(--dark);
  color: var(--light);
  overflow: hidden;
  padding: 1rem;
  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 1rem;
      transition: 0.2s ease-out;

      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        margin-right: 1rem;
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-symbols-outlined,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    h3 {
      color: var(--grey);
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .buton {
      .material-symbols-outlined {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
