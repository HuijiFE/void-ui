<template>
  <div class="vd-bread-crumb"
       :class="classes">
    <div class="vd-bread-crumb_inner">
      <template v-for="(item,index) in itemsSource">
        <router-link class="vd-bread-crumb_item"
                     :class="{'fontBold':index < itemsSource.length - 1}"
                     :key="item.label"
                     v-if="item.to"
                     :to="item.to">{{item.label}}
          <i v-show="index < itemsSource.length - 1"
             :key="index"
             class="icon fa fa-angle-right vd-bread-crumb_icon"></i>
        </router-link>

        <a v-else
           class="vd-bread-crumb_item"
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
import { BreadCrumbItem } from './VdBreadCrumb';

@Component
export default class VdBreadCrumb extends VdStylableControl {
  @Prop() itemsSource: BreadCrumbItem[];
  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`, `skin-${this.skin}`];
  }
}
</script>
