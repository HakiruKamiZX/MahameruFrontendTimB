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
    <ion-content class="ion-padding">
        <ion-list lines="none">
            <ion-item>
                <ion-label class="to">Dah ada Kelompok belom lu ?</ion-label>
            </ion-item>
            <ion-item>
                <ion-label class="to">Kalo belom bareng gw mw?<br>asdasdadsa</ion-label>
            </ion-item>
            <ion-item>
                <ion-label class="from">Ntar dlu</ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
    <ion-footer>
        <ion-toolbar>
            <ion-title>
                <ion-item>
                    <ion-label position="floating">Default input</ion-label>
                    <ion-input placeholder="Enter text"></ion-input>
                </ion-item>
            </ion-title>
        </ion-toolbar>
    </ion-footer>
</template>
  
<script lang="ts">
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonFooter, IonItem, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ViewChat',
    components: {
        IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonFooter, IonItem, IonInput
    }
});
</script>
  
<style scoped>
ion-item {
    font-family: 'Manjari';
    font-size: small;
}

.from {
    border-radius: 5px;
    border: 1px solid;
    padding: 5px;
}

.to {
    text-align: left;
    border-color: #ff884b;
    border-radius: 5px;
    border: 1px solid;
    padding: 5px;
}

.to {
    text-align: right;
}

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