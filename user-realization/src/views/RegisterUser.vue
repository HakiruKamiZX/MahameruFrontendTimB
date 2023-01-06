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
        <form @submit.prevent="createNewUser()" method="POST" enctype="multipart/form-data">
            <div class="input-group">
            <ion-label>Nickname</ion-label>
            <ion-input type="text" name="nickname" v-model="form['nickname']">
            </ion-input>
        </div>
          <div class="input-group">
            <ion-label>Phone Number</ion-label>
            <ion-input type="tel" name="notelp" v-model="form['notelp']">
            </ion-input>
        </div>
          <div class="input-group">
              <ion-label>Pin</ion-label>
              <ion-input type="password" name="pin" v-model="form['pin']">
            </ion-input>
        </div>
        <div class="input-group">
            <ion-label>Full Name</ion-label>
            <ion-input type="text" name="name" v-model="form['name']">
            </ion-input>
        </div>
        <div>
            <button type="submit" class="button-reg">Register</button>
        </div>
    </form>
    <!-- @click="createNewUser()" -->
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
.input-group {
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 6px;
  text-align: left;
  background-color: #ffd384;
}
.input-group ion-label {
  display: inline-block;
  margin: 4px 0;
}
.input-group ion-input {
  border: 1px solid rgba(0, 0, 0, 0.4);
}

.button-reg {
  color: black;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  background-color: #ff884b;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonLabel,
} from "@ionic/vue";

export default defineComponent({
  name: "RegisterUser",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonLabel,
  },
  data: function () {
    return {
      form: {
        name: "",
        nickname: "",
        notelp: "",
        pin: ""
      },
    };
  },
  methods: {
    log() {
      if (this.form) {
        alert(`data: ${JSON.stringify(this.form)}`);
      }
    },
    async createNewUser() {
        let bodyFormData = new FormData();
        bodyFormData.append("name", this.form["name"]);
        bodyFormData.append("nickname", this.form["nickname"]);
        bodyFormData.append("notelp", this.form["notelp"]);
        bodyFormData.append("pin", this.form["pin"]);
        bodyFormData.append("contact_id", '44')

      await axios.post('http://127.0.0.1:5000/createuser', bodyFormData, {
        transformRequest: (data) => {return data}
      })
        .then((res) => {
          if (res.status == 200){
            window.location.href = '/Home';
          }
      })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
</script>
