<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding"> {{ price }}
  sell {{seller_id}}
  <br/>
  buyer {{member_id}}
  buyer balance : {{buyerbalance}} CCpoint
    <br/>
    after purchase balance = {{buyerbalance - price}} CCpoint
    <IonButton>交易(verify otp)</IonButton>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ccpoint_spend_modal',
  props: [
      'title',
    'price',
    'member_id',
    'seller_id',],
  data() {
    return {
      buyerbalance: 10000,
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar,IonButton },
});
</script>