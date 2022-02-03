<template>
	<div class="banner-img">
		<i>
			<img src="../imgs/return-icon.svg" alt="" class="return-icon" @click="back_to_page1()"/>
		</i>
     <h2 class="sign-up-str">註冊帳號</h2>
    <div class="sign-up-layout">
      <div class="input-num">
        <input id="手機號碼" class="input-text-num" placeholder="手機號碼" type="tel" v-model="mob" v-on:change="changeHandler()" autocomplete="tel" pattern="\+886\d{9}|0\d{9}|886\d{9}"  />
      </div>
      <!-- <ion-button @click="sendOTP()">
          寄送登入密碼到手機
        </ion-button> -->
      <div class="input-ver-code">
        <input id="OTP" type="text" placeholder="驗證碼" class="input-text-num"  v-model="otp" autocomplete="one-time-code" pattern="\d*" />
      </div>
      <div class="login-btn-item">
        <button type="button" class="login-btn" @click="verify_password()">登入</button>
      </div>
    </div>
	</div>
</template>

<script >
import {
  loadingController,
  } from '@ionic/vue';
import router from "../../router";
import "./login.css";
import {facebookSDK} from "../../mixins/facebook_javascript_sdk"
export default {
  name: 'Login',
  mixins:[facebookSDK,],
  data(){
    return {
      otp:"",
      mob:"",
      mob_country_code:'886',
      fetch_send_otp_count:0,
    }
  },

  methods: {
    async changeHandler(){
      this.mob = this.mob.trim()
      if (this.mob.slice(0,4)==='+886'){this.mob='0'+this.mob.slice(4)}
      else if (this.mob.slice(0,3)==='886'){this.mob='0'+this.mob.slice(3)}

      if(this.mob.length===10 && this.fetch_send_otp_count<2){
        const loading = await loadingController
            .create({
              cssClass: 'my-custom-class',
              message: '寄送簡訊到:'+this.mob,
              duration: 9999*1000,
            });

        await loading.present();

        const response = await this.sendOTP(this.mob)
        loading.dismiss()
          if (response.status === 200) {
            null
          } else if (response.status === 422) {
            response.text().then(result => alert(result))
          } else if (response.status === 502) {
            alert('server warm up, so time out. plz resend')
          }
        this.fetch_send_otp_count++
      }
    },
    sendOTP: function (mob) {
      var formdata = new FormData();
      formdata.append("mob", mob);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/send-OTP`, requestOptions)
          .then(response => {return response})

    },
    fetch_verify_OTP({mob, otp}={}){
      var formdata = new FormData();
      formdata.append("mob", mob);
      formdata.append("password", otp);

      var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/verify-OTP`, requestOptions)
    },
    fetch_get_member(uuid){

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member/read?member_id=${uuid}`, requestOptions)
    },
    fetch_post_member({member_id,mob,sexuality,username,birth_datetime,mob_country_code,email,image_url}={}){

      var formdata = new FormData();
      formdata.append("member_id", member_id);
      formdata.append("mob", mob);
      if(sexuality) formdata.append("sexuality", sexuality);
      if(username) formdata.append("username", username);
      if(birth_datetime) formdata.append("birth_datetime", birth_datetime);
      if(mob_country_code) formdata.append("mob_country_code", mob_country_code);
      if(email) formdata.append("email", email);
      if(image_url) formdata.append("image_url", image_url);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member/create`, requestOptions)
    },
    async verify_password() {
      const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            message: '登入中',
            duration: 9999*1000,
          });

      await loading.present();

      var facebook_user_id
      const _this = this
      // api a
      this.FB.getLoginStatus(function (response_a) {
        facebook_user_id = response_a.authResponse.userID
        // api b
        _this.FB.api(
            `/${facebook_user_id}/`,{  fields: 'name, email, picture' },
            function (response_b) {
              var sexuality,username,birth_datetime,email,image_url
              if (response_b && !response_b.error) {
                sexuality = response_b.gender //Note diff naem  in our is sexyality in fb is gender
                birth_datetime = response_b.birthday
                username = response_b.name
                email = response_b.email
                image_url = response_b.picture.data.url
              }
              // api c
              _this.fetch_verify_OTP({
                mob: _this.mob, otp: _this.otp,
              }).then(response_c => {
                if (response_c.status === 200) {
                  //check user exist if not create
                  _this.fetch_get_member(facebook_user_id).then(response_d=>{
                    if (response_d.status===404){
                      _this.fetch_post_member({member_id:facebook_user_id,mob:_this.mob,
                        sexuality:sexuality,username:username,birth_datetime:birth_datetime,
                        mob_country_code:_this.mob_country_code,email:email,image_url:image_url
                      }).then(response_e=>{
                        if (response_e.status===200){
                          router.replace('/').then(() => {
                            //end2 the loading img
                            loading.dismiss()
                            window.location.reload()
                          })
                        }
                        else {
                          response_e.json().then(json => {
                            //end3 the loading img
                            loading.dismiss()
                            alert(json.message)
                          })
                        }

                      })
                    }
                    else if(response_d.status===200) {
                      router.replace('/').then(() => {
                        //end1 the loading img
                        loading.dismiss()
                        window.location.reload()
                      })
                    }
                  })
                }
                else if (response_c.status === 401) {
                  response_c.json().then(json => {
                    //end4 the loading img
                    loading.dismiss()
                    alert(json.message)
                  })
                }
              })
            }
        )
      });
    },
    back_to_page1(){
      router.replace('/login_select_way').then(()=>{window.location.reload()})
    }
  },
    async mounted(){
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(1000);
      var facebook_user_id
      await this.FB.getLoginStatus(function(response) {
        facebook_user_id = response.authResponse.userID
      });

      this.fetch_get_member(facebook_user_id).then(response=> {
        if (response.status === 200) {
          router.replace('/').then(() => {
            window.location.reload()
          })
        }
      })
    }, //TODO check login status if loging redirect to main page
}
</script>