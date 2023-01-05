<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="/FriendsList">
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
      
      <form @submit.prevent="SaveNewContact()" method="POST" enctype="multipart/form-data">
      <div class="input-group">
      <ion-item fill="outline">
        <ion-label position="stacked">Nama</ion-label>
        <ion-input type="text" placeholder="Nama" v-model="form['name']" class="custom"></ion-input>
      </ion-item>
      </div>
      
      <div class="input-group">
      <ion-item fill="outline">
        <ion-label position="stacked">Phone</ion-label>
        <ion-input type="tel" placeholder="Phone Number" v-model="form['notelp']" class="custom"></ion-input>
      </ion-item>
      </div>
      <ion-col></ion-col>
      <div>
          <button class="buttonsave" type="submit">Save Contact</button>
        </div>
      </form>
      
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
import { IonPage,IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonLabel, IonInput} from '@ionic/vue';
import axios from 'axios'


export default  defineComponent({
  name: 'NewContact',
  components: { IonHeader, IonBackButton, IonToolbar, IonTitle, IonContent, IonPage,  IonButtons, IonLabel, IonInput},
  data: function() {
    return{
      form: {
      name: '',
      notelp: '',
      },
    };
  },

  methods: {
    log() {
      if (this.form) {
        alert(`data: ${JSON.stringify(this.form)}`);
      }
    },
    async SaveNewContact() {
        let bodyFormData = new FormData();
        bodyFormData.append("name", this.form["name"]);
        bodyFormData.append("notelp", this.form["notelp"]);

      await axios.post('http://127.0.0.1:5000/createcontact', bodyFormData, {
        transformRequest: (data) => {return data}
      })
        .then((res) => {
          if (res.status == 200){
            window.location.href = '/FriendsList';
          }
      })
        .catch((err) => {
          console.error(err);
        });
    },
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
    padding: 10px 300px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 10px;
    
  }

  .button {
  background-color: #ff884b;
  --color: black;
  height: 50px;
}
</style>