<template>
    <IonCard >
    <IonImg style="pointer-events:none"
         :src="image_url" alt="抓不到圖片" />
    </IonCard>
      <IonCardHeader>
      <IonCardTitle>
        {{NFT['title']}}
      </IonCardTitle>
        <IonCardSubtitle>
          #{{token_id_ten}}
        </IonCardSubtitle>
      </IonCardHeader>
  <IonCardContent>
    {{NFT['description']}}
  </IonCardContent>
</template>

<script>
import {use_NFT} from "../../mixins/NFT"
import {IonImg,IonCard, IonCardTitle,IonCardHeader, IonCardSubtitle, IonCardContent} from '@ionic/vue';
export default {
  name: "NFTItem",
  mixins:[use_NFT],
  props:['address','token_id','token_type','key'],
  components:{IonImg,IonCard, IonCardTitle,IonCardHeader,IonCardSubtitle, IonCardContent,},
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
    },
    token_id_ten(){
      return parseInt(this.token_id, 16)
    }
  },
  watch:{
    'token_id':function (){
      const _this = this
      this.fetch_NFT_metadata(this.address,this.token_id).then(response => {
        response.json().then(json => {
          _this.NFT = json
        })
      })
    }
  },
  mounted(){
    const _this = this
    this.fetch_NFT_metadata(this.address,this.token_id).then(response => {
      response.json().then(json => {
        _this.NFT = json
      })
    })
  }
}
</script>
