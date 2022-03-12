<template>
<IonHeader>
  <IonToolbar>
    <IonButton @click="refresh()">
      refresh
    </IonButton>
  </IonToolbar>
</IonHeader>
  <IonContent>
    <IonRow>
      <IonCol>
    <IonImg style="pointer-events:none"
            :src="image_url" alt="抓不到圖片" />
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <h3>{{NFT['title']}}</h3>
        <p>{{NFT['description']}}</p>
      </IonCol>
    </IonRow>
    <a v-bind:href="`https://${process.env.VUE_APP_opensea_domain}/assets/${this.address}/${this.token_id_ten}`">https://{{process.env.VUE_APP_opensea_domain}}/assets/{{address}}/{{token_id_ten}}</a>
  </IonContent>
</template>

<script>
import { IonHeader,IonToolbar,IonContent,IonImg,IonRow,IonCol, IonButton } from '@ionic/vue';
import {use_NFT} from "../../mixins/NFT"
export default {
  name: "nft_detail_modal",
  mixins:[use_NFT],
  components:{ IonHeader,IonToolbar,IonContent,IonImg,IonRow,IonCol,IonButton },
  props:['address','token_id','token_type'],

}
</script>

<style scoped>

</style>