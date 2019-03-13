<template>
  <div class="e-card-array">
    <vd-flexbox gap>
      <vd-flexbox v-for="num of 5"
                  :key="num">
        <vd-card raise>
          <vd-card-content>
            <div class="e-card-array_item">Card {{num}}</div>
          </vd-card-content>
        </vd-card>
      </vd-flexbox>
    </vd-flexbox>
  </div>
</template>
