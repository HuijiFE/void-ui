<template>
  <div class="e-tone-overview">
    <vd-flexbox gap
                direction="column"
                align="stretch">
      <vd-flexbox gap>
        <vd-flexbox v-for="tone in TONE_KEYS"
                    :key="tone"
                    justify="center">
          <vd-button :tone="tone">{{tone}}</vd-button>
        </vd-flexbox>
      </vd-flexbox>
      <vd-flexbox direction="column"
                  align="stretch"
                  gap>
        <vd-flexbox v-for="level in ['lightener', 'lighten', 'standard', 'darken', 'darkener']"
                    :key="level"
                    gap>
          <vd-flexbox v-for="tone in TONE_KEYS"
                      :key="`${tone}-${level}`">
            <div class="e-tone-overview_item"
                 :class="`tone-${tone}-${level}`">
              {{level}}
            </div>
          </vd-flexbox>
        </vd-flexbox>
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>

<script>
import { TONE_KEYS } from 'void-ui';

export default {
  data() {
    return {
      TONE_KEYS: TONE_KEYS,
    };
  },
};
</script>
