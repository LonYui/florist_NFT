<template>
	<div class="banner-img">
		<i>
			<img src="../imgs/return-icon.svg" alt="" class="return-icon" />
		</i>
     <h2 class="sign-up-str">註冊帳號</h2>
    <div class="sign-up-layout">
      <div class="input-num">
        <input id="手機號碼" class="input-text-num" placeholder="手機號碼" v-model="mob" v-on:change="changeHandler()" autocomplete="tel"  />
      </div>
      <!-- <ion-button @click="sendOTP()">
          寄送登入密碼到手機
        </ion-button> -->
      <div class="input-ver-code">
        <input id="OTP" placeholder="驗證碼" class="input-text-num"  v-model="otp" autocomplete="one-time-code"/>
      </div>
      <div class="login-btn-item">
        <button type="button" class="login-btn" @click="verify_password()">登入</button>
      </div>
    </div>
	</div>
</template>

<script >
// import {
//   IonTextarea,IonButton,
//   IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import router from "../../router";
import "./login.css";
import {facebookSDK} from "../../mixins/facebook_javascript_sdk"
export default {
  name: 'Login',
  mixins:[facebookSDK,],
  // components: {
  //   IonTextarea, IonButton,
  //   IonHeader, IonToolbar, IonTitle, IonContent, IonPage
  // },
  data(){
    return {
      otp:"",
      mob:"",
      fetch_send_otp_count:0,
    }
  },

  methods: {
    changeHandler(){
      if(this.mob.length==10 & this.fetch_send_otp_count<2){
        this.sendOTP()
        this.fetch_send_otp_count++
      }
    },
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
    verify_password() {
      var formdata = new FormData();
      formdata.append("mob", this.mob);
      formdata.append("password", this.otp);
      var facebook_user_id
      const _this = this
      this.FB.getLoginStatus(function(response) {
        facebook_user_id = response.authResponse.userID
        formdata.append("facebook_user_id", facebook_user_id);
        _this.FB.api(
            `/${facebook_user_id}/`,
            function (response) {
              if (response && !response.error) {
                // formdata.append('gender',response.gender)
                // formdata.append('birthday',response.birthday)
                formdata.append('fb_name', response.name)
                // formdata.append('email',response.email)
              }
              var requestOptions = {
                method: 'PUT',
                body: formdata,
                redirect: 'follow'
              };
              fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/verify-OTP`, requestOptions)
                  .then(response => {
                    if (response.status === 200) {
                      response.json().then(json => {
                        console.info('get token and set to cookie[token]' + decoder(json.accesstoken))
                        updateStartUrl('.?token=' + decoder(json.accesstoken))
                        document.cookie = "token=" + decoder(json.accesstoken);
                        router.replace('/page4').then(() => {
                          window.location.reload()
                        })

                      })
                    } else if (response.status === 401) {
                      response.json().then(json => {
                        alert(json.message)
                      })
                    }
                  })
            }
        )
      });

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


    },
    fetch_member_mob_by_facebook_user_id(facebook_user_id){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member_mob_by_facebook_user_id?facebook_user_id=${facebook_user_id}`, requestOptions)
          .then(response => {
            return response
          })
    },
  },
    async mounted(){
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(1000);
      var facebook_user_id
      await this.FB.getLoginStatus(function(response) {
        facebook_user_id = response.authResponse.userID
      });

      const response_1 = await this.fetch_member_mob_by_facebook_user_id(facebook_user_id)
      if(response_1.status===200){
        router.replace('/page4').then(()=>{window.location.reload()})
      }
    }, //TODO check login status if loging redirect to main page
}
</script>