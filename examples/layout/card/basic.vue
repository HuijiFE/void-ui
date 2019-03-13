<template>
  <div class="e-card-demo">
    <vd-card :bordered="this.bordered"
             :raise="this.raise">
      <vd-card-header>Card</vd-card-header>
      <vd-card-content>
        <div>Here is the content of the card.</div>
        <div>
          The card component can be styled by properties 'bordered' and 'raise'.
        </div>
      </vd-card-content>
      <vd-card-separator />
      <vd-card-content>
        <vd-flexbox gap>
          <vd-flexbox flex="none">
            <vd-button @click="() => this.bordered = !this.bordered">
              bordered: {{this.bordered}}
            </vd-button>
          </vd-flexbox>
          <vd-flexbox flex="none">
            <vd-button @click="() => this.raise = !this.raise">
              raise: {{this.raise}}
            </vd-button>
          </vd-flexbox>
        </vd-flexbox>
      </vd-card-content>
    </vd-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bordered: false,
      raise: true,
    };
  },
};
</script>
