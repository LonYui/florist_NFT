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
import {
   callOutline,logoFacebook
} from "ionicons/icons";
import router from "../../router";
import "./login_select_way.css";
import { getAuth, signInWithRedirect, FacebookAuthProvider } from "firebase/auth";

export default {
  name: "login_select_way",
  inject:['firebase_app'],
  data(){
    return{
      provider : new FacebookAuthProvider(),
      auth : getAuth()
    }
  },
  setup() {
    return {callOutline, logoFacebook}
  },
  methods: {
    log_in_with_facebook(){
      signInWithRedirect(this.auth, this.provider)
    },
  },
  created() {
    this.auth.onAuthStateChanged(
        user => {
          if (user) {
            router.push('/login').then(() => {window.location.reload()})
          }
        }
    )
  }
}
</script>