<template>
  <div class="e-switch-demo">
    <vd-flexbox gap>
      <vd-flexbox :flex="100">
        <div>
          Current value:
          <strong>{{status}}</strong>
        </div>
      </vd-flexbox>
      <vd-flexbox :flex="100">
        <vd-switch v-model="status"
                   true-label="on"
                   false-label="off" />
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    };
  },
};
</script>
