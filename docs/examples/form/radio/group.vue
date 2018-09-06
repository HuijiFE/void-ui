<template>
  <div staticClass="e-radio-group">
    <vd-flexbox gap>
      <vd-flexbox :flex="100">
        <div>
          Current value:
          <strong>{{fruit}}</strong>
        </div>
      </vd-flexbox>
      <vd-flexbox :flex="100">
        <vd-radio-group :items-source="radios"
                        v-model="fruit"
                        direction="column" />
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruit: 'apple',
      radios: [
        {
          label: 'Apple',
          value: 'apple',
        },
        {
          label: 'Banana',
          value: 'banana',
        },
        {
          label: 'Orange',
          value: 'orange',
        },
      ],
    };
  },
};
</script>

