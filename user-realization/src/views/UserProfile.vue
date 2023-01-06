<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>User Profile</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="container">
                <form @submit.prevent="updateUser(user['id'])">
                    <img src="/assets/images/placeholder_user.png" alt=""
                    width="150" height="150" class="rounded-img">
                    <div class="input-group">
                        <ion-label>Nickname</ion-label>
                        <ion-input @ionInput="user['nickname']=$event.target.value" :value="`${user['nickname']}`"></ion-input>
                    </div>
                    <div class="input-group">
                        <ion-label>Full Name</ion-label>
                        <ion-input @ionInput="user['name']=$event.target.value" :value="`${user['name']}`">
                        </ion-input>
                    </div>
                    <div class="input-group">
                        <ion-label>Pin</ion-label>
                        <ion-input type="password" @ionInput="user['pin']=$event.target.value"
                        :value="`${user['pin']}`"></ion-input>
                    </div>
                    <div class="input-group">
                        <ion-label>Phone Number</ion-label>
                        <ion-input type="tel" 
                        @ionInput="user['nickname']=$event.target.value"
                        :value="`${user['notelp']}`">
                    </ion-input>
                    </div>
                    <div class="btn-action">
                        <button type="submit">Save Changes</button>
                    </div>
                    <div class="btn-action">
                        <button type="button">Delete User</button>
                    </div>
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
import axios from 'axios';
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
                id: '',
                nickname: 'Unknown',
                name: 'Unknown 1',
                pin: '123456',
                notelp: '01284318104'
            }
        }
    },
    mounted: function () {
      this.getUser(`${this.$route.params.id}`)
    },
    methods: {
        log() {
            console.log();
        },
        getUser(id: string) {
            axios.get(`http://127.0.0.1:5000/user/${id}`)
            .then(res => {
                    this.user = res.data[0]
                    this.user['id'] = id
                }).catch(err => {
                    console.error(err);
                });
        },
        updateUser(id: string) {
            console.log(this.user)
            
            let data = new FormData();
            data.append('name', this.user['name']);
            data.append('nickname', this.user['nickname']);
            data.append('notelp', this.user['notelp']);
            data.append('pin', this.user['pin']);

            axios.put(`http://127.0.0.1:5000/updateuser/${id}`, data, {
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
})
</script>