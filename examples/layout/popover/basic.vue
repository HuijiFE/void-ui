<template>
  <div class="e-popover-demo">
    <vd-flexbox gap="small"
                align="stretch">

      <vd-flexbox gap="small"
                  direction="column"
                  align="end">
        <vd-flexbox staticClass="e-popover-demo_placeholder">
          <vd-button skin="flat" />
        </vd-flexbox>
        <vd-flexbox v-for="align in aligns"
                    :key="align">
          <vd-popover title="Title"
                      position="left"
                      :align="align">
            <vd-button slot="trigger"
                       skin="silk">
              {{align}}
            </vd-button>
            <div>{{`position="left" align="${align}"`}}</div>
            <div>Content for popover.</div>
            <div>Other content for popover.</div>
          </vd-popover>
        </vd-flexbox>
        <vd-flexbox staticClass="e-popover-demo_placeholder">
          <vd-button skin="flat" />
        </vd-flexbox>
      </vd-flexbox>

      <vd-flexbox flex="none"
                  direction="column"
                  justify="space-between">

        <vd-flexbox flex="none"
                    gap="small"
                    justify="center">
          <vd-flexbox v-for="align in aligns"
                      :key="align"
                      flex="none">
            <vd-popover title="Title"
                        position="top"
                        :align="align">
              <vd-button slot="trigger"
                         skin="silk">
                {{align}}
              </vd-button>
              <div>{{`position="top" align="${align}"`}}</div>
              <div>Content for popover.</div>
              <div>Other content for popover.</div>
            </vd-popover>
          </vd-flexbox>
        </vd-flexbox>

        <vd-flexbox flex="none"
                    gap="small"
                    justify="center">
          <vd-flexbox v-for="align in aligns"
                      :key="align"
                      flex="none">
            <vd-popover title="Title"
                        position="bottom"
                        :align="align">
              <vd-button slot="trigger"
                         skin="silk">
                {{align}}
              </vd-button>
              <div>{{`position="bottom" align="${align}"`}}</div>
              <div>Content for popover.</div>
              <div>Other content for popover.</div>
            </vd-popover>
          </vd-flexbox>
        </vd-flexbox>

      </vd-flexbox>

      <vd-flexbox gap="small"
                  direction="column"
                  align="start">
        <vd-flexbox staticClass="e-popover-demo_placeholder">
          <vd-button skin="flat" />
        </vd-flexbox>
        <vd-flexbox v-for="align in aligns"
                    :key="align">
          <vd-popover title="Title"
                      position="right"
                      :align="align">
            <vd-button slot="trigger"
                       skin="silk">
              {{align}}
            </vd-button>
            <div>{{`position="right" align="${align}"`}}</div>
            <div>Content for popover.</div>
            <div>Other content for popover.</div>
          </vd-popover>
        </vd-flexbox>
        <vd-flexbox staticClass="e-popover-demo_placeholder">
          <vd-button skin="flat" />
        </vd-flexbox>
      </vd-flexbox>

    </vd-flexbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aligns: ['start', 'center', 'end'],
    };
  },
};
</script>
