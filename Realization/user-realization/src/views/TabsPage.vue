<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="none">
        <ion-tab-button tab="RegisterUser" href="/tabs/RegisterUser"></ion-tab-button>
        <ion-tab-button tab="UserProfile" href="/tabs/UserProfile"></ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonPage, IonRouterOutlet } from '@ionic/vue';

export default defineComponent({
  name: 'TabsPage',
  components: { IonTabs, IonTabBar, IonTabButton, IonPage, IonRouterOutlet },
});
</script>
