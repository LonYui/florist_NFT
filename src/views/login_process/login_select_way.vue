<template>
  <IonPage>

    <IonContent fullscreen >
        <IonImg v-bind:src="kabi" />
        <IonButton  >
          <ion-icon :icon="logoFacebook"></ion-icon>
          使用facebook登入
        </IonButton>

    </IonContent>

  </IonPage>
</template>

<script>
import { IonContent,  IonPage, IonButton, IonImg, IonIcon } from '@ionic/vue';
import {
   callOutline,logoFacebook
} from "ionicons/icons";
import kabi from '../imgs/kabi.jpg';

export default {
  name: "login_select_way",
  components:{ IonContent,  IonPage, IonButton, IonImg, IonIcon},
  setup() {
    return {callOutline,logoFacebook,kabi}
  }
}
</script>

<style scoped>

</style>