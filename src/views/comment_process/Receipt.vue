<template>
  <IonPage>
    <IonContent>
      <IonButton>
        <IonIcon slot="end" :icon="cameraOutline"></IonIcon>
        掃描發票
      </IonButton>


      <IonButton>
        驗證發票
      </IonButton>
    </IonContent>
  </IonPage>
</template>

<script>
import {IonPage,  IonContent, IonButton, IonIcon} from '@ionic/vue';
import {cameraOutline} from 'ionicons/icons';

export default {
  name: "Receipt",
  data(){
    return {
      統一編號:'test1234',
      日期:'1234/56/78',
      金額:1000,
      消費清單:[
          {name:'沙拉',price:200},{name:'牛排',price:650},
        {name:'奶酪',price:150}
      ]
    }
  },
  components:{IonPage,  IonContent, IonButton, IonIcon},
  setup() {
    return {
      cameraOutline,
    }
  },
}
</script>