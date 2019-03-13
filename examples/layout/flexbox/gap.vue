<template>
  <div class="e-flexbox-gap">
    <vd-flexbox :gap="this.gap">
      <vd-flexbox>
        <c-demo-box bordered
                    rainbow
                    ratio="200px"
                    :label="`gap=${this.gap}`" />
      </vd-flexbox>
      <vd-flexbox>
        <c-demo-box bordered
                    padding
                    rainbow
                    ratio="200px">
          <vd-radio-group direction="column"
                          :items-source="this.radios"
                          v-model="gap" />
        </c-demo-box>
      </vd-flexbox>
      <vd-flexbox>
        <c-demo-box bordered
                    rainbow
                    ratio="200px" />
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gap: false,
      radios: [false, true, 'xsmall', 'small', 'medium', 'large', 'xlarge'].map(
        value => ({
          label: value.toString(),
          value,
        }),
      ),
    };
  },
};
</script>
