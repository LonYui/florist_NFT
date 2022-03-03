<template>
  <IonPage>
    <IonContent>
      <IonButton @click="blindbox_purchase()">mint</IonButton>
    </IonContent>
  </IonPage>
</template>

<script>
import { IonContent, IonPage, IonButton } from '@ionic/vue';


export default  {
  name: 'Tab0',
  components: { IonContent, IonPage, IonButton },
  props:['member_id'],
  methods:{

    blindbox_purchase(){
      this.fetch_blindbox_purchase(this.member_id).then(response => {
        if (response.status ===200){
          alert('mint sucess')
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
  }
}
</script>