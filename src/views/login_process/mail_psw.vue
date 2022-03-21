<template>
  <IonLabel>帳號</IonLabel>
  <IonInput v-model="email" />
  <IonLabel>密碼</IonLabel>
  <VuePassword v-model="password" />
  <IonButton @click="signin()">
    登入
  </IonButton>
  <IonLabel>密碼確認</IonLabel>
  <VuePassword v-model="password2" />
  <IonButton :disabled="password2!=password">
    註冊
  </IonButton>
</template>

<script>
import VuePassword from 'vue-password';
import {IonButton,IonInput, IonLabel} from '@ionic/vue';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import router from "@/router";
export default {
  components: {VuePassword, IonButton,IonInput,IonLabel},
  name: "mail_psw",
  data(){
    return{
      auth:getAuth(),
      email:'',
      password:'',
      password2:'',
    }
  },
  methods:{
    signin(){
      signInWithEmailAndPassword(this.auth, this.email, this.password)
          .then(() => {
            // Signed in
            // const user = userCredential.user;
            router.push('/login').then(() => {window.location.reload()})
            // ...
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
          });
    },
    signup(){
      createUserWithEmailAndPassword(this.auth, this.email, this.password)
          .then(() => {
            // Signed in 
            // const user = userCredential.user;
            router.push('/login').then(() => {window.location.reload()})
            // ...
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
          });
    }
  },

}
</script>