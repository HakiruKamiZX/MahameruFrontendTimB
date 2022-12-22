<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>User Profile</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="container">
                <img src="/assets/images/placeholder_user.png" alt=""
                width="150" height="150" class="rounded-img">
                <div class="input-group">
                    <ion-label>Username</ion-label>
                    <ion-input v-model="user['username']" :value="`${user['username']}`"></ion-input>
                </div>
                <div class="input-group">
                    <ion-label>Pin</ion-label>
                    <ion-input type="password" v-model="user['pin']"
                    :value="`${user['pin']}`"></ion-input>
                </div>
                <div class="input-group">
                    <ion-label>Phone Number</ion-label>
                    <ion-input type="tel" v-model="user['phone']"
                    :value="`${user['phone']}`"></ion-input>
                </div>
                <div class="btn-action">
                    <button type="submit" @click="log()">Save Changes</button>
                </div>
                <div class="btn-action">
                    <button type="button">Delete User</button>
                </div>
                <form action="">
                </form>
            </div>
        </ion-content>
    </ion-page>
</template>
<style>
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
.rounded-img{
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
}
.input-group {
    margin-bottom: 12px;
    padding: 12px;
    border-radius: 6px;
    text-align: left;
    background-color: #FFD384;
}

.input-group ion-label {
    display: inline-block;
    margin: 4px 0;
}

.input-group ion-input {
    border: 1px solid rgba(0, 0, 0, 0.4);
}

.btn-action {
    display: inline-block;
    margin: 0 32px;
    padding: 12px;
    border-radius: 6px;
    background-color: #ff884b;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}
.btn-action button{
    color: black;
    background-color: inherit;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
 } from '@ionic/vue';

export default defineComponent({
    name: 'UserProfile',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
    },
    data: function () {
        return {
            user: {
                username: 'Unknown',
                pin: '123456',
                phone: '01284318104'
            }
        }
    },
    methods: {
        log() {
            if (this.user) { 
                alert(`data: ${JSON.stringify(this.user)}`);
            }
        }
    }
})
</script>