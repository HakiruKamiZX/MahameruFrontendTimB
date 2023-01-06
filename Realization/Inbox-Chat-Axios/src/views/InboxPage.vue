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
        <div class="chatview" v-for="chat in chats" :key="chat._id">
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
                        <h1>{{ chat.sender.name }}</h1>
                      </div>
                    </ion-col>
                    <ion-col>
                      <div class="datemessage">
                        <h1>{{ calculateTimeDifference(chat.latest_message.sent) }}</h1>
                      </div>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <div class="messagetext">
                      <h1>{{ chat.latest_message.message }}</h1>
                    </div>
                  </ion-row>
                </ion-col>
              </ion-grid>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button href="/newchat">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonContent, IonList, IonSearchbar, IonLabel, IonCol, IonAvatar, IonGrid, IonPage, IonItem, IonRow, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';
import axios from 'axios';
import moment from 'moment';

export default defineComponent({
  name: 'InboxChat',
  components: {
    IonHeader, IonCol, IonAvatar,
    IonToolbar,
    IonContent, IonList, IonSearchbar, IonGrid, IonRow, IonFab, IonFabButton, IonIcon, IonLabel, IonPage, IonItem,
  },
  data() {
    return {
      add,
      to_telp: "",
      chats: [{
        _id: "",
        latest_message: {
          message: "",
          sent: "",
        },
        sender: {
          name: "",
        },
        sender_id: "",
      }],
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/inbox/<to_telp>=${this.to_telp}`);
        this.chats = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    calculateTimeDifference(sent: string) {
      const sentMoment = moment(sent, "MM/DD/YYYY, HH:mm:ss");
      const currentTime = moment();
      const timeDifference = moment.duration(currentTime.diff(sentMoment)); // Calculate time difference using duration function

      // Format the time difference and return it
      if (timeDifference.asMinutes() < 1) {
        return 'Just now';
      } else if (timeDifference.asHours() < 1) {
        return `${Math.round(timeDifference.asMinutes())} minutes ago`;
      } else if (timeDifference.asDays() < 1) {
        return `${Math.round(timeDifference.asHours())} hours ago`;
      } else {
        return `${Math.round(timeDifference.asDays())} days ago`;
      }
    },
  },

  created() {
    // Timer untuk memperbarui selisih waktu setiap 1 menit
    this.getData();

    setInterval(() => {
      this.chats.forEach((chat: any) => {
        chat.timeDifference = this.calculateTimeDifference(chat.sent);
      });
    }, 60000); // Set interval to 1 minute
  },
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

.image_notstarted img {
  margin-top: 200px;
  margin-bottom: 200px;
  margin-left: 23px;
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
  margin-left: 45px;
  text-align: end;
}

ion-fab-button {
  --background: #ff884b;
  --border-radius: 50%;
}
</style>