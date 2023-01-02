<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
    <ion-buttons slot="start">
    <ion-back-button default-href="/tabs/FriendsList">
      <ion-icon fill="none" slot="icon-only" name="arrow-back-outline"></ion-icon>
    </ion-back-button>
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
      
      <div class="container"></div>
      <form @submit.prevent="SaveEditContact(contact['id'])">
      <div class="input-group">
      <ion-item fill="outline">
        <ion-label position="stacked">Nama</ion-label>
        <ion-input  type="text" placeholder="Nama" class="custom"></ion-input>
        <!--@ionInput="contact['name']=$event.target.value" :value="`${contact['name']}`"-->
      </ion-item>
      </div>

      <div class="input-group">
      <ion-item fill="outline">
        <ion-label position="stacked">Phone</ion-label>
        <ion-input type="tel" placeholder="Phone Number" class="custom"> </ion-input> <!--@ionInput="contact['notelp']=$event.target.value" :value="`${contact['notelp']}`" -->
      </ion-item>
      </div>

      <div>
      <ion-grid>
      <ion-row>
        <ion-col>
        <button class="buttonw" type="submit">Save Changes</button>
      </ion-col>
      <ion-col></ion-col>
        <ion-col>
        <button class="delete" type="button">Delete friend</button> <!--@submit.prevent="DeleteContact()"-->
      </ion-col>
      </ion-row>
      </ion-grid>
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
import { IonPage,IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonLabel, IonInput, IonItem} from '@ionic/vue';
import axios from 'axios'


export default  defineComponent({
  name: 'EditContact',
  components: { IonHeader, IonBackButton, IonToolbar, IonTitle, IonContent, IonPage,  IonButtons, IonLabel, IonInput, IonItem},
    data ()  {
        return {
          contact:{
            id:'',
            name: 'name',
            notelp: '123456789',
          },
        }
   },

   mounted: function () {
      this.getcontact(`${this.$route.params.id}`)
    },
    methods: {
        log() {
            console.log();
        },
        getcontact(id: string) {
            axios.get(`http://127.0.0.1:5000/contact/${id}`)
            .then(res => {
                    this.contact = res.data[0]
                    this.contact['id'] = id
                }).catch(err => {
                    console.error(err);
                });
        },
        SaveEditContact(id: string) {
            console.log(this.contact)
            
            let data = new FormData();
            data.append('name', this.contact['name']);
            data.append('notelp', this.contact['notelp']);

            axios.put(`http://127.0.0.1:5000/updatecontact/${id}`, data, {
                transformRequest: ()=> data
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.error(err);
                });
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

.buttonw{
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
  .button {
  background-color: #ff884b;
  --color: black;
  height: 50px;
}
</style>