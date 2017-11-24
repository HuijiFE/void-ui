<template>
  <div id="app">
    <main-nav mode="router"></main-nav>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
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

import MainNav from 'src/components/MainNav.vue';

let ghost = document.getElementById('ghost');
console.log(`[DEBUG beforeInstance] ${ghost ? ghost.innerHTML : 'ghost no found.'}`);

@Component({
  components: {
    MainNav,
  },
})
export default class Main extends Vue {
  created() {
    this.$store.commit('updateGhost', this.$route.path);
  }
}
</script>
