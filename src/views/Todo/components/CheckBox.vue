<script setup>

const props = defineProps({
  checked: Boolean,
});

const emit = defineEmits(['update:checked']);

const handleChange = (event) => {
  emit('update:checked', event.target.checked);
};
</script>

<template>
  <div class="checkbox-wrapper-12">
  <div class="cbx">
    <input type="checkbox" id="cbx-12" :checked="checked" @change="handleChange" >
    <label for="cbx-12"></label>
    <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
      <path d="M2 8.36364L6.23077 12L13 2"></path>
    </svg>
  </div>
  
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="goo-12">
        <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
        <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
        <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
      </filter>
    </defs>
  </svg>
</div>
</template>

<style scoped>
.checkbox-wrapper-12 {
  position: relative;
  
}

.checkbox-wrapper-12 > svg {
  position: absolute;
  top: -130%;
  left: -170%;
  width: 110px;
  pointer-events: none;
}

.checkbox-wrapper-12 * {
  box-sizing: border-box;
}

.checkbox-wrapper-12 input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  margin: 0;
}

.checkbox-wrapper-12 input[type="checkbox"]:focus {
  outline: 0;
}

.checkbox-wrapper-12 .cbx {
  width: 24px;
  height: 24px;
  top: calc(100px - 12px);
  left: calc(100px - 12px);
}

.checkbox-wrapper-12 .cbx input {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border: 2px solid #bfbfc0;
  border-radius: 50%;
}

.checkbox-wrapper-12 .cbx label {
  width: 24px;
  height: 24px;
  background: none;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: trasnlate3d(0, 0, 0);
  pointer-events: none;
}

.checkbox-wrapper-12 .cbx svg {
  position: absolute;
  top: 5px;
  left: 4px;
  z-index: 1;
  pointer-events: none;
}

.checkbox-wrapper-12 .cbx svg path {
  stroke: #fff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 19;
  stroke-dashoffset: 19;
  transition: stroke-dashoffset 0.3s ease;
  transition-delay: 0.2s;
}

.checkbox-wrapper-12 .cbx input:checked + label {
  animation: splash-12 0.6s ease forwards;
}

.checkbox-wrapper-12 .cbx input:checked + label + svg path {
  stroke-dashoffset: 0;
}

@-moz-keyframes splash-12 {
  40% {
    background: #3a87df;
    box-shadow: 0 -18px 0 -8px #3a87df, 16px -8px 0 -8px #3a87df, 16px 8px 0 -8px #3a87df, 0 18px 0 -8px #3a87df, -16px 8px 0 -8px #3a87df, -16px -8px 0 -8px #3a87df;
  }

  100% {
    background: #3a87df;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}

@-webkit-keyframes splash-12 {
  40% {
    background: #3a87df;
    box-shadow: 0 -18px 0 -8px #3a87df, 16px -8px 0 -8px #3a87df, 16px 8px 0 -8px #3a87df, 0 18px 0 -8px #3a87df, -16px 8px 0 -8px #3a87df, -16px -8px 0 -8px #3a87df;
  }

  100% {
    background: #3a87df;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}

@-o-keyframes splash-12 {
  40% {
    background: #3a87df;
    box-shadow: 0 -18px 0 -8px #3a87df, 16px -8px 0 -8px #3a87df, 16px 8px 0 -8px #3a87df, 0 18px 0 -8px #3a87df, -16px 8px 0 -8px #3a87df, -16px -8px 0 -8px #3a87df;
  }

  100% {
    background: #3a87df;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}

@keyframes splash-12 {
  40% {
    background: #3a87df;
    box-shadow: 0 -18px 0 -8px #3a87df, 16px -8px 0 -8px #3a87df, 16px 8px 0 -8px #3a87df, 0 18px 0 -8px #3a87df, -16px 8px 0 -8px #3a87df, -16px -8px 0 -8px #3a87df;
  }

  100% {
    background: #3a87df;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}
</style>