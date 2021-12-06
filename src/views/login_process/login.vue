<template>
	<div class="banner-img">
		<i>
			<img src="../imgs/return-icon.svg" alt="" class="return-icon" />
		</i>
		<h2 class="sign-up-str">註冊帳號</h2>
		<div class="input-num">
<!--      todo listen on type changed cheeck format and send every 5 sec, constraint 2 max:2 times for calling api . -->
			<input id="手機號碼" class="input-text-num" placeholder="手機號碼" v-model="mob" />
		</div>
		<!-- <ion-button @click="sendOTP()">
        寄送登入密碼到手機
      </ion-button> -->
		<div class="input-ver-code">
			<input id="OTP" placeholder="驗證碼" class="input-text-num" v-model="otp"/>
		</div>
		<div class="login-btn-item">
			<button type="button" class="login-btn" @click="verify_password()">登入</button>
		</div>
	</div>
</template>

<script >
// import {
//   IonTextarea,IonButton,
//   IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import router from "../../router";
import "./login.css";

export default {
  name: 'Login',
  // components: {
  //   IonTextarea, IonButton,
  //   IonHeader, IonToolbar, IonTitle, IonContent, IonPage
  // },
  data(){
    return {
      otp:"",
      mob:""
    }
  },
  methods: {
    sendOTP: function () {
      const mob = document.getElementById('手機號碼').value
      var formdata = new FormData();
      formdata.append("mob", mob);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/send-OTP`, requestOptions)
          .then(response => {
            if (response.status === 200) {
              alert('sended to ' + mob)
            } else if (response.status === 422) {
              response.text().then(result => alert(result))
            } else if (response.status === 502) {
              alert('server warm up, so time out. plz resend')
            }
          })
          .catch(error => console.log('error', error));

    },

    async fetch_verifyOTP() {
      var formdata = new FormData();
      formdata.append("mob", this.mob);
      formdata.append("password", this.otp);

      var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
      };

      return fetch("https://ccb-rock-backed-dev.herokuapp.com/verify-OTP", requestOptions)
          .then(response => {
            return response
          })
    },

    async verify_password() {
      const response = await this.fetch_verifyOTP()
      if (response.status === 200) {
        response.json().then(json => {
          console.info('get token and set to cookie[token]' + decoder(json.accesstoken))
          updateStartUrl('.?token='+decoder(json.accesstoken))
          document.cookie = "token=" + decoder(json.accesstoken);
          router.push('/page4')
        })
      } else if (response.status === 401) {
        response.json().then(json=>{
          alert(json.message)
        })
      }

      function decoder(encode_token) {
        return encode_token.slice(0, -7)
      }

      function updateStartUrl(url) {
        var myDynamicManifest = {
          "name": "ccb-rocks-prod",
          "theme_color": "#4DBA87",
          "start_url": ".",
          "display": "standalone",
          "background_color": "#000000"
        }
        // TODO can't read the start url, now start url = current url .
        myDynamicManifest.start_url = url
        const stringManifest = JSON.stringify(myDynamicManifest);
        const blob = new Blob([stringManifest], {type: 'application/json'});
        const manifestURL = URL.createObjectURL(blob);
        document.querySelector('#my-manifest-placeholder').setAttribute('href', manifestURL);
      }


    }
    // mounted(){} //TODO check login status if loging redirect to main page
  }
}
</script>