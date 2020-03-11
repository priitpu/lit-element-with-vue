<template>
  <div>
    <h1>VUE + WEB COMPONENTS</h1>
    <t-input v-model="input" @keydown.enter="addElement" @input="handleChange"></t-input>
    <t-button @click="addElement">Lisa</t-button>
    <t-button theme="link" @click="clearElements">Tühjenda</t-button>
    <div v-for="element in elementsArray" :key="JSON.stringify(element)">
      {{element}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public input: string | null = '';

  public elementsArray: string[] = [];

  public handleChange(e: Event) {
    const { value } = e.target as HTMLInputElement;
    this.input = value;
  }

  public addElement() {
    if (!this.input) {
      return;
    }
    this.elementsArray = [...this.elementsArray, this.input];
    this.input = '';
  }

  public clearElements() {
    this.elementsArray = [];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
