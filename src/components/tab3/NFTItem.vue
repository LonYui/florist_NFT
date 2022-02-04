<template>
  <IonItem>
    title:{{NFT['title']}}
    <br/>
    discription:{{NFT['description']}}
    <br/>
    <img style="pointer-events:none"
         v-bind:src="NFT['metadata']['image']" alt="抓不到圖片" >
  </IonItem>
</template>

<script>
import {use_NFT} from "../../mixins/NFT"
import {IonItem} from '@ionic/vue';
export default {
  name: "NFTItem",
  mixins:[use_NFT],
  props:['address','token_id','token_type'],
  components:{IonItem},
}
</script>
