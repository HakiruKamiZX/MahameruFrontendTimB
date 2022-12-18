<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/inbox"></ion-back-button>
            </ion-buttons>
            <ion-title>
                <div class="newchat-header">
                    <h1>
                        New Chat
                    </h1>
                </div>
            </ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-list>
            <ion-item>
                <ion-label>Penerima :</ion-label>
                <ion-input placeholder="Nama Penerima" :clear-input="true"></ion-input>
            </ion-item>
        </ion-list>
    </ion-content>

    <ion-footer collapse="fade">
        <ion-toolbar>
            <ion-item>
                <ion-textarea placeholder="Type something here" :auto-grow="true"></ion-textarea>
            </ion-item>
        </ion-toolbar>
    </ion-footer>
</template>
  
<script lang="ts">
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, 
        IonList, IonItem, IonLabel, IonInput, IonContent, IonFooter } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NewChat',
    components: {
        IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, 
        IonItem, IonLabel, IonInput, IonContent, IonFooter
    }
});
</script>
  
<style>
ion-toolbar {
    --background: #ff884b;
}

.newchat-header h1 {
    color: black;
    font-size: 20px;
    font-weight: 300;
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 20px;
}

ion-textarea.custom-textarea {
    --background: #FFD384;
    --color: #fff;
    --padding-end: 10px;
    --padding-start: 10px;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;
  }
</style>