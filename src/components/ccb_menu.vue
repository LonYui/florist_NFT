<template>
  <ion-menu menu-id="root" content-id="main" >
    <ion-header>
      <IonToolBar>
        <ion-title>Start Menu</ion-title>
      </IonToolBar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {IonMenu,IonContent,IonList,IonItem ,IonToolBar,IonHeader,IonTitle} from '@ionic/vue';
export default {
  components:{IonMenu,IonContent,IonList,IonItem ,IonToolBar,IonHeader,IonTitle},
  name: "ccb_menu",
}
</script>


<style scoped>
/*.ion-menu{*/
/*  --max-height:50px;*/
/*}*/
</style>