<template>
  <IonPage>
    <IonContent></IonContent>
  </IonPage>
</template>

<script>
import {IonPage, IonContent} from '@ionic/vue';
import router from "@/router";
export default {
  name: "execute_stage_ccbpoint_transaction",
  components: {IonPage, IonContent},
  props: ['txn_id',],
  methods:{
    fetch_delete_ccpoint_transaction_staging(txn_id){
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/ccpoint_staging/${txn_id}/store`, requestOptions)
    },
    fetch_get_ccpoint_transaction(txn_id){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      return  fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/ccpoint_transaction/${txn_id}`, requestOptions)
    }
  },
  mounted(){
    if (this.txn_id) {
      this.fetch_delete_ccpoint_transaction_staging(this.txn_id).then(response => {
        if (response.status===200){
          this.fetch_get_ccpoint_transaction(this.txn_id).then(response_b=>
              response_b.json().then(json=>{
                router.replace(`/payment_check?ispayment=${true}&amount=${json['amount']}`).then(()=>{window.location.reload()})
              })
          )

        }else{
          response.json().then(json=>{
            alert(json['message'])
          })
        }
      })
    }

  }
}
</script>
