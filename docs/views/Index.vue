<template>
  <div class="index">
    <vd-main>
      <div class="main-menu">
        <vd-menu :brand-to="`/${$route.params.locale}`"
                 position="left"
                 :items-source="navItems"
                 auto-collapse>
          <vd-menu-item slot="end"
                        href="https://github.com/huijife"
                        target="_blank">GitHub</vd-menu-item>
        </vd-menu>
      </div>
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
import { MenuItem, MenuItemGroup, SubMenu } from '@void/VoidUI';

/**
 * Index subfield
 */
@Component
export default class Index extends Vue {
  private navItems: (MenuItem | MenuItemGroup | SubMenu)[] = [];

  private mounted(): void {
    this.navItems = [
      {
        label: 'Home',
        to: `/${this.$route.params.locale}`,
      },
      {
        label: 'Guidelines',
        to: `/${this.$route.params.locale}/guidelines`,
      },
      {
        label: 'Controls',
        to: `/${this.$route.params.locale}/controls`,
      },
      {
        label: 'Demos',
        to: `/${this.$route.params.locale}/demos`,
      },
      {
        label: 'Tools',
        to: `/${this.$route.params.locale}/tools`,
      },
      {
        label: 'Google',
        href: 'https://www.google.com/',
        target: '_blank',
      },
      {
        groupLabel: 'Test',
        itemsSource: [
          {
            // fa: 'paper-plane',
            label: 'option 1',
          },
          {
            // fa: 'paper-plane',
            label: 'option 2',
          },
        ],
      },
      {
        subMenuLabel: 'Test',
        itemsSource: [
          {
            // fa: 'paper-plane',
            label: 'option 1',
          },
          {
            // fa: 'paper-plane',
            label: 'option 2',
          },
          {
            // fa: 'paper-plane',
            label: 'option 3',
          },
        ],
      },
      {
        subMenuLabel: 'Test',
        itemsSource: [
          {
            groupLabel: 'Test',
            itemsSource: [
              {
                // fa: 'paper-plane',
                label: 'option 1',
              },
              {
                // fa: 'paper-plane',
                label: 'option 2',
              },
            ],
          },
          {
            groupLabel: 'Test',
            itemsSource: [
              {
                // fa: 'paper-plane',
                label: 'option 1',
              },
              {
                // fa: 'paper-plane',
                label: 'option 2',
              },
            ],
          },
        ],
      },
    ];
  }
}
</script>

<style lang="scss">
.main-menu {
  width: 256px;
  margin: 0 auto;
}
</style>
