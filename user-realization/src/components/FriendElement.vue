<template>
    <a href="/tabs/EditContact" class="item-friend">
        <ion-grid>
            <ion-row>
                <ion-col size="2">
                    <img :src="`assets/images/${data?.img}`" alt="">
                </ion-col>
                <ion-col size="8">
                    <p>{{data?.name}}</p>
                </ion-col>
                <ion-col style="line-height: 70px;">
                    <img src="assets/images/edit.png" width="25" height="25" alt="">
                </ion-col>
            </ion-row>
        </ion-grid>
    </a>
</template>
<style scoped>
.item-friend {
    display: inline-block;
    text-decoration: none;
    color: black;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/vue";

export default defineComponent({
    name: "Tab1Page",
    components: {
        IonGrid,
        IonRow,
        IonCol,
    },
    props: {
        data: Object
    }
});
</script>