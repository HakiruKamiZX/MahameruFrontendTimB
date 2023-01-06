<template>
    <ion-header>
      <ion-toolbar>
        <div class="homepage-header">
          <h1>Home</h1>
        </div>
      </ion-toolbar>
    </ion-header>
  
    <ion-content :fullscreen= "true">
      <div class="profile-user">
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <ion-grid>
                <ion-col>
                  <ion-row>
                    <h2><strong>Nama User</strong></h2>
                  </ion-row>
                  <ion-row>
                    <p>User id</p>
                  </ion-row>
                </ion-col>
              </ion-grid>
            </ion-label>
            <ion-button class="editprofile" href="/editprofile">
              <h1>Edit Profile</h1>
            </ion-button>
          </ion-item>
        </ion-list>
        <ion-list>
          <ion-searchbar showCancelButton="focus" class="custom"></ion-searchbar>
        </ion-list>
        <ion-list>
          <div class="friendlist-page">
            <h1>Friend List</h1>
          </div>
          <ion-list>
            <div class="userslist-page">
              <ion-item>
                <ion-avatar slot="start">
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-label>
                  <ion-grid>
                    <ion-col>
                      <ion-row>
                        <h2><strong>Friends</strong></h2>
                      </ion-row>
                      <ion-row>
                        <p>User1, User2, User3</p>
                      </ion-row>
                    </ion-col>
                  </ion-grid>
                </ion-label>
                <ion-button class="usersAll" href="/tabs/users">
                  <h1>See All</h1>
                </ion-button>
              </ion-item>
            </div>
          </ion-list>
          <ion-list>
            <div class="channellist-page">
              <ion-item>
                <ion-avatar slot="start">
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-label>
                  <ion-grid>
                    <ion-col>
                      <ion-row>
                        <h2><strong>Channel</strong></h2>
                      </ion-row>
                      <ion-row>
                        <p>Channel1, Channel2, Channel3</p>
                      </ion-row>
                    </ion-col>
                  </ion-grid>
                </ion-label>
                <ion-button class="channelAll" href="/tabs/channel">
                  <h1>See All</h1>
                </ion-button>
              </ion-item>
            </div>
          </ion-list>
        </ion-list>
      </div>
    </ion-content>
  </template>
  
  <script lang="ts">
  import { IonHeader, IonToolbar, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonGrid, IonCol, IonRow, IonButton, IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HomePage',
    components: { IonHeader, IonToolbar, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonGrid, IonCol, IonRow, IonButton, IonSearchbar },
  });
  </script>
  
  <style>
  ion-content{
    --ion-background-color : white;
  }
  
  ion-toolbar{
    --background: #ff884b;
  }
  
  .homepage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px;
  }
  .homepage-header h1{
    color: black;
    font-size: 25px;
    font-weight: 600;
    margin-left: 10px;
  }
  
  .editprofile{
    --background: #ff884b;
    --color: #000;
    --border-radius: 10px;
    --border-color: white;
    --border-style: solid;
    --border-width: 1px;
    --padding-top: 10px;
    --padding-bottom: 10px;
    margin-right: 10px;
  }
  
  .editprofile h1{
    color: black;
    font-size: 15px;
    font-weight: 600;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  ion-searchbar.custom {
    --background: #ff884b;
    --color: #000;
    --placeholder-color: #000;
    --icon-color: #000;
    --clear-button-color: #000;
  
    --border-radius: 5px;
  }
  
  ion-searchbar.ios.custom {
    --cancel-button-color: #000;
  }
  
  ion-searchbar.md.custom {
    --cancel-button-color: #000;
  }
  
  .friendlist-page h1{
    color: black;
    font-size: 15px;
    font-weight: 600;
    margin-left: 15px;
  }
  
  .usersAll{
    --background: #ff884b;
    margin-right: 10px;
  }
  
  .usersAll h1{
    color: black;
    font-size: 12px;
    font-weight: 600;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  .channelAll{
    --background: #ff884b;
    margin-right: 10px;
  }
  
  .channelAll h1{
    color: black;
    font-size: 12px;
    font-weight: 600;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  </style>