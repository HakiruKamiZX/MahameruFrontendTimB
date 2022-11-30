<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Create Channel</ion-title>
        <ion-button slot="primary">
          <ion-icon fill="none" slot="icon-only" :icon="add">
          </ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-row class="regis">
        <ion-col size="3.5">
          <img class="import" alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <div class="under">
            Upload Image
        </div>
        </ion-col>
        <ion-col class="input">
          <ion-item>
            <ion-label position="stacked">Channel Name*</ion-label>
            <ion-input placeholder="Enter name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Channel Description</ion-label>
            <ion-textarea placeholder="Optional"></ion-textarea>
          </ion-item>
        </ion-col>
      </ion-row>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonPage, IonToolbar, IonBackButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { images } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChannelRegis',
  components: {
    IonHeader,
    IonPage,
    IonToolbar,
    IonBackButton,
    IonIcon
  },
  setup() {
    return { add, images, };
  },
});
</script>

<style scoped>
.input {
  font-family: 'Manjari';
  font-size: large;
}

ion-col {
  font-family: 'Manjari';
}

ion-row {
  font-family: 'Manjari';
}

ion-button {
  background: transparent;
  --box-shadow: none;
  --color: none;
  --ripple-color: deeppink;
}

ion-label {
  font-weight: 510;
}

.import {
  margin-left: 4.5vw;
  margin-top: 5vw;
  width: 20vw;
  height: 20vw;
  border-radius: 100%;
}

.regis {
  padding-top: 10px;
}
.under{
  font-size: small;
  text-align: center;
  padding-left: 8%;
  padding-top: 5%;
}
</style>