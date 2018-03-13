<template>
  <vd-flexbox>
      <vd-gallery :imageSource= 'arr'></vd-gallery>
  </vd-flexbox>
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
@Component
export default class GalleryBasic extends Vue {
  arr: string[] = [
    'https://tse1-mm.cn.bing.net/th?id=OIP.KrzyBQn7yoeLvMu847e9JwHaEo&w=290&h=179&c=7&o=5&pid=1.7',
    'https://tse2-mm.cn.bing.net/th?id=OIP.d0Ju3rRGZzOdvOyXZXSukwHaEo&w=278&h=173&c=7&o=5&pid=1.7',
    'https://tse4-mm.cn.bing.net/th?id=OIP.jJhGeGum9lhjO5F7tYhOlwHaFj&w=238&h=176&c=7&o=5&pid=1.7',
    'http://img2.3lian.com/img2007/4/17/200673118122268220.gif',
    'https://tse1-mm.cn.bing.net/th?id=OIP._tzSIqdu9Ua3aGfnGBrzfAHaEK&w=300&h=168&c=7&o=5&pid=1.7',
    'https://tse2-mm.cn.bing.net/th?id=OIP.d0Ju3rRGZzOdvOyXZXSukwHaEo&w=278&h=173&c=7&o=5&pid=1.7',
    'https://tse4-mm.cn.bing.net/th?id=OIP.jJhGeGum9lhjO5F7tYhOlwHaFj&w=238&h=176&c=7&o=5&pid=1.7',
    'http://img2.3lian.com/img2007/4/17/200673118122268220.gif',
    'https://tse1-mm.cn.bing.net/th?id=OIP._tzSIqdu9Ua3aGfnGBrzfAHaEK&w=300&h=168&c=7&o=5&pid=1.7',
  ];
}
</script>
