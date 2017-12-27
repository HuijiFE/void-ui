<template>
  <div class="vd-bread-crumb"
       :class="classes">
    <div class="bread-crumb-inner">
      <template v-for="(item,index) in itemsSource">
        <router-link class="bread-crumb-item"
                     :class="{'fontBold':index < itemsSource.length - 1}"
                     :key="item.label"
                     v-if="item.to"
                     :to="item.to">{{item.label}}
          <i v-show="index < itemsSource.length - 1"
             :key="index"
             class="icon fa fa-angle-right bread-crumb-icon"></i>
        </router-link>

        <a v-else
           class="bread-crumb-item"
           :key="item.label"
           :href="item.href">{{item.label}}</a>
      </template>
    </div>
  </div>

</template>

<script lang="ts">
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from 'vue-property-decorator';

import { VdStylableControl } from 'src/controls/base/VdControl';
interface ItemsSource {
  to?: string;
  label: string;
  href?: string;
}

@Component
export default class VdBreadCrumb extends VdStylableControl {
  @Prop() itemsSource: ItemsSource[];
  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`, `skin-${this.skin}`];
  }
}
</script>
