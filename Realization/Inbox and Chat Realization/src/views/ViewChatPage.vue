<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/inbox"></ion-back-button>
                </ion-buttons>
                <ion-title>
                    <div class="viewchat-header">
                        <h1>
                            Fahreza
                        </h1>
                    </div>
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="container" v-for="chat in chatBox" :key="chat.id">
                <div v-if="chat.isPerson">
                    <div class="msg-person">
                        <div class="msg">
                            <p class="chat">
                                {{ chat.message }}
                            </p>
                            <span class="time">{{ chat.time }}</span>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div v-else>
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
        </ion-content>
        <ion-footer>
            <div class="chat-input">
                <div class="input-msg">
                    <ion-input placeholder="Type message" v-model="text">
                    </ion-input>
                </div>
                <div class="btn-send">
                    <ion-button @click="sendMsg(text)">
                        <img src="/assets/images/send.png" alt="">
                    </ion-button>
                </div>
            </div>
            <!-- <form method="get" class="chat-input">
            </form> -->
        </ion-footer>
    </ion-page>
</template>
<style scoped>
ion-toolbar {
    --background: #ff884b;
    --color: black;
    text-align: left;
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

.viewchat-header h1 {
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

.msg-person {
    margin-top: 8px;
    float: left;
    clear: both;
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
<script lang="ts">
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
    data: function () {
        return {
            text: '',

            msgId: 2,
            chatBox: [
                {
                    id: 1,
                    message: 'Hi! Nice to meet you',
                    time: '16:47',
                    isPerson: true
                },
                {
                    id: 2,
                    message: 'Me Too!',
                    time: '16:48',
                    isPerson: false
                }
            ],
        }
    },
    methods: {
        log(msg: string) {
            if (msg) {
                console.log(msg)
            }
        },
        sendMsg(msg: string) {
            if (msg) {
                this.chatBox.push({
                    id: this.msgId++,
                    message: msg,
                    time:
                        `${new Date().getHours()}:${new Date().getMinutes()}`,
                    isPerson: false
                });
            }
            this.text = '';
        }
    }
})
</script>
