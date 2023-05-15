<script>
import LabeledInput from '@components/Form/LabeledInput/LabeledInput.vue';
import Tabbed from '@shell/components/Tabbed';
import Tab from '@shell/components/Tabbed/Tab';
import FormValidation from '@shell/mixins/form-validation';
import CreateEditView from '@shell/mixins/create-edit-view';
import CruResource from '@shell/components/CruResource.vue';

export default {
  name:       'MacvlanResourceCreate',
  mixins:     [CreateEditView, FormValidation],
  components: {
    LabeledInput,
    Tabbed,
    Tab,
    CruResource,
  },
  data() {
    return {
      config:    { metadata: { name: '' }, spec: { master: '' } },
      tabErrors: { general: false },
      errors:    [],
    };
  },

  computed: {},

  methods: {
    // async save(btnCb) {
    //   const errors = [];
    // },

    cancel() {
      const { resource } = this.$route.params;

      this.$router.push({
        name:   'c-cluster-product-resource',
        params: { resource }
      });
    },
    onTabChanged() {
    }
  }
};
</script>

<template>
  <CruResource
    :done-route="doneRoute"
    :validation-passed="fvFormIsValid"
    :resource="config"
    :mode="mode"
    :errors="errors"
    @finish="save"
    @error="e=>errors = e"
    @cancel="cancel"
  >
    <div>
      <div class="row mb-20">
        <div class="col span-3">
          <LabeledInput
            v-model="config.metadata.name"
            required
            label-key="generic.name"
            placeholder-key="nameNsDescription.name.placeholder"
            :mode="mode"
            :disabled="isEdit"
          />
        </div>
      </div>
      <Tabbed
        :side-tabs="true"
        default-tab="general"
        @changed="onTabChanged"
      >
        <Tab
          name="general"
          :label="t('demo.tabs.general')"
          :weight="99"
          :error="tabErrors.general"
        >
          <div class="row mb-20">
            <div class="col span-6">
              <LabeledInput
                v-model="config.spec.master"
                required
                label-key="demo.master.label"
                placeholder-key="demo.master.placeholder"
                :mode="mode"
                :disabled="isEdit"
              />
            </div>
          </div>
        </Tab>
      </Tabbed>
    </div>
  </CruResource>
</template>

<style lang="scss" scoped>
    $spacer: 10px;

    .controls-container {
      display: flex;
      justify-content: right;
      padding-top: $spacer;

      border-top: var(--header-border-size) solid var(--header-border);
    }
</style>
