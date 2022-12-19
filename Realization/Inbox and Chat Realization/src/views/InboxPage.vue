<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="inboxchat-header">
          <h1>Inbox Chat</h1>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="false">
      <ion-list>
        <div class="searchbar">
          <ion-searchbar showCancelButton="focus" class="custom"></ion-searchbar>
        </div>
      </ion-list>
      <ion-list>
        <div class="chatview">
          <ion-item href="/viewchat">
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <ion-grid>
                <ion-col>
                  <ion-row>
                    <ion-col>
                      <div class="nameuserchat">
                        <h1>Fahreza</h1>
                      </div>
                    </ion-col>
                    <ion-col>
                      <div class="datemessage">
                        <h1>17-09-2022 T 19.30.00</h1>
                      </div>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <div class="messagetext">
                      <h1>Halo!!!</h1>
                    </div>
                  </ion-row>
                </ion-col>
              </ion-grid>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>
      <ion-list>
        <div class="chatview">
          <ion-item href="/viewchat">
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <ion-grid>
                <ion-col>
                  <ion-row>
                    <ion-col>
                      <div class="nameuserchat">
                        <h1>Yohannes</h1>
                      </div>
                    </ion-col>

                    <ion-col>
                      <div class="datemessage">
                        <h1>17-09-2022 T 19.35.00</h1>
                      </div>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <div class="messagetext">
                      <h1>Valorant? -1</h1>
                    </div>
                  </ion-row>
                </ion-col>
              </ion-grid>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>
      <ion-list>
        <div class="chatview">
          <ion-item href="/viewchat">
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <ion-grid>
                <ion-col>
                  <ion-row>
                    <ion-col>
                      <div class="nameuserchat">
                        <h1>Adit</h1>
                      </div>
                    </ion-col>

                    <ion-col>
                      <div class="datemessage">
                        <h1>17-09-2022 T 19.35.00</h1>
                      </div>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <div class="messagetext">
                      <h1>Selasa Jangan lupa ke kampus</h1>
                    </div>
                  </ion-row>
                </ion-col>
              </ion-grid>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>
      <ion-list>
        <div class="chatview">
          <ion-item href="/viewchat">
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <ion-grid>
                <ion-col>
                  <ion-row>
                    <ion-col>
                      <div class="nameuserchat">
                        <h1>Farras</h1>
                      </div>
                    </ion-col>

                    <ion-col>
                      <div class="datemessage">
                        <h1>17-09-2022 T 19.35.00</h1>
                      </div>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <div class="messagetext">
                      <h1>Gas</h1>
                    </div>
                  </ion-row>
                </ion-col>
              </ion-grid>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>

      <ion-list>
        <div class="chatview">
          <ion-item href="/viewchat">
            <ion-avatar slot="start">
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <ion-grid>
                <ion-col>
                  <ion-row>
                    <ion-col>
                      <div class="nameuserchat">
                        <h1>Farras</h1>
                      </div>
                    </ion-col>

                    <ion-col>
                      <div class="datemessage">
                        <h1>17-09-2022 T 19.35.00</h1>
                      </div>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <div class="messagetext">
                      <h1>Gas</h1>
                    </div>
                  </ion-row>
                </ion-col>
              </ion-grid>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button href="/newchat">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonContent, IonList, IonSearchbar, IonAvatar, IonLabel, IonGrid, IonCol, IonRow, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';

export default defineComponent({
  name: 'InboxChat',
  components: {
    IonHeader,
    IonToolbar,
    IonContent, IonList, IonSearchbar, IonAvatar, IonLabel, IonGrid, IonCol, IonRow, IonFab, IonFabButton, IonIcon
  },
  setup() {
    return { add }
  }
});
</script>

<style>
ion-content {
  --ion-background-color: white;
}

ion-toolbar {
  --background: #ff884b;
}

.inboxchat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 5px;
}

.inboxchat-header h1 {
  color: black;
  font-size: 20px;
  font-weight: 300;
  margin-left: 10px;
}

.searchbar {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
}

ion-searchbar.custom {
  --background: #FFD384;
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

.chatview {
  margin-top: 0px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
}

.nameuserchat h1 {
  color: black;
  font-size: 15px;
  font-weight: 700;
  margin-left: 0px;
}

.messagetext h1 {
  color: black;
  font-size: 12px;
  font-weight: 500;
  margin-left: 5px;
}

.datemessage h1 {
  color: black;
  font-size: 10px;
  font-weight: 300;
  margin-left: 15px;
}

ion-fab-button {
  --background: #ff884b;
  --border-radius: 50%;
}
</style>