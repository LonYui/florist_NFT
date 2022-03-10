<template>
    <IonCard button="true" @click="openModal(address,token_id)">
    <IonImg style="pointer-events:none"
         :src="image_url" alt="抓不到圖片" />
      <IonCardHeader translucent="true">
      <IonCardTitle>
<!--        {{NFT['title']}}-->
      </IonCardTitle>
        <IonCardSubtitle>
          #{{token_id_ten}}
        </IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  <IonCardContent>
<!--    {{NFT['description']}}-->
  </IonCardContent>
</template>

<script>
import {use_NFT} from "../../mixins/NFT"
import {IonImg,IonCard, IonCardTitle,IonCardHeader, IonCardSubtitle, IonCardContent,alertController
,modalController} from '@ionic/vue';
import nft_detail_modal from '@/components/tab0/nft_detail_modal'
export default {
  name: "NFTItem",
  mixins:[use_NFT],
  props:['address','token_id','token_type'],
  components:{IonImg,IonCard, IonCardTitle,IonCardHeader,IonCardSubtitle, IonCardContent,},
  methods:{
    async presentAlert() {
      const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: '',
            subHeader: '',
            message: 'go to opensea',
            buttons: [
              'Cancel',
              {
                text: 'Ok',
                handler: () => {
                  // router.replace(`https://testnets.opensea.io/assets/${this.address}/${this.token_id}`).then(()=>{window.location.reload()})
                  window.open(`https://testnets.opensea.io/assets/${this.address}/${this.token_id_ten}`, '_blank').focus();
                },
              },
            ],
          });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    },
    async openModal(address,token_id) {
      const modal = await modalController
          .create({
            component: nft_detail_modal,
            swipeToClose:true,
            componentProps: {
              address:address,
              token_id:token_id,
            },
          })
      return modal.present();
    },
  },
}
</script>
