<template>
  <div id="app">
    <main-nav></main-nav>
    <div class="container">
      <router-view/>
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
  beforeCreate(): void {
    let ghost = document.getElementById('ghost');
    console.log(`[DEBUG beforeCreate] ${ghost ? ghost.innerHTML : 'ghost no found.'}`);
  }
  created(): void {
    let ghost = document.getElementById('ghost');
    console.log(`[DEBUG created] ${ghost ? ghost.innerHTML : 'ghost no found.'}`);
  }
  beforeMount(): void {
    let ghost = document.getElementById('ghost');
    console.log(`[DEBUG beforeMount] ${ghost ? ghost.innerHTML : 'ghost no found.'}`);
  }
  mounted(): void {
    let ghost = document.getElementById('ghost');
    console.log(`[DEBUG mounted] ${ghost ? ghost.innerHTML : 'ghost no found.'}`);
  }
}
</script>
