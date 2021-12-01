<template>
  <IonPage>

    <IonContent fullscreen >
        <IonImg v-bind:src="null" />
        <IonButton  >
          <ion-icon :icon="logoFacebook" @click="logInWithFacebook"></ion-icon>
          使用facebook登入
        </IonButton>

    </IonContent>

  </IonPage>
</template>

<script>
import { IonContent,  IonPage, IonButton, IonImg, IonIcon } from '@ionic/vue';
import {
   callOutline,logoFacebook
} from "ionicons/icons";
import router from "../../router";


export default {
  name: "login_select_way",
  components:{ IonContent,  IonPage, IonButton, IonImg, IonIcon},
  setup() {
    return {chowLogo,callOutline,logoFacebook}
  },
  methods:{
    async logInWithFacebook(){
      FB.login(function(response) {
        this.statusChangeCallback(response)

      }, {scope: ''});
    },
    // from https://medium.com/@mrjohnkilonzi/a-simple-facebook-login-component-in-vue-js-5ee71997bb97 25 clap 2020,Jan 13
    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "722300725407829", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: process.env.facebook-javascript-version
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
          fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },
    statusChangeCallback(response) {
      if (response.status === 'connected') {
        router.push('/')
      } else {
        null
      }
    }

},
  created() {
    this.initFacebook()
    const statusChangeCallback = this.statusChangeCallback
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
}
</script>

<style scoped>

</style>