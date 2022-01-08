<template>
  <IonItem  >
    <ion-avatar :slot="message_align">
      <img v-bind:src="image_url" alt="抓不到圖片">
    </ion-avatar>
    <IonLabel>
      <div :class="'ion-text-'+message_align">
        {{ username }}: {{ 訊息 }}
      </div>
    </IonLabel>
  </IonItem>
</template>

<script>
import {IonItem,IonLabel,IonAvatar} from '@ionic/vue';
export default {
  name: "messageItem",
  components:{IonItem,IonLabel,IonAvatar},
  props:['image_url','username','訊息','mob','message_mob'],
  computed:{
    message_align(){
      return this.mob===this.message_mob?'end':'start'
    }
  }
}
</script>
