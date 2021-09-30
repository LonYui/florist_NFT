<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      hello {{ user_mob }}
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import router from "../router";

export default  {
  name: 'Home',
  data(){
      return {user_mob:'world'}
  },
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  mounted() {
    if (!get_cookie('token')){
      router.push('/login');
      return
    }
    verify_token(get_cookie('token'),this)


    function get_cookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function verify_token(token,component){
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://ccb-auth-test-cors.herokuapp.com/verify-token?token="+encoder(token), requestOptions)
          .then(response => {
            if (response.status===200){
              response.json().then(json => {
                component.user_mob = json.mob
              })
            }
            if (response.status===401){
              response.json().then(json => {
                alert(json.message)
                eraseCookie('token')
                router.push('/login')
              })
            }
          })
          .catch(error => console.log('error', error));


      function encoder(token) {
        return token + Math.random().toString(36).slice(-7)
      }

      function eraseCookie(name) {
        document.cookie = name+'=; Max-Age=-99999999;';
      }


    }
  }
}
</script>