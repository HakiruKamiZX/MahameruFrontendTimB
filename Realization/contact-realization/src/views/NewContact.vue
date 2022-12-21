<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="/tabs/NewFriend">
    <ion-icon fill="none" slot="icon-only" name="arrow-back-outline"></ion-icon>
      </ion-back-button>
    </ion-buttons>
        <ion-title><center>New Friend</center></ion-title>
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
        <ion-input placeholder="Nama" v-model="nama" class="custom"></ion-input>
      </ion-item>
      
      <ion-item fill="outline">
        <ion-label position="stacked">Phone</ion-label>
        <ion-input placeholder="Phone Number" v-model="telp" class="custom"></ion-input>
        
      </ion-item>

    <ion-grid>
      <ion-row>
        <ion-col>
          <button @click="getValues()" fill="solid" class="buttonsave" type="button">Save Changes</button>
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

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage,IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonLabel, IonInput, IonItem} from '@ionic/vue';
import axios from 'axios'


export default  defineComponent({
  name: 'NewContact',
  components: { IonHeader, IonBackButton, IonToolbar, IonTitle, IonContent, IonPage,  IonButtons, IonLabel, IonInput, IonItem},
  data(){
      return{
          nama: '',
          telp: '',
      }
  },
  methods:{
    getValues() {
      var pond = { 'name': this.nama, 'no_telp': this.telp}
      console.log(pond)  
    }
  }
});
</script>


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
  border: none;
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

.buttonsave{
    background-color: #ff884b;
    border: none;
    color: black;
    padding: 10px 150px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 10px;
    
  }
  ion-item{
      align-items: center;
    }

  .button {
  background-color: #ff884b;
  --color: black;
}
</style>