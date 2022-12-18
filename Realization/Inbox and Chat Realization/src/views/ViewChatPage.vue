<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/inbox"></ion-back-button>
            </ion-buttons>
            <ion-title>
                <div class="viewchat-header">
                    <h1>
                        Fahreza
                    </h1>
                </div>
            </ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-footer collapse="fade">
        <ion-toolbar>
            <ion-title>Footer</ion-title>
        </ion-toolbar>
    </ion-footer>
</template>
  
<script lang="ts">
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonFooter } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ViewChat',
    components: {
        IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonFooter
    }
});
</script>
  
<style>
ion-toolbar {
    --background: #ff884b;
}

.viewchat-header h1 {
    color: black;
    font-size: 20px;
    font-weight: 300;
    margin-left: 70px;
    margin-right: 70px;
    margin-bottom: 20px;
}

.chatview {
    margin-top: 0px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 0px;
    background-color: black;
}

.messagetext {
    tab-size: 50px;
}

.datemessage h1 {
    color: black;
    font-size: 10px;
    font-weight: 300;
    margin-left: 15px;
}
</style>