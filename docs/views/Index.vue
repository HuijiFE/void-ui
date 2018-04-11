<template>
  <div class="index">
    <div class="vd-navbar vda-raise-3">
      <vd-clamp>
        <vd-menu :brand-to="`/${$route.params.locale}`"
                 brand-label="Void-UI"
                 size="large"
                 :items-source="navItems">
          <void-brand slot="brandImage"
                      color-left="lite"
                      color-right="lite"></void-brand>
          <vd-menu-item slot="end"
                        fa="github"
                        href="https://github.com/huijife"
                        target="_blank">GitHub</vd-menu-item>
        </vd-menu>
      </vd-clamp>
    </div>
    <vd-main>
      <router-view></router-view>
    </vd-main>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { MenuItem } from '@void/VoidUI';

@Component
export default class Index extends Vue {
  private navItems: MenuItem[] = [];

  private mounted(): void {
    this.navItems = [
      {
        label: 'Home',
        to: `${this.$route.params.locale}`,
      },
      {
        label: 'Guidelines',
        to: `${this.$route.params.locale}/guidelines`,
      },
      {
        label: 'Controls',
        to: `${this.$route.params.locale}/controls`,
      },
      {
        label: 'Demos',
        to: `${this.$route.params.locale}/demos`,
      },
      {
        label: 'Tools',
        to: `${this.$route.params.locale}/tools`,
      },
    ];
  }
}
</script>