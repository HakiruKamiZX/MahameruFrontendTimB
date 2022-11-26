<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/tabs/home">
                    <ion-icon src="assets/icon/tabs_page/home.svg" />
                </ion-tab-button>
                <ion-tab-button tab="users" href="/tabs/users">
                    <ion-icon src="assets/icon/tabs_page/users.svg" />
                </ion-tab-button>
                <ion-tab-button tab="channel" href="/tabs/channel">
                    <ion-icon src="assets/icon/tabs_page/channel.svg" />
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

export default defineComponent({
    name: 'TabsPage',
    components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
});
</script>

<style>
ion-tab-button {
    --background : white;
}
</style>