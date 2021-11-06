<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-textarea id="手機號碼">
        手機號碼
      </ion-textarea>
      <ion-button @click="sendOTP()">
        寄送登入密碼到手機
      </ion-button>
      <ion-textarea id="OTP">
        密碼
      </ion-textarea>
      <ion-button @click="verifyOTP()">
        登入
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script >
import { 
  IonTextarea,IonButton,
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import router from "../router";

export default  {
  name: 'Login',
  components: {
    IonTextarea,IonButton,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage
  },
  methods:{
    sendOTP: function(){
      const mob = document.getElementById('手機號碼').value
      var formdata = new FormData();
      formdata.append("mob", mob);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://419neo2er9.execute-api.us-east-2.amazonaws.com/default/send-OTP", requestOptions)
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

    verifyOTP: function(){
      const mob = document.getElementById('手機號碼').value
      const OTP = document.getElementById('OTP').value
      if (!OTP || !mob) {
        alert('手機號碼或簡訊密碼尚未填寫')
      }
      const formdata = new FormData();
      formdata.append("mob", mob);
      formdata.append("password", OTP);

      const requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://ccb-auth-test-cors.herokuapp.com/verify-OTP", requestOptions)
          .then(response => {
            if (response.status===200){
              response.json().then(json=> {
                console.info('get token and set to cookie[token]' + decoder(json.accesstoken))
                document.cookie = "token="+decoder(json.accesstoken);
                updateStartUrl('.?token='+decoder(json.accesstoken))
                // TODO remove the token here
                router.push('/tabs/?token='+decoder(json.accesstoken))
              })
            }
            else if (response.status===401){
              response.text().then(錯誤訊息=>alert(錯誤訊息))
            }

          })
          .catch(error => console.log('error', error));

          function decoder(encode_token) {
            return encode_token.slice(0,-7)
          }

          function updateStartUrl(url){
            var myDynamicManifest = {
              "name": "ccb-rocks-prod",
              "theme_color": "#4DBA87",
              "start_url": ".",
              "display": "standalone",
              "background_color": "#000000"
            }
            myDynamicManifest.start_url = url
            const stringManifest = JSON.stringify(myDynamicManifest);
            const blob = new Blob([stringManifest], {type: 'application/json'});
            const manifestURL = URL.createObjectURL(blob);
            document.querySelector('#my-manifest-placeholder').setAttribute('href', manifestURL);
          }
    },
},
  // mounted(){} //TODO check login status if loging redirect to main page
}
// eslint-disable-next-line no-unused-vars
</script>