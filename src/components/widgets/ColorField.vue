<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control colors">
      <div
        :ref="'color-' + index"
        :key="'color-' + index"
        :class="{
          color: true,
          selected: value === color
        }"
        :style="{ 'border-color': color + hexaOpacity }"
        @click="colorChanged(color)"
        v-for="(color, index) in colors"
      >
        <span :style="{ background: color + hexaOpacity }"> </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'color-field',

  props: {
    label: {
      default: '',
      type: String
    },
    hexaOpacity: {
      default: 'FF',
      type: String
    },
    value: {
      default: '#999999',
      type: String
    },
    colors: {
      default: () => [
        '#CCCCCC',
        '#999999',
        '#78909C',
        '#009688',
        '#33B378',
        '#7CB342',
        '#43A047',
        '#8D6E63',
        '#AFB42B',
        '#9CCC65',
        '#DCE775',
        '#FFF176',
        '#FFEB3B',
        '#F9A825',
        '#F57C00',
        '#ff5252',
        '#F06292',
        '#AB47BC',
        '#5C6BC0',
        '#1976D2',
        '#039BE5',
        '#42A5F5',
        '#64B5F6',
        '#26C6DA'
      ]
    }
  },

  methods: {
    colorChanged(color, index) {
      this.$emit('input', color)
    }
  }
}
</script>

<style lang="scss" scoped>
.colors {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 18px;
}

.color {
  display: inline-block;
  cursor: pointer;
  padding: 3px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: 0.3s ease-out all;

  &:hover {
    transform: scale(1.2);
  }
}

.color span {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.selected {
  border: 5px solid $light-green;
  padding: 4px;
}
</style>
