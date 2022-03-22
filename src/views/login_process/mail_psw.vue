<template>
  <IonLabel>註冊信箱</IonLabel>
  <IonInput v-model="email" autocomplete="email" clearInput="true" type="email"/>
  <IonLabel>密碼</IonLabel>
  <IonInput v-model="password" autocomplete="new-password" type="password"/>
  <IonButton @click="signin()">
    登入
  </IonButton>
  <br/>
  <IonLabel :color="color_of_password2" >密碼確認</IonLabel>
  <IonInput v-model="password2" autocomplete="new-password" type="password" />
  <IonButton :disabled="!is_password_same" @click="signup">
    註冊
  </IonButton>
</template>

<script>
import {IonButton,IonInput, IonLabel} from '@ionic/vue';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import router from "@/router";
export default {
  components: { IonButton,IonInput,IonLabel},
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
            router.push(`/login?email=${this.email}`).then(() => {window.location.reload()})
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
            router.push(`/login?email=${this.email}`).then(() => {window.location.reload()})
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
  computed:{
    color_of_password2(){
      if(this.is_password_same && this.password!=='' ){
        return ''
      }else{
        return 'danger'
      }
    },
    is_password_same(){
      return this.password===this.password2
    }
  }
}
</script>