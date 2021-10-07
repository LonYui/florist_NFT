<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>餐廳搜尋</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2" disabled="true">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3" disabled="true">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="js">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import router from "../router";

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  },
  mounted() {
    console.log('trigger moounted')
    if (!get_cookie('token')){
      router.push('/login');
      console.log('no token find in cookie')
      return
    }
    verify_token(get_cookie('token'),this)


    function get_cookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function verify_token(token){
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://ccb-auth-test-cors.herokuapp.com/verify-token?token="+encoder(token), requestOptions)
          .then(response => {
            console.log('verify-token get response')
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