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
          <a href="/tabs/NewContact">
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
        <li class="flex-list" v-for="friend in friendList" v-bind:key="friend.id">
          <FriendElement :data="friend"/>
        </li>
      </div>
    </ion-content>
  </ion-page>
</template>
<style scoped>
ion-toolbar{
  --background: #ff884b;
  --color: black;
  text-align: center;
}
.container{
    box-sizing: border-box;
    padding: 8px 16px;
    background-color: white;
    color: black;
    height: 100%;
  }
  .add-friend{
    margin-top: 5%;
    margin-bottom: 10%;
  }
  .add-friend a{
    text-decoration: none;
    color: black;
  }
  .rounded-img {
    padding: 5px 8px;
    background-color: #ff884b;
    display: inline-block;
    border-radius: 100%;
  }
  .flex-list{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 4px;
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import FriendElement from '@/components/FriendElement.vue';
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


export default defineComponent({
  name: "Tab1Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    FriendElement
  },
  data: function () {
    return {
      // dummy data
      friendList: [
        {
          id: 1,
          img: "account_circle.png",
          name: "Name"
        },
        {
          id: 2,
          img: "account_circle.png",
          name: "Name"
        },
        {
          id: 3,
          img: "account_circle.png",
          name: "Name"
        }
      ]
    }
  }
});
</script>
