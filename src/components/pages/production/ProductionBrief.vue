<template>
  <div class="production-brief">
    <div v-if="!isEditing" class="box" @dblclick="openEditing">
      <div v-if="!currentProduction?.description">
        <p>{{ $t('productions.brief.empty') }}</p>
      </div>
      <div
        class="content"
        v-html="renderMarkdown(currentProduction.description)"
        v-else
      ></div>
    </div>
    <div v-else class="box has-text-right">
      <textarea-field
        class="editor"
        ref="textarea"
        input-class="textarea"
        @keyup.ctrl.enter="editBrief"
        v-model="brief"
      />
      <p v-if="errors.editBrief" class="error mt1 has-text-right">
        {{ $t('productions.brief.edit_error') }}
      </p>
      <p>
        <button-simple
          :is-primary="true"
          :is-loading="isLoading"
          :disabled="isLoading"
          :text="$t('main.save')"
          @click="editBrief"
        />
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { renderMarkdown } from '@/lib/render'

import ButtonSimple from '@/components/widgets/ButtonSimple.vue'
import TextareaField from '@/components/widgets/TextareaField.vue'

export default {
  name: 'production-brief',

  components: {
    ButtonSimple,
    TextareaField
  },

  data() {
    return {
      brief: '',
      isEditing: false,
      isLoading: false,
      errors: {
        editBrief: false
      }
    }
  },

  computed: {
    ...mapGetters(['currentProduction', 'isCurrentUserManager']),

    textarea() {
      return this.$refs.textarea
    }
  },

  mounted() {
    this.brief = this.currentProduction?.description
  },

  methods: {
    ...mapActions(['editProduction']),

    openEditing() {
      if (!this.isCurrentUserManager) {
        return
      }
      this.isEditing = true
      this.$nextTick(() => {
        // Needed because of the v-if
        this.textarea.focus()
      })
    },

    async editBrief() {
      this.isLoading = true
      this.errors.editBrief = false
      try {
        await this.editProduction({
          id: this.currentProduction.id,
          description: this.brief
        })
        this.isEditing = false
      } catch {
        this.errors.editBrief = true
      }
      this.isLoading = false
    },

    renderMarkdown
  }
}
</script>

<style lang="scss" scoped>
.dark {
  .content {
    color: $white;
  }
}

.production-brief {
  flex: 1;
}

.box {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: calc(100% - 20px);
  max-width: 800px;
  overflow: auto;
  margin-bottom: 0.5em;
}

.content {
  padding-bottom: 1em;
}

.editor {
  height: 100%;
}
</style>
