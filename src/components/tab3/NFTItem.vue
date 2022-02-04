<template>
  <IonItem>
    title:{{NFT['title']}}
    <br/>
    discription:{{NFT['description']}}
    <br/>
    <img style="pointer-events:none"
         v-bind:src="image_url" alt="抓不到圖片" >
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
  computed:{
    image_url() {
      // check is ipfs?
      const regex_http = /^https:\/\//
      const regex_ifps = /^ipfs:\/\//
      if (regex_ifps.test(this.NFT['metadata']['image'])) {
        // is -> use hardcode source1:
        return this.NFT['metadata']['image'].replace('ipfs://','https://cloudflare-ipfs.com/ipfs/')
      }
      // check is https
      else if (regex_http.test(this.NFT['metadata']['image'])) {
        //is return
        return this.NFT['metadata']['image']
      } else {
        return -1
      }
    }
  }
}
</script>
