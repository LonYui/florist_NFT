<template>
  <IonPage>
    <IonContent>
      <IonButton @click="blindbox_purchase()">mint</IonButton>
      <lottie :options="defaultOptions" :height="400" :width="400" @animCreated="handleAnimation"  v-show="anim?!anim._idle:false"
      />
    </IonContent>
  </IonPage>
</template>

<script>
import { IonContent, IonPage, IonButton
  ,modalController} from '@ionic/vue';
import Lottie from 'vue-lottie';
import * as animationData from '@/views/animations/98267-bicycle.json';
import nft_detail_modal from '@/components/tab0/nft_detail_modal'

var publicPath = process.env.BASE_URL;
animationData.assets.forEach(item => { item.u = publicPath + 'animations/HomepageHeader/images/'; });
// Had to store my animation Json and images inside of the "public" folder
// Images weren't loading for me, so I'm using the below method to update their location or 'u' value correctly


export default  {
  name: 'Tab0',
  components: { IonContent, IonPage, IonButton,Lottie },
  props:['member_id'],
  data(){
    return {
      defaultOptions: {
        animationData: animationData.default,
        loop:false,
        autoplay:false,
      },
      animationSpeed: 1,
      anim: null,
      blind_box_prize:{
        contract_address:null,
        token_id:null,
      }
    }
  },
  methods:{

    async blindbox_purchase(){
      let response_status = null
      let _this = this
      this.fetch_blindbox_purchase(this.member_id).then(response => {
        response_status = response.status
        if (response.status ===200){
          response.json().then(json=>{
            _this.blind_box_prize.contract_address = json['contract_address']
            _this.blind_box_prize.token_id = json['token_id']
          })
        }else if (response.status ===400){
          response.json().then(json=>{
            alert(json['message'])
          })
        }
      })
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(2000);
      if (response_status===200){
        this.anim.play()
      }
    },

    fetch_blindbox_purchase(buyer_id){
      var formdata = new FormData();
      formdata.append("buyer_id", buyer_id);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      return fetch(`https://ccb-rock-backed-dev.herokuapp.com/blindbox/ccpoint_purchase`, requestOptions)
    },

    handleAnimation: function (anim) {
      this.anim = anim;
      this.anim.addEventListener('complete', () => this.anim_complete_handller())
    },

    anim_complete_handller(){
      this.openModal(this.blind_box_prize.contract_address,this.blind_box_prize.token_id)
    },

    async openModal(contract_address,token_id) {
      const modal = await modalController
          .create({
            component: nft_detail_modal,
            swipeToClose:true,
            componentProps: {
              address:contract_address,
              token_id:token_id,
            },
          })
      return modal.present();
    },
  },
}
</script>