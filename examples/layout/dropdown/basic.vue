<template>
  <div class="e-dropdown-basic">
    <vd-flexbox gap
                direction="column">
      <vd-flexbox gap
                  v-for="skin in SKIN_KEYS"
                  :key="skin">
        <vd-flexbox flex="none"
                    v-for="shape in SHAPE_KEYS"
                    :key="shape">
          <vd-dropdown>
            <vd-button :skin="skin"
                       slot="trigger">{{skin}} {{shape}}</vd-button>
            <vd-button-group v-if="shape === 'rect' || shape === 'pill'"
                             :skin="skin"
                             :shape="shape">
              <vd-button>Dropdown Item</vd-button>
              <vd-button>Dropdown 1</vd-button>
              <vd-button>Dropdown 2</vd-button>
              <vd-button>Menu Item</vd-button>
            </vd-button-group>
            <vd-button-group v-else
                             :skin="skin"
                             :shape="shape">
              <vd-button>D</vd-button>
              <vd-button>1</vd-button>
              <vd-button>2</vd-button>
              <vd-button>M</vd-button>
            </vd-button-group>
          </vd-dropdown>
        </vd-flexbox>
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>

<script>
import { SKIN_KEYS, SHAPE_KEYS } from 'void-ui';

export default {
  data() {
    return {
      SKIN_KEYS,
      SHAPE_KEYS,
    };
  },
};
</script>
