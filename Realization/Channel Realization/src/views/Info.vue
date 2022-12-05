<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Channel Info</ion-title>
        <ion-button slot="primary">
          <ion-icon fill="none" slot="icon-only" :icon="settings">
          </ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-row>
        <ion-col>
          <ion-img src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="The Wisconsin State Capitol building in Madison, WI at night"></ion-img>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="name">
          Mahameru Project
        </ion-col>
      </ion-row>
      <ion-text class="subtitel ">
        Channel Description
      </ion-text>
      <ion-row class="ion-padding">
        Sebuah tempat untuk berkumpulnya tim - tim
        yang mengerjakan proyek mahameru Chat
        Middleware. Mata kuliah HCI dan PPW.
        <p>Created by Fahreza, 22/10/2022</p>
      </ion-row>
      <ion-text class="subtitel">
        Participants
      </ion-text>
      <ion-row>
        <ion-list lines="none">
          <ion-item>
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Fahreza Dhia</ion-label>
            <ion-label slot="primary"> Admin</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Faizal Rizqi</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Daniella Nata</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Aditya Nugraha</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Farras Alif</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Yhanes Kukuh</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Tegar</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Andreas</ion-label>
          </ion-item>
        </ion-list>
      </ion-row>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonPage, IonToolbar, IonBackButton, IonImg, IonIcon } from '@ionic/vue';
import { settings } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChannelInfo',
  components: {
    IonHeader,
    IonPage,
    IonToolbar,
    IonBackButton,
    IonImg,
    IonIcon
  },
  setup() {
    return {
      settings,
    };
  },
});
</script>

<style scoped>
ion-img {

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
}

p {
  font-size: smaller;
  color: grey;
}

.name {
  text-align: center;
  font-size: 8vw;
  font-family: 'Manjari';
  padding-bottom: 6%;
}

ion-item {
  font-family: 'Manjari';
  font-size: medium;
  padding-left: 5%;
}

ion-col {
  font-family: 'Manjari';
}

ion-row {
  font-family: 'Manjari';
  font-size: medium;
}

ion-avatar {
  width: 8%;
  height: 8%
}

.subtitel {
  padding-left: 5%;
  font-family: 'Manjari';
  font-size: large;
  font-variant: small-caps;
  font-weight: bold;
}

.ion-padding {
  padding-left: 6%;
}

ion-button {
  background: transparent;
  --box-shadow: none;
  --color: none;
}
</style>