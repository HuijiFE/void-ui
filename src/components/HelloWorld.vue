<template>
  <div class="hello-world">
    <div class="logo vue"></div>
    <div class="logo ts"></div>
    <h1 v-if="firstName && lastName">{{ message }}</h1>
    <h1 v-else>Hello, Front-End!</h1>
    <h2>Welcome to Vue.js App base on TypeScript.</h2>
    <label>First Name: <input type="text"
             name=""
             id=""
             v-model="firstName" /></label>
    <label>Last Name: <input type="text"
             name=""
             id=""
             v-model="lastName" /></label>
    <button class="button-say-hello"
            @click="sayHello">Say Hello!</button>
    <h2>Data:</h2>
    <ul>
      <li>First Name: {{firstName}}</li>
      <li>Last Name: {{lastName}}</li>
      <li>Full Name: {{fullName}}</li>
    </ul>
    <hr/>
    <h1>Current Route Path: {{currentRout}}</h1>
    <div> Ghost: {{content.ghost}}</div>
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

@Component
export default class HelloWorld extends Vue {
  get currentRout(): string {
    return this.$route.path;
  }

  get firstName(): string {
    return this.$store.state.personName.firstName;
  }
  set firstName(newValue: string) {
    this.$store.dispatch('updateFirstName', newValue);
  }

  get lastName(): string {
    return this.$store.state.personName.firstName;
  }
  set lastName(newValue: string) {
    this.$store.dispatch('updateLastName', newValue);
  }

  get fullName() {
    return this.$store.getters.fullName;
  }

  get message(): String {
    return `Hello, ${this.fullName}!`;
  }

  content = {
    ghost: '',
  };

  beforeMount() {
    this.$store.dispatch('ghostGet', {
      routePath: this.$route.path,
      container: this.content,
    });
  }

  sayHello(event: Event) {
    if (!this.firstName || !this.lastName) {
      alert('First name or last name con not be empty.');
    } else {
      alert(`Hello, ${this.fullName}!`);
    }
  }
}
</script>

