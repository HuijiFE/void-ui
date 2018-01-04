<template>
  <div style="padding-bottom: 61.8%; position: relative;">
    <vd-acrylic :background-image="backgroundImage"></vd-acrylic>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';

const images = [
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_86d675fdc73ba10462abb8f5ece7791c5047072c.1920x1080.jpg?t=1512411728',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_ad8eee787704745ccdecdfde3a5cd2733704898d.1920x1080.jpg?t=1512411728',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_7ab506679d42bfc0c0e40639887176494e0466d9.1920x1080.jpg?t=1512411728',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_c9118375a2400278590f29a3537769c986ef6e39.1920x1080.jpg?t=1512411728',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_f9ebafedaf2d5cfb80ef1f74baa18eb08cad6494.1920x1080.jpg?t=1512411728',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_27b6345f22243bd6b885cc64c5cda74e4bd9c3e8.1920x1080.jpg?t=1512411728',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_b33a65678dc71cc98df4890e22a89601ee56a918.1920x1080.jpg?t=1512411728',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_d0f973ce376ca5b6c08e081cb035e86ced105fa9.1920x1080.jpg?t=1512411728',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_1f3b5f5ccf8b159294914c3fe028128a787304b6.1920x1080.jpg?t=1512411728',
  'http://cdn.steamstatic.com.8686c.com/steam/apps/570/ss_e0a92f15a6631a8186df79182d0fe28b5e37d8cb.1920x1080.jpg?t=1512411728',
];

@Component
export default class AcrylicBasic extends Vue {
  get backgroundImage(): string {
    return images[Math.floor(Math.random() * 10)];
  }
}
</script>
