<template>
  <div style="background:#F5EC7A;width:100%;height:100%;">
      <img src="../imgs/page1_topbar.png" class="top-img" alt="倒反摩天輪">
      <img src="../imgs/ccb_logo.png" class="logo-img" alt="mumu！汪汪!!">
			<button class="fb-btn" @click="log_in_with_facebook()">
				<img src="../imgs/fb-icon.svg" class="fb-icon" alt="FB icon"/>
				使用Facebook登入
			</button>
      <img src="../imgs/page1_buttonbar.png" class="button-img" alt="摩天輪">
		</div>
</template>

<script>
// import { IonContent,  IonPage, IonButton, IonImg, IonIcon } from '@ionic/vue';
import {
   callOutline,logoFacebook
} from "ionicons/icons";
import router from "../../router";
import {facebookSDK} from "../../mixins/facebook_javascript_sdk"
import "./login_select_way.css";

export default {
  name: "login_select_way",
  // components: {IonContent, IonPage, IonButton, IonImg, IonIcon},
  mixins:[facebookSDK,],
  setup() {
    return {callOutline, logoFacebook}
  },
  methods: {
    log_in_with_facebook(){
      //TODO what:why not _this work?
      let _statusChangeCallback=this.statusChangeCallback
      this.FB.login(function(response) {
        _statusChangeCallback(response)
      }, {scope: 'public_profile,email'});
      //TODO  wait fb pass permision add email, birthday, gender

    },
    statusChangeCallback(response){
      if (response.status === 'connected') {
        // Logged into your webpage and Facebook.
        router.replace('/login').then(()=>{window.location.reload()})
      } else {
        // The person is not logged into your webpage or we are unable to tell.
      }
    }
  },
}
</script>