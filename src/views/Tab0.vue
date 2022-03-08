<template>
  <IonPage>
    <IonContent>
      <IonButton @click="blindbox_purchase()">mint</IonButton>
      <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
    </IonContent>
  </IonPage>
</template>

<script>
import { IonContent, IonPage, IonButton } from '@ionic/vue';
import Lottie from 'vue-lottie';
import * as animationData from '@/views/animations/98267-bicycle.json';

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
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1,
      anim: null
    }
  },
  methods:{

    blindbox_purchase(){
      this.fetch_blindbox_purchase(this.member_id).then(response => {
        if (response.status ===200){
          response.json().then(json=>{
            alert(`get #${json['token_id']}`)
          })
          window.location.reload()
        }else if (response.status ===400){
          response.json().then(json=>{
            alert(json['message'])
          })
        }
      })
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
    }
  }
}
</script>