<template>
  <div class="data-list">
    <table class="details table" v-if="!isLoading">
      <thead>
        <tr>
          <th>{{ $t('quota.details_name') }}</th>
          <th>
            {{
              countMode === 'seconds'
                ? $t('quota.details_seconds')
                : $t('quota.details_frames')
            }}
          </th>
          <th>{{ $t('quota.weight') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="`shot-quota-${shot.id}`" v-for="shot in shots">
          <td>{{ shot.full_name }}</td>
          <td>{{ getQuota(shot) }}</td>
          <td>{{ shot.weight }}</td>
        </tr>
      </tbody>
    </table>

    <table-info :is-loading="isLoading" :is-error="isLoadingError" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { frameToSeconds } from '@/lib/video'

import TableInfo from '@/components/widgets/TableInfo.vue'

export default {
  name: 'quota-shot-list',

  components: {
    TableInfo
  },

  props: {
    shots: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isLoadingError: {
      type: Boolean,
      default: false
    },
    countMode: {
      type: String,
      default: 'frames'
    }
  },

  computed: {
    ...mapGetters(['currentProduction'])
  },

  methods: {
    getQuota(shot) {
      if (this.countMode === 'seconds') {
        return frameToSeconds(shot.nb_frames, this.currentProduction, shot)
      } else {
        return shot.nb_frames
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dark {
  header tr:hover {
    background: transparent;
  }

  .table {
    thead,
    tbody tr:nth-child(odd) {
      color: $white-grey;
      background: #36393f;
    }

    tbody tr:nth-child(even) {
      color: $white-grey;
      background: #46494f;
    }

    thead th,
    thead:hover {
      color: $white-grey;
      background: #36393f;
      border-color: #666666;
    }

    tbody td {
      border-color: #25282e;
    }

    tbody tr:hover {
      color: $white-grey;
      background: #5e6169;
    }
  }
}

tbody {
  tr:nth-child(even) {
    background: #f6f6f6;
  }

  tr:hover {
    background: $light-green-lightest;
  }
}

.name {
  width: 300px;
}
</style>
