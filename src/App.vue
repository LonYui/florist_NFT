<template>
  <ion-app>
<!--    <ccb_menu/>-->
    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDEmB751eDzwcomJ0uF1m18egGPoOKRr7M",
  authDomain: "ccb-pwa-dev.firebaseapp.com",
  projectId: "ccb-pwa-dev",
  storageBucket: "ccb-pwa-dev.appspot.com",
  messagingSenderId: "907380476478",
  appId: "1:907380476478:web:e852bc2473686798ce9f6f"
};

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    // ccb_menu
  },
  data(){
    return {
      firebase_app:initializeApp(firebaseConfig)
    }
  },
  provide:{
    firebase_app:this.firebase_app
  },
});
</script>