<template>
  <ion-page>
    <ion-content>
      ispayment:{{ispayment}}
      amount:{{amount}}

      <a href="/">
        <h3>
        回到 roarrr app
        </h3>
      </a>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage ,IonContent} from '@ionic/vue';
export default {
  name: "payment_check",
  components:{IonPage ,IonContent},
  data(){
    return {
    }
  },
  props:['amount','ispayment','txn_id'],
}
</script>