<template>
  <ion-menu menu-id="root" content-id="tabs" >
    <ion-header>
      <IonToolbar>
        <ion-title>
<!--          Start Menu-->
        </ion-title>
      </IonToolbar>
    </ion-header>
    <ion-content>
      <ion-list>
<!--        <ion-item>Menu Item</ion-item>-->
<!--        <ion-item>Menu Item</ion-item>-->
<!--        <ion-item>Menu Item</ion-item>-->
<!--        <ion-item>Menu Item</ion-item>-->
        <ion-item><a v-bind:href="除值url">除值</a></ion-item>
<!--        <ion-item><a href="http://terms.roarrr.io/">服務條款</a></ion-item>-->
<!--        <ion-item><a href="http://terms.roarrr.io/">服務條款</a></ion-item>-->
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {IonMenu,IonContent,IonList,IonItem ,IonToolbar,IonHeader,IonTitle} from '@ionic/vue';
export default {
  components:{IonMenu,IonContent,IonList,IonItem ,IonToolbar,IonHeader,IonTitle},
  name: "ccb_menu",
  props:['member_id'],
  computed:{
    除值url(){
      return `/spend_how_much?member_id=${this.member_id}`
    }
  }
}
</script>


<style scoped>
/*.ion-menu{*/
/*  --max-height:50px;*/
/*}*/
</style>