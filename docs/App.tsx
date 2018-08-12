import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';

/**
 * App
 */
@Component
export default class App extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}
