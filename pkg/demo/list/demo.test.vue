<script>
import { mapGetters } from 'vuex';
import ResourceTable from '@shell/components/ResourceTable';
import { ROWS_PER_PAGE } from '@shell/store/prefs';
import ResourceFetch from '@shell/mixins/resource-fetch';

export default {
  name:       'DemoList',
  components: { ResourceTable },
  mixins:     [ResourceFetch],
  props:      {
    schema: {
      type:     Object,
      required: true,
    },
    resource: {
      type:     String,
      required: true,
    },
  },
  fetch() {
    console.log(this.schema, 'this.schema--------');
  },

  data() {
    return { existing: null };
  },

  computed: {
    ...mapGetters(['currentCluster']),
    headers() {
      return [
        {
          name:      'name',
          labelKey:  'tableHeaders.name',
          value:     'nameDisplay',
          sort:      'nameDisplay',
          width:     120,
        },
        {
          name:      'project',
          labelKey:  'tableHeaders.project',
          value:     'project',
          width:     100,
        },
        {
          name:     'Field',
          labelKey: 'demo.field',
          value:    'spec.others',
          width:    120
        },
      ];
    },
  },
  methods: {
    getPerPage() {
      // perPage can not change while the list is displayed
      let out = this.rowsPerPage || 0;

      if ( out <= 0 ) {
        out = parseInt(this.$store.getters['prefs/get'](ROWS_PER_PAGE), 10) || 0;
      }

      // This should ideally never happen, but the preference value could be invalid, so return something...
      if ( out <= 0 ) {
        out = 10;
      }

      return out;
    },
  }
};
</script>
<template>
  <div>
    <ResourceTable
      v-bind="$attrs"
      :headers="headers"
      :rows="rows"
      :groupable="false"
      :schema="schema"
      key-field="_key"
      :loading="loading"
      v-on="$listeners"
    />
  </div>
</template>
