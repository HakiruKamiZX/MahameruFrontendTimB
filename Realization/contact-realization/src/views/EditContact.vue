<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
      <ion-buttons slot="start">
      <ion-back-button default-href="/tabs/NewFriend">
      <ion-icon fill="none" slot="icon-only" name="arrow-back-outline"></ion-icon>
      </ion-back-button>
      </ion-buttons>
      <ion-buttons slot="start">
        <ion-back-button text="" icon="arrow-back-outline"></ion-back-button>
      </ion-buttons>
        <ion-title><center>Edit Friend</center></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <center>
        <ion-avatar class="profile">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
      </center>
      
      <ion-item fill="solid">
        <ion-label position="stacked">Nama</ion-label>
        <ion-input placeholder="Nama" class="custom"></ion-input>
      </ion-item>
      
      <ion-item fill="outline">
        <ion-label position="stacked">Phone</ion-label>
        <ion-input type="tel" placeholder="Phone Number" class="custom"></ion-input>
        
      </ion-item>

    <ion-grid>
      <ion-row>
        <ion-col>
          <button class="button" type="button">Save Changes</button>
        </ion-col>
        <ion-col></ion-col>
        <ion-col>
          <button class="delete" type="button">Delete friend</button>
        </ion-col>
      </ion-row>
    </ion-grid>
      
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="" />
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-title{
  background-color: #ff884b;
  color: black;
  height: 50px;

}
.profile{
  width: 100px;
  height: 100px;
}
ion-input.custom {
  background: #FFD384;
  color: black;
  --placeholder-color: black;
  --placeholder-opacity: .8;
  font-size: 12px;
  border-radius: 15px;

  padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  padding-top: 10px;
}

.button{
    background-color: #ff884b;
    border: none;
    color: black;
    padding: 3px 55px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 10px;
  }

.delete{
    background-color: #ff2626;
    border: none;
    color: black;
    padding: 3px 55px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 10px;
}
  ion-item{
      align-items: center;
    }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonButtons, IonBackButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'EditContact',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonAvatar, IonButtons, IonBackButton }
});
</script>
