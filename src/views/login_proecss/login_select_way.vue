<template>
  <IonPage>

    <IonContent fullscreen className='login-page' >
      <div className='login-img-container'>
        <IonImg className='login-img' v-bind:src="chowLogo" />
      </div>
      <div className='login-button-container'>
        <IonButton className='login-button' onClick={loginClick}  >
          <ion-icon :icon="logoFacebook"></ion-icon>
          使用facebook登入
        </IonButton>
        <br />
        <IonButton className='login-button'  >
          <ion-icon :icon="callOutline"></ion-icon>
          使用手機號碼登入
        </IonButton>
      </div>
      <hr className='login-hr' />

    </IonContent>

  </IonPage>
</template>

<script>
import { IonContent,  IonPage, IonButton, IonImg, IonIcon } from '@ionic/vue';
import {
   callOutline,logoFacebook
} from "ionicons/icons";

import './login_select_way.css';
import chowLogo from './chowLogo.png'

export default {
  name: "login_select_way",
  components:{ IonContent,  IonPage, IonButton, IonImg, IonIcon},
  setup() {
    return {chowLogo,callOutline,logoFacebook}
  }
}
</script>

<style scoped>

</style>