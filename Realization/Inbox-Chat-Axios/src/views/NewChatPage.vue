<template>
    <ion-page>
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
                    <ion-label position="stacked">Penerima</ion-label>
                    <ion-input class="atas" placeholder="Tujuan Penerima" v-model="to_telp"></ion-input>
                </ion-item>
            </ion-list>
            <ion-list>
                <div class="container" v-for="chat in chatBox" :key="chat.id">
                    <div v-if="chat.id >= 1">
                        <div class="msg-you">
                            <div class="msg">
                                <p class="chat">
                                    {{ chat.message }}
                                </p>
                                <span class="time">{{ chat.time }}</span>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </ion-list>
        </ion-content>
        <ion-footer>
            <div class="chat-input">
                <div class="input-msg">
                    <ion-input placeholder="Type message" v-model="message">
                    </ion-input>
                </div>
                <div class="btn-send">
                    <ion-button @click="sendMsg(message)">
                        <img src="/assets/images/send.png" alt="">
                    </ion-button>
                </div>
            </div>
            <!-- <form method="get" class="chat-input">
            </form> -->
        </ion-footer>
    </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonInput,
    IonButton,
    IonBackButton,
    // IonIcon
} from "@ionic/vue";
export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonToolbar,
        IonHeader,
        IonInput,
        IonButton,
        IonBackButton,
        // IonIcon
    },

    data() {
        return {
            to_telp: '',
            message: '',
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
            from_telp: '0878001',

            Id: 1,
            chatBox: [
                {
                    id: 0,
                    to_telp: '',
                    message: '',
                    time: '',
                }
            ],
        }
    },

    methods: {
        sendMsg(message: string) {
            if (!this.message || !this.to_telp) {
                alert('Tolong Lengkapi Section yang tersedia');
                return;
            }
            this.chatBox.push({
                id: this.Id++,
                to_telp: this.to_telp,
                message: this.message,
                time:
                    `${new Date().getHours()}:${new Date().getMinutes()}`,
            });

            let chats = {
                from_telp: this.from_telp,
                to_telp: this.to_telp,
                message: this.message,
                sent: this.time,
            }
            this.message = '',

                console.log(chats)
            axios.post("http://127.0.0.1:5000/sendchat", chats)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
});
</script>

<style scoped>
ion-toolbar {
    --background: #ff884b;
    --color: black;
    text-align: left;
}

.atas {
    --background: #FFD384;
    margin-top: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
}

ion-input {
    --background: #FFD384;
    display: inline-block;
}

ion-content {
    --background: white;
}

ion-footer {
    background-color: white;
}

ion-button {
    --background: #FFD384;
    padding: 0;
}

.newchat-header h1 {
    color: black;
    font-size: 20px;
    font-weight: 300;
    margin-left: 70px;
    margin-right: 70px;
    margin-bottom: 20px;
}

.container {
    box-sizing: border-box;
    padding: 8px 16px;
    color: black;
}

.msg {
    width: fit-content;
    max-width: 220px;
    background-color: #FFD384;
    border-radius: 8px;
    padding: 0 8px;
}

.msg-you {
    margin-top: 8px;
    float: right;
    clear: both;
}

.chat {
    font-size: 14px;
    margin-right: 8px;
    float: left;
}

.time {
    color: rgba(0, 0, 0, 0.5);
    line-height: 45px;
    font-size: 10px;
    float: right;
}

.clearfix {
    clear: both;
}

.chat-input {
    padding: 8px;
    display: flex;
    flex-direction: row;
}

.input-msg {
    padding: 4px;
    flex: 5;
    color: black;
}
</style>
