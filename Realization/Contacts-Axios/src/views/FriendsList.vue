<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Friends</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="add-friend">
          <a href="/NewContact">
            <ion-grid>
              <ion-row>
                <ion-col size="2">
                  <div class="rounded-img">
                    <img src="/assets/images/person_add.png" width="30" height="30" alt="">
                  </div>
                </ion-col>
                <ion-col style="">
                  <p><strong>New Friend</strong></p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </a>
        </div>
        <ion-text>Friends on Mahameru</ion-text>
        <div class="flex-list" v-for="contact in contacts" v-bind:key="contact.id" > <!--v-for="contact in contacts" v-bind:key="contact.id"-->
          <a href="/EditContact" class="item-friend">
            <ion-grid>
              <ion-row>
                <ion-col size="2">
                  <img :src="`assets/images/account_circle.png`" alt="">
                </ion-col>
                <ion-col size="8">
                  <p>{{ contact.name }}</p>
                </ion-col>
                <ion-col style="line-height: 70px;">
                  <img src="assets/images/edit.png" width="25" height="25" alt="">
                </ion-col>
              </ion-row>
            </ion-grid>
          </a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import axios from 'axios'


export default defineComponent({
  name: "FriendsList",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
  },

  data() {
    return {
      contacts: [{
        id:'',
        img:'account_circle.png',
        name:'',
    }],
    }
  },
  
mounted() {
  axios.get('http://127.0.0.1:5000/contacts')
                .then(res => {
                    this.contacts = res.data;
              })
                .catch(err => {
                    console.log(err);
                });
              }
});
</script>

<style scoped>
ion-toolbar {
  --background: #ff884b;
  --color: black;
  text-align: center;
}

.item-friend {
  display: inline-block;
  text-decoration: none;
  color: black;
}

.container {
  box-sizing: border-box;
  padding: 8px 16px;
  background-color: white;
  color: black;
  height: 100%;
}

.add-friend {
  margin-top: 5%;
  margin-bottom: 10%;
}

.add-friend a {
  text-decoration: none;
  color: black;
}

.rounded-img {
  padding: 5px 8px;
  background-color: #ff884b;
  display: inline-block;
  border-radius: 100%;
}

.flex-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 4px;
}
</style>

