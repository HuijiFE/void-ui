<template>
  <div staticClass="e-radio-basic">
    <vd-flexbox gap>
      <vd-flexbox :flex="100">
        <div>
          Current value:
          <strong>{{fruit}}</strong>
        </div>
      </vd-flexbox>
      <vd-flexbox flex="none">
        <vd-radio value="apple"
                  v-model="fruit">
          Apple
        </vd-radio>
      </vd-flexbox>
      <vd-flexbox flex="none">
        <vd-radio value="banana"
                  v-model="fruit">
          Banana
        </vd-radio>
      </vd-flexbox>
      <vd-flexbox flex="none">
        <vd-radio value="orange"
                  v-model="fruit">
          Orange
        </vd-radio>
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruit: 'apple',
    };
  },
};
</script>

