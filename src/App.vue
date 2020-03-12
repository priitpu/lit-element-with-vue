<template>
  <t-grid>
    <t-grid-row>
      <t-grid-cell span="2">
        <t-card>
          <h3 slot="t-card-head">Vue + web components</h3>
          <form>
            <t-grid>
              <t-grid-row>
                <t-grid-cell span="6">
                  <t-input
                    @keydown.enter="addEl"
                    @input="handleChange"
                    v-model="input">
                  </t-input>
                </t-grid-cell>
                <t-grid-cell span="6" justify="end">
                  <t-toggle @change="toggleThings"></t-toggle>
                </t-grid-cell>
              </t-grid-row>
              <t-grid-row>
                <t-grid-cell span="12" justify="end">
                  <t-button-group>
                    <t-button @click="addEl">Add</t-button>
                    <t-button theme="secondary" @click="clearEl">Empty</t-button>
                  </t-button-group>
                </t-grid-cell>
              </t-grid-row>
            </t-grid>
          </form>
        </t-card>
      </t-grid-cell>
    </t-grid-row>
    <t-grid-row v-if="toggleValue">
      <t-grid-cell span="4">
        <t-card>
          <div v-for="(el, index) in elementList" v-bind:key="index">{{ el }}</div>
        </t-card>
      </t-grid-cell>
      <t-grid-cell span="4">
        <t-card>
          <div v-for="(el, index) in elementList" v-bind:key="index">{{ el }}</div>
        </t-card>
      </t-grid-cell>
      <t-grid-cell span="4">
        <t-card>
          <div v-for="(el, index) in elementList" v-bind:key="index">{{ el }}</div>
        </t-card>
      </t-grid-cell>
    </t-grid-row>
    <t-grid-row v-if="toggleValue">
      <t-grid-cell>
        <t-card>
          <h3 slot="t-card-head">Starts at 2, spans 4</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, esse enim!
            Repellendus ipsam sit exercitationem maxime quidem vel placeat quae, tenetur consequatur
            dolorum, optio soluta recusandae fugiat dignissimos nesciunt labore? Architecto, quia
            repellat laborum consequuntur eligendi deserunt eius magnam. Minus ea totam doloremque
            similique laboriosam impedit, doloribus quis est accusantium quidem. Dolor rem magni
            voluptas a non perspiciatis harum error. Perspiciatis, adipisci aut? Voluptatem facere
            quibusdam atque officia, neque commodi, velit ratione id deleniti eum eligendi natus
            laudantium pariatur est perferendis, earum doloremque. Earum nam quis quos, corrupti
            illum maxime.
          </p>
        </t-card>
      </t-grid-cell>
      <t-grid-cell start="2" span="4">
        <t-card>
          <h3 slot="t-card-head">Starts at 2, spans 4</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, esse enim!
            Repellendus ipsam sit exercitationem maxime quidem vel placeat quae, tenetur consequatur
            dolorum, optio soluta recusandae fugiat dignissimos nesciunt labore? Architecto, quia
            repellat laborum consequuntur eligendi deserunt eius magnam. Minus ea totam doloremque
            similique laboriosam impedit, doloribus quis est accusantium quidem. Dolor rem magni
            voluptas a non perspiciatis harum error. Perspiciatis, adipisci aut? Voluptatem facere
            quibusdam atque officia, neque commodi, velit ratione id deleniti eum eligendi natus
            laudantium pariatur est perferendis, earum doloremque. Earum nam quis quos, corrupti
            illum maxime.
          </p>
        </t-card>
      </t-grid-cell>
      <t-grid-cell start="7" span="3">
        <t-card>
          <h3 slot="t-card-head">Starts at 7, spans 3</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, esse enim!
            Repellendus ipsam sit exercitationem maxime quidem vel placeat quae, tenetur consequatur
            dolorum, optio soluta recusandae fugiat dignissimos nesciunt labore? Architecto, quia
            repellat laborum consequuntur eligendi deserunt eius magnam. Minus ea totam doloremque
            similique laboriosam impedit, doloribus quis est accusantium quidem. Dolor rem magni
            voluptas a non perspiciatis harum error. Perspiciatis, adipisci aut? Voluptatem facere
            quibusdam atque officia, neque commodi, velit ratione id deleniti eum eligendi natus
            laudantium pariatur est perferendis, earum doloremque. Earum nam quis quos, corrupti
            illum maxime.
          </p>
        </t-card>
      </t-grid-cell>
      <t-grid-cell start="11" span="2">
        <t-card>
          <h3 slot="t-card-head">Starts at 11, spans 2</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, esse enim!
            Repellendus ipsam sit exercitationem maxime quidem vel placeat quae, tenetur consequatur
            dolorum, optio soluta recusandae fugiat dignissimos nesciunt labore? Architecto, quia
            repellat laborum consequuntur eligendi deserunt eius magnam. Minus ea totam doloremque
            similique laboriosam impedit, doloribus quis est accusantium quidem. Dolor rem magni
            voluptas a non perspiciatis harum error. Perspiciatis, adipisci aut? Voluptatem facere
            quibusdam atque officia, neque commodi, velit ratione id deleniti eum eligendi natus
            laudantium pariatur est perferendis, earum doloremque. Earum nam quis quos, corrupti
            illum maxime.
          </p>
        </t-card>
      </t-grid-cell>
    </t-grid-row>
  </t-grid>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public input = '';

  public toggleValue: boolean | string = false;

  public elementList: string[] = [];

  public handleChange(e: Event) {
    const { value } = e.target as HTMLInputElement;
    this.input = value;
  }

  public toggleThings(e: Event) {
    const { value } = e.target as HTMLInputElement;
    this.toggleValue = value;
  }

  public addEl() {
    this.elementList = [...this.elementList, this.input];
  }

  public clearEl() {
    this.elementList = [];
  }
}
</script>

<style lang="scss">

html {
  background-color: #ECF0F2;
  min-height: 100vh;
}

</style>
