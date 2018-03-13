<template>
<div class="vd-gallery">

  <div class="vd-gallery_screen-container">
      <img :src="src"
            alt=""
            class="vd-gallery_screen"/>
  </div>

  <div class="vd-gallery_content">
    <div class="vd-gallery_gallery">
        <div class="vd-gallery_gallery-container"
             ref= "galleryContainer">
          <div v-for="(src,index) in imageSource"
                    :key="index"
                    class="vd-gallery_thumbnail-container"
                    :class="index === currentClick ? 'vd-gallery_select' : ''"
                    @click="show(src,index)">
            <img :src="src"
                  alt=""
                  class="vd-gallery_thumbnail"/>
            <span class=" vd-gallery_sort-up">
              <i class="fa fa-sort-asc"></i>
            </span>
         </div>
        </div>
        <span @click="moveLeft"
              class="vd-gallery_angle vd-gallery_angle-left">
          <i class="fa fa-angle-left"></i>
        </span>
        <span @click="moveRight"
              class="vd-gallery_angle vd-gallery_angle-right">
          <i class="fa fa-angle-right"></i>
        </span>
    </div>
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
import anime from 'animejs';

const easing = 'easeInOutQuad';
const duration = 256;

@Component
export default class VdGallery extends Vue {
  @Prop() imageSource: string[];

  src: string = this.imageSource[0];
  galleryContainer: HTMLElement;
  currentClick: number = 0;
  arrLength: number = 0;
  memory: number = 0;

  get memoryMax(): number {
    return this.imageSource.length / 4 - 1;
  }

  move() {
    anime({
      targets: this.galleryContainer,
      translateX: `${-100 * this.memory}%`,
      easing,
      duration,
    });
  }

  moveLeft() {
    this.memory--;
    if (this.memory <= 0) {
      this.memory = 0;
    }
    this.move();
  }

  moveRight() {
    this.memory++;
    if (this.memory > this.memoryMax) {
      this.memory = this.memoryMax;
    }
    this.move();
  }

  show(src: string, index: number) {
    this.src = src;
    this.currentClick = index;
  }

  mounted() {
    this.galleryContainer = this.$refs.galleryContainer as HTMLElement;
    this.arrLength = this.imageSource.length;
  }
}
</script>
