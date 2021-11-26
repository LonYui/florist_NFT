<template>
  <IonPage>

    <IonContent fullscreen >
        <IonImg v-bind:src="null" />
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