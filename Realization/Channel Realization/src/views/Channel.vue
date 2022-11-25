<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Channel List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-accordion-group :multiple="true" :value="['first', 'second']">
        <ion-accordion value="first">
          <ion-item slot="header">
            <ion-label>Recenly Updated</ion-label>
          </ion-item>
          <div slot="content">
            <ion-list lines="none">
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>Pokemon Gym
                  </ion-label>
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>HCI Companion Channel
                  </ion-label>
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>Steam News
                  </ion-label>
                </ion-button>
              </ion-item>
            </ion-list>
          </div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header">
            <ion-label>Favorite</ion-label>
          </ion-item>
          <div slot="content">
            <ion-list lines="none">
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>Pokemon Gym
                  </ion-label>
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>HCI Companion Channel
                  </ion-label>
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-button fill="clear">
                  <ion-label>Steam News
                  </ion-label>
                </ion-button>
              </ion-item>
            </ion-list>
          </div>
        </ion-accordion>
      </ion-accordion-group>

    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Channel</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list line="none">
        <button>
          <ion-item  href="/Inside">
            <ion-col size="2">
              <ion-thumbnail>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </ion-thumbnail>
            </ion-col>
            <ion-col size="10" class="text">
              <ion-row class="channelname">
                Proyek Mahameru
              </ion-row>
              <ion-row class="channelchat">
                Jangan Lupa Kerjain Tugasnya ya ges
              </ion-row>
            </ion-col>
          </ion-item>
        </button>
        <button>
          <ion-item href="/Inside">
            <ion-col size="2">
              <ion-thumbnail>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </ion-thumbnail>
            </ion-col>
            <ion-col size="10" class="text">
              <ion-row class="channelname">
                Proyek Mahameru
              </ion-row>
              <ion-row class="channelchat">
                Jangan Lupa Kerjain Tugasnya ya ges
              </ion-row>
            </ion-col>
          </ion-item>
        </button>
        <button>
          <ion-item  href="/Inside">
            <ion-col size="2">
              <ion-thumbnail>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </ion-thumbnail>
            </ion-col>
            <ion-col size="10" class="text">
              <ion-row class="channelname">
                Proyek Mahameru
              </ion-row>
              <ion-row class="channelchat">
                Jangan Lupa Kerjain Tugasnya ya ges
              </ion-row>
            </ion-col>
          </ion-item>
        </button>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonAccordion, IonAccordionGroup, IonThumbnail, } from '@ionic/vue';
import InsideChann from './Inside.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChannelOverview',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonThumbnail,
    IonAccordion,
    IonAccordionGroup,
  },
  data() {
    return {
      component: InsideChann,
    };
  },
});
</script>

<style scoped>
ion-list {
  --color: dark;
}
ion-button {
  color: black;
  font-size: small;
  width: 100% auto;
  height: 100%;
}

ion-item {
  font-size: 15px;
  background-color: antiquewhite;
}

ion-card {
  text-align: justify;
  margin: 0;
}

ion-col {
  text-align: justify;
  text-anchor: middle;
  text-decoration: dashed;
  text-justify: auto;
  text-overflow: clip;
}

ion-thumbnail {
  --border-radius: 100px;
  --size: auto;
}

.text {
  margin-left: 1vw;
  width: 100%;
  font-size:16px, large;
}
.channelname{
  font-weight: bold;
  padding-bottom: 2%;
}
</style>