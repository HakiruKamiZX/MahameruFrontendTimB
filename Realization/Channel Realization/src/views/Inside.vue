<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Channel Name</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { IonContent, IonHeader, IonPage, IonToolbar, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InsideChann',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonBackButton
  }
});
</script>

<style scoped>
.text {
  color: black;
}

.p {
  text-align: center;
  align-items: center;
}

.imgs {
  align-items: center;
}
</style>