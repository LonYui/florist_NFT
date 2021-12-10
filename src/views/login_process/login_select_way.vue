<template>
		<div class="banner-img">
			<div class=""></div>  <!-- 這行排版用區塊 不要刪除!! -->
			<button class="fb-btn" @click="log_in_with_facebook()">
				<img src="../imgs/fb-icon.svg" class="fb-icon" alt=""/>
				使用Facebook登入
			</button>
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