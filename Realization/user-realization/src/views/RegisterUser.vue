<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Register User</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="container">
                <h1>Hello, Welcome!</h1>
                <div class="input-group">
                    <ion-label>Username</ion-label>
                    <ion-input type="text" v-model="form['username']">
                    </ion-input>
                </div>
                <div class="input-group">
                    <ion-label>Phone Number</ion-label>
                    <ion-input type="tel" v-model="form['phone']">
                    </ion-input>
                </div>
                <div class="input-group">
                    <ion-label>Pin</ion-label>
                    <ion-input type="password" v-model="form['pin']">
                    </ion-input>
                </div>
                <div class="input-group">
                    <ion-label>FullName</ion-label>
                    <ion-input type="text" v-model="form['fullname']"></ion-input>
                </div>
                <div>
                    <button type="submit" class="button-reg" @click="log()">
                        Register
                    </button>
                </div>
                <!-- <form method="post" @submit="log()">
                </form> -->
            </div>
        </ion-content>
    </ion-page>
</template>
<style scoped>
ion-toolbar {
     --background: #ff884b;
     --color: black;
     text-align: center;
 }
 .container {
     text-align: center;
     box-sizing: border-box;
     padding: 20px 24px;
     background-color: white;
     color: black;
     height: 100%;
 }
 .input-group{
    margin-bottom: 12px;
    padding: 12px;
    border-radius: 6px;
    text-align: left;
    background-color: #FFD384;
 }
 .input-group ion-label{
     display: inline-block;
    margin: 4px 0;
 }
 .input-group ion-input{
    border: 1px solid rgba(0, 0, 0, 0.4);
 }

 .button-reg{
     color: black;
     padding: 12px;
     font-size: 16px;
     border-radius: 6px;
    background-color: #ff884b;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
 }
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonLabel
} from '@ionic/vue';

export default defineComponent({
    name: 'RegisterUser',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonInput,
        IonLabel
    },
    data: function () { 
        return {
            form: {
                username: '',
                pin: '',
                phone: '',
                fullname: ''
            }
        }
    },
    methods: {
        log() {
            if (this.form) { 
                console.log(`data: ${JSON.stringify(this.form)}`);
            }
        }
    }
});
</script>