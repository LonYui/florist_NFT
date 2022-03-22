<template>
  <div style="background:#F5EC7A;width:100%;height:100%;">
      <img src="../imgs/page1_topbar.png" class="top-img" alt="倒反摩天輪">
      <img src="../imgs/ccb_logo.png" class="logo-img" alt="mumu！汪汪!!">
			<button class="fb-btn" @click="log_in_with_facebook()">
        <IonIcon slot="start" :icon="logoFacebook"/>
				使用Facebook登入
			</button>
    <br/>
			<button class="fb-btn"  @click="push_to('/mail_psw')">
        <IonIcon slot="start" :icon="mailOutline"/>
				使用eamil登入
			</button>
      <img src="../imgs/page1_buttonbar.png" class="button-img" alt="摩天輪">
		</div>
</template>

<script>
import {
   callOutline,logoFacebook,mailOutline
} from "ionicons/icons";
import router from "@/router";
import "./login_select_way.css";
import { getAuth, signInWithRedirect, FacebookAuthProvider } from "firebase/auth";
import { loadingController,IonIcon} from '@ionic/vue';


export default {
  name: "login_select_way",
  inject:['firebase_app'],
  components: {IonIcon},
  data(){
    return{
      provider : new FacebookAuthProvider(),
      auth : getAuth()
    }
  },
  setup() {
    return {callOutline, logoFacebook, mailOutline}
  },
  methods: {
    log_in_with_facebook(){
      signInWithRedirect(this.auth, this.provider)
    },
    push_to(path){
      router.push(path).then(() => {window.location.reload()})
    }
  },
  async created() {
    const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: '',
          duration: 9999*1000,
        });
    await loading.present();
    this.auth.onAuthStateChanged(
        user => {
          if (user) {
            router.push('/login').then(() => {window.location.reload()})
          }
          loading.dismiss()
        }
    )
  }
}
</script>