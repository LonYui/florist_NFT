<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <IonButton @click="close_modal()">close</IonButton>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding"> {{ price }} CCpoint
  <br/>
    sell {{seller_id}}
  <br/>
  buyer {{member_id}}
  buyer balance : {{member_balance}} CCpoint
    <br/>
    after purchase balance = {{member_balance - price}} CCpoint
    <br/>
    <IonItem>
      <IonLabel>交易密碼</IonLabel>
      <IonInput type="number" v-model="purchase_password" placeholder="輸入交易密碼" />
    </IonItem>
    <a href="http://terms.roarrr.io//" target="_blank" rel="noopener noreferrer">服務條款</a>
    <IonCheckbox>我已了解這次購買一但完成後即無法要求退款</IonCheckbox>
    <IonButton @click="purchase()" >交易(verify otp)</IonButton>

  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonInput,IonItem,IonLabel ,IonCheckbox,modalController} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ccpoint_spend_modal',
  props: [
      'title',
    'price',
    'member_id',
    'seller_id',
    'contract_address',
    'token_id',
  ],
  data() {
    return {
      purchase_password:'',
      member_balance: 10000,
    };
  },
  methods:{
    fetch_member_ccpoint_balance(member_id){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/member/${member_id}/ccpoint_balance/`, requestOptions)
    },
    fetch_ccpoint_purchase(buyer_id,contract_address,token_id){
      var formdata = new FormData();
      formdata.append("buyer_id", buyer_id);
      formdata.append("contract_address", contract_address);
      formdata.append("token_id", token_id);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      return fetch(`https://${process.env.VUE_APP_ccb_rock_backed_domain}/sale/ccpoint_purchase`, requestOptions)
    },
    purchase(){
      this.fetch_ccpoint_purchase(this.member_id,this.contract_address,this.token_id).then( response => {
        if(response.status!==200){
          response.json().then(json => {
            alert(`error:${json['message']}`)
          })
        }else{//200
          alert(`sucess`)
          modalController.dismiss()
        }
      })
    },
    close_modal(){
      modalController.dismiss()
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonInput,IonItem,IonLabel,IonCheckbox },
  mounted(){
    let _this = this
    this.fetch_member_ccpoint_balance(this.member_id).then(response => {
      response.json().then( json => {
        _this['member_balance'] = json['balance']
      })
    })
  },
});
</script>