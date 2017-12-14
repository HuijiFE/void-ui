<template>
  <div id="app">
    <main-nav mode="router"></main-nav>
    <vd-main class="docs-main-wrapper">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </vd-main>
  </div>
</template>

<script lang="ts">
// Learn more:
// https://github.com/vuejs/vue-class-component
// https://github.com/kaorun343/vue-property-decorator
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
import VoidUI from 'void-ui';
Vue.use(VoidUI);

import MainNav from 'docs/components/MainNav.vue';
import ColorCube from 'docs/components/ColorCube.vue';

Vue.component(ColorCube.name, ColorCube);

@Component({
  components: {
    MainNav,
  },
})
export default class Main extends Vue {
  @Watch('$route')
  changePageTitle() {
    document.title = this.$route.name || 'Void-UI';
  }
}
</script>
