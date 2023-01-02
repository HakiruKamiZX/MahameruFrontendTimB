<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="none">
        <ion-tab-button tab="FriendsList" href="/tabs/FriendsList"></ion-tab-button>
        <ion-tab-button tab="EditContact" href="/tabs/EditContact"></ion-tab-button>
        <ion-tab-button tab="NewContact" href="/tabs/NewContact"></ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonTabs, IonTabBar, IonTabButton, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
});
</script>
