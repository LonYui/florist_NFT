<template>
	<div class="banner-img">
		<i>
			<img src="../imgs/return-icon.svg" alt="" class="return-icon" @click="back_to_page1()"/>
		</i>
     <h2 class="sign-up-str">註冊帳號</h2>
    <div class="sign-up-layout">
      <div class="input-num">
        <input id="手機號碼" class="input-text-num" placeholder="手機號碼" type="tel" v-model="member.mob" v-on:change="changeHandler()" autocomplete="tel" pattern="\+886\d{9}|0\d{9}|886\d{9}"  />
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
import {facebookSDK} from "@/mixins/facebook_javascript_sdk"
import { getAuth
  // ,getRedirectResult, FacebookAuthProvider
} from "firebase/auth";
import {use_member} from "../../mixins/member"
export default {
  name: 'Login',
  mixins:[use_member,facebookSDK],
  data(){
    return {
      otp:"",
      fetch_send_otp_count:0,
      auth:getAuth(),
      loading:null,
    }
  },

  methods: {
    async changeHandler(){
      this.member.mob = this.member.mob.trim()
      if (this.member.mob.slice(0,4)==='+886'){this.member.mob='0'+this.member.mob.slice(4)}
      else if (this.member.mob.slice(0,3)==='886'){this.member.mob='0'+this.member.mob.slice(3)}

      if(this.member.mob.length===10 && this.fetch_send_otp_count<2){
        const loading = await loadingController
            .create({
              cssClass: 'my-custom-class',
              message: '寄送簡訊到:'+this.member.mob,
              duration: 9999*1000,
            });

        await loading.present();

        const response = await this.sendOTP(this.member.mob)
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
    sendOTP: function (mob_to_otp) {
      var formdata = new FormData();
      formdata.append("mob", mob_to_otp);

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
    async verify_password() {
      const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            message: '登入中',
            duration: 9999*1000,
          });

      await loading.present();

      const _this = this
      /* verify otp*/
      this.fetch_verify_OTP({
        mob: this.member.mob, otp: this.otp,
      }).then(response_c => {
        if (response_c.status === 200) {
          /*check user exist if not create*/
          _this.fetch_get_member(_this.auth.currentUser.uid).then(response_d => {
            if (response_d.status === 404) {
              _this.fetch_post_member(_this.member).then(response_e => {
                if (response_e.status === 200) {
                  router.replace('/').then(() => {
                    loading.dismiss()
                    window.location.reload()
                  })
                } else {
                  response_e.json().then(json => {
                    loading.dismiss()
                    alert('create member error .msg:'+json.message)
                  })
                }

              })
            }
            else {
              loading.dismiss()
              alert('error happen plz contack d5269357812@gmail.com')
            }
          })
        }
        else if (response_c.status === 401) {
          response_c.json().then(json => {
            loading.dismiss()
            alert(json.message)
          })
        }
        else{
          alert('some error happen contack d5269357812@gmail.com')
        }
      })
    },
    back_to_page1(){
      router.replace('/login_select_way').then(()=>{window.location.reload()})
    },
    // TODO
    // async get_fb_data(){
    //   const _this=this
    //   this.FB.api(
    //       `/${this.auth.currentUser.uid}/`,{  fields: 'name, email, picture' },
    //       function (response_b) {
    //         // var sexuality,username,birth_datetime,email,image_url
    //         if (response_b && !response_b.error) {
    //           _this.member.sexuality = response_b.gender //Note diff naem  in our is sexyality in fb is gender
    //           _this.member.birth_datetime = response_b.birthday
    //           _this.member.username = response_b.name
    //           _this.member.email = response_b.email
    //           _this.member.image_url = response_b.picture.data.url
    //         }
    //       }
    //   )
    //
    // }
  },
  async created() {
    const _this = this
    const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: '',
          duration: 9999*1000,
        });
    await loading.present();
    this.auth.onAuthStateChanged(
        user => {
          this.fetch_get_member(user.uid).then(response => {
            if (response.status === 200) {
              router.replace('/').then(() => {window.location.reload()})
            }else{
              _this.member.member_id = user.uid
              // start otp process
              // TODO fix thisss!!!
              // _this.get_fbdata
            }
          })
          loading.dismiss()
        }
    )
  }

}
</script>