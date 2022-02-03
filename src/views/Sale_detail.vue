<template>
  <IonPage>
    <IonHeader>
    </IonHeader>
    <IonContent>
{{title}}
  <br/>
{{contract_name}}#{{token_id}}:{{price}}      <IonButton @click="purchase()">purchase</IonButton>
  <br/>
  {{description}}

    </IonContent>
  </IonPage>

</template>

<script>
import {IonHeader, IonContent, IonPage, IonButton,} from '@ionic/vue';
// import {tappaySDK} from "@/mixins/TPD_javascript_sdk"
const default_sale = {
  title:'ccb 發行 ntf',
  description:'rare dog',
  price:12000,
}
// const default_nft  = {
//   // todo
// }
export default {
  name: "Sale_detail",
  data(){
    return {
      title:default_sale.title,
      price:default_sale.price,
      description:default_sale.description,
      contract_name:'yolo cat',
      // card
      card_number:'',
      //sdk
      TPDirect:{}
    }
  },
  props:['token_id'],
  components: {IonHeader, IonContent, IonPage, IonButton,},
  // mixins:[tappaySDK,],
  methods: {
    purchase(){
      // TODO redirect to payment page
    }
  },
  mounted(){
    // fetch the sale from our app
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/sale?contract_address=${this.$route.params.contract_address}&token_id=${this.token_id}`, requestOptions)
        .then(response => response.json().then(json => {
          for (var key in default_sale) {
            this[key] = json[key]
          }
        }))
    // TODO fetch the contract from ether scan block by nft api
    // init TPD js sdk
    window.TPDirect.setupSDK(123166, 'partner_2ASaDPKoiVGntvKotGblzgrrqolDyNHXCXkuAohWEoLJ1aSmsaa7hlVS', 'sandbox')
    (function (){
      this.TPDirect = window.TPDirect
    })
  },
}
</script>