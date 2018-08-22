import Vue, { CreateElement, VNode } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';

/**
 * App
 */
@Component
export default class App extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div id="app" staticClass="v-app" class={`vda-theme_${this.$vd_theme.theme}`}>
        <c-nav-bar />
        <router-view />
      </div>
    );
  }
}
