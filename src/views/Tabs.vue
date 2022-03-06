<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" className="tab-bar">
        <ion-tab-button tab="tab0" @click="push_to_tab(0)" className="tab-button">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Tab 0</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" @click="push_to_tab(1)" className="tab-button">
          <ion-icon :icon="storefrontOutline"></ion-icon>
          <ion-label>商店</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" @click="push_to_tab(2)" disabled="disabled" className="tab-button">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" @click="push_to_tab(3)" className="tab-button">
          <ion-icon :icon="personCircleOutline" />
          <ion-label>個人</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, toastController ,loadingController} from '@ionic/vue';
import {ellipse, homeOutline, storefrontOutline, personCircleOutline} from 'ionicons/icons';
import './Tabs.css';
import {facebookSDK} from "@/mixins/facebook_javascript_sdk"
import router from "@/router";
export default {
  name: 'Tabs',
  mixins:[facebookSDK,],
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  methods: {
    async openToast() {
      const toast = await toastController
          .create({
            message: '點選分享，加入主畫面，新增ccb.app',
            duration: 3000
          })
      return toast.present();
    },
    push_to_page1(){
      router.replace('/login_select_way').then(()=>{window.location.reload()})
    },
    push_to_tab(tab_num){
      router.push(`/tabs/tab${tab_num}?member_id=${this.member_id}`)
      },
  },
  data(){
    return {
        member_id: null,
    }
  },
  setup() {
    return {
      ellipse,
      personCircleOutline,
      storefrontOutline,
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
  watch: {
    'member_id': function (val) {
      if (val===undefined || val === null){
        this.push_to_page1()
      }
    }
  },
  async mounted() {
    //check login
    const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: '寄送簡訊到:'+this.mob,
          duration: 9999*1000,
        });

    await loading.present();

    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(1300);

    const _this = this
    await this.FB.getLoginStatus(function(response) {
      _this.member_id =  response.authResponse ? response.authResponse.userID : undefined
    });
    loading.dismiss()
  }

}
</script>