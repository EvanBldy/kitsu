<template>
  <div
    :class="{
      field: withMargin
    }"
  >
    <label class="label" v-if="label.length > 0">
      {{ label }}
    </label>
    <div class="production-combo">
      <div class="flexrow" @click="toggleProductionList">
        <div class="selected-production-line flexrow-item">
          <production-name
            :production="currentProduction"
            :no-link="true"
            :size="25"
            v-if="currentProduction"
          />
        </div>
        <chevron-down-icon class="down-icon flexrow-item" />
      </div>
      <div class="select-input" ref="select" v-if="showProductionList">
        <div
          class="production-line"
          v-for="production in productionList"
          @click="selectProduction(production)"
          :key="production.id"
        >
          <production-name
            :size="25"
            :no-link="true"
            :production="production"
          />
        </div>
      </div>
    </div>
    <combobox-mask
      :displayed="showProductionList"
      @click="toggleProductionList"
    />
  </div>
</template>

<script>
import { ChevronDownIcon } from 'lucide-vue'

import ComboboxMask from '@/components/widgets/ComboboxMask.vue'
import ProductionName from '@/components/widgets/ProductionName.vue'

export default {
  name: 'combobox-production',

  components: {
    ChevronDownIcon,
    ComboboxMask,
    ProductionName
  },

  data() {
    return {
      showProductionList: false
    }
  },

  props: {
    label: {
      default: '',
      type: String
    },
    withMargin: {
      default: true,
      type: Boolean
    },
    productionList: {
      required: true,
      type: Array
    },
    value: {
      default: '',
      type: String
    }
  },

  computed: {
    currentProduction() {
      return (
        this.productionList.find(({ id }) => id === this.value) ||
        this.productionList[0]
      )
    }
  },

  methods: {
    selectProduction(production) {
      this.$emit('input', production.id)
      this.showProductionList = false
    },

    toggleProductionList() {
      this.showProductionList = !this.showProductionList
    }
  }
}
</script>

<style lang="scss" scoped>
.dark {
  .select-input,
  .selected-production-line,
  .production-line,
  .production-combo {
    background: $dark-grey-light;
    border-color: $dark-grey;
  }

  .production-line:hover {
    background: $dark-purple;
  }
}

.production-combo {
  background: $white;
  min-width: 300px;
  width: 300px;
  border: 1px solid $light-grey-light;
  user-select: none;
  cursor: pointer;
  border-radius: 10px;
  margin: 0;
  padding: 0.15em;
  position: relative;

  &:hover {
    border: 1px solid $green;
  }
}

.selected-production-line {
  background: $white;
  padding: 0.4em;
  flex: 1;
}

.production-line {
  background: $white;
  cursor: pointer;
  padding: 0.4em;
  margin: 0;

  &:hover {
    background: $purple;
  }
}

.down-icon {
  width: 15px;
  min-width: 15px;
  margin-right: 0.4em;
  color: $green;
  cursor: pointer;
}

.select-input {
  background: $white;
  width: 300px;
  position: absolute;
  border: 1px solid $light-grey-light;
  z-index: 300;
  margin-left: -1px;
  max-height: 200px;
  overflow-y: auto;
}

.field .label {
  padding-top: 0;
  margin-bottom: 5px;
}
</style>
