<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab0" href="/tabs/tab0" disabled="true">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Tab 0</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="restaurantOutline"></ion-icon>
          <ion-label>餐廳搜尋</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2" disabled="true">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3" >
          <ion-icon :icon="personCircleOutline" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, toastController } from '@ionic/vue';
import {ellipse, homeOutline, restaurantOutline, personCircleOutline} from 'ionicons/icons';
import router from "../router";

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  methods: {
    async openToast() {
      const toast = await toastController
          .create({
            message: '點選分享，加入主畫面，新增ccb.app',
            duration: 8000
          })
      return toast.present();
    },
    get_cookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },
    eraseCookie(name) {
      document.cookie = name + '=; Max-Age=-99999999;';
    },
    fetch_verify_token(token) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      return fetch(`https://${process.env.ccb_rock_backed_domain}/verify-token?token=${encoder(token)}`, requestOptions)
          .then(response => {
            return response
          })
          .catch(error => console.log('error', error));

      function encoder(token) {
        return token + Math.random().toString(36).slice(-7)
      }

    },
},
  data(){
    return {
      mob:null,
    }
  },
  setup() {
    return {
      ellipse,
      personCircleOutline,
      restaurantOutline,
      homeOutline,
    }
  },
  created() {
    // from article https://www.netguru.com/blog/pwa-ios
    // and debug isIos()
    // Detects if device is on iOS
    const isIos = () => {
      return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
          ].includes(navigator.platform)
          // iPad on iOS 13 detection
          || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => window.navigator.standalone && window.clientInformation.standalone

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.openToast()
    }


  },
  async mounted() {
    console.log('trigger moounted')
    if (!this.get_cookie('token') && !this.$route.query.token){
      router.push('/login');
      console.log('no token find in cookie and url')
      return
    }
    else if(!this.get_cookie('token') && this.$route.query.token){
      console.log('update cookie')
      document.cookie = "token="+this.$route.query.token;
    }
    const response = await this.fetch_verify_token(this.get_cookie('token'))
    if (response.status===401){
      response.json().then(json => {
        alert(json.message)
        this.eraseCookie('token')
        router.push('/login')
      })
    }
    else if(response.status===200){
      null
    }

  }

}
</script>